import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:CLOUDINARY_API_KEY,
    api_secret:CLOUDINARY_API_SECRET
})

export const uploadToCloudinary=async function(localFilepath) {
try{
    if(!localFilepath)return

   const response=await cloudinary.uploader.upload(localFilepath,{
        resource_type:"auto"
    })
    console.log("file uploaded sucessfully ....")
    return response
}catch(error)
{
 FileSystem.unlinkSync(localFilepath) //remove the locally saved temporary file from server
 return null
}
    
}