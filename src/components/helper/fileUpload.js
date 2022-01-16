

export const fileUpload = async(file) => {

    const cloudUrl = "https://api.cloudinary.com/v1_1/ds3b6otk5/upload";
   
    const formData = new FormData();
    formData.append("upload_preset", "myPortafolio");
    formData.append("file", file);

    try {
        const resp = await fetch(cloudUrl,{

            method: "POST",
            body: formData
        })
        if (resp.ok){
            const closuResp = await resp.json();
            return closuResp.secure_url
        } else {
            throw await resp.json()
        }
        
    } catch (error) {
        
        console.log(error);
    }
}
