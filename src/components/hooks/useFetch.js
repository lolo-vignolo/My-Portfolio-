import{ useEffect, useState } from 'react'

export const useFetch = (url) => {
   
    const [state, setState] = useState({data:{}, error: null})

    useEffect(() => {

        fetch(url)
        .then(resp => resp.json())
        .then (data =>{
            setState ({
                error:null,
                data:data
            })
        })
        
    }, [url])

    return state;
}
