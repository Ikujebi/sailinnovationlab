/* 

import { Cloudinary } from '@cloudinary/url-gen';
import { UploadApiResponse } from 'cloudinary'; // Import the type definition for UploadApiResponse from 'cloudinary'


const myCld = new Cloudinary({
  cloud: {
    cloudName: "dalylashp",
    apiKey: "877886712593953",
    apiSecret: "mZhQXeKXYLErQnOEdPrz3uuY-sY",
  },
});


  Uploads an image file to Cloudinary.
  @param file - The image file to upload.
 @returns A Promise that resolves to the URL of the uploaded image.
 
 export const uploadImage = async (file: File): Promise<string> => {
   try {
    // Use myCld.upload() method to upload file
     const response = await myCld.image('file');
     return response.createCloudinaryURL;
   } catch (error) {
     throw error;
  }
 };
 */