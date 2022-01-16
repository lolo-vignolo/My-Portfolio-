
const baseUrl = process.env.REACT_APP_API_URL;



export const fetchSinToken = (endpoint, data, method = "GET") =>{

    const url = `${baseUrl}/${endpoint}`; //localhost:4000/api/auth or event...

    console.log(url);
    if (method==="GET"){
        return fetch(url);
    } else {
        return fetch(url, {
            
            method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify( data )

        });
    }

}

export const fetchConToken = (endpoint, data, method = "GET") =>{

    const url = `${baseUrl}/${endpoint}`; 
    const token = localStorage.getItem("token") || " "; 
    
    if (method==="GET"){
        return fetch (url, {
            method,
            headers:{ // este header mirar el postman, es donde pongo key: x-token y en valu el token.
                "x-token" : token
            }
        })
    } else {
        return fetch(url, {
            //creo una petición HTTPS (method, header, body)
            method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "x-token" : token
            },
            body: JSON.stringify ( data )

        });
    }

}
