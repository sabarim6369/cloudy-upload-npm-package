import axios from 'axios';
import FormData from 'form-data';

/**
 * Function to upload an image to Cloudinary and return the public URL
 * @param {File} file - The file to be uploaded
 * @param {string} uploadPreset - The Cloudinary upload preset
 * @param {string} cloudName - The Cloudinary cloud name
 * @returns {string} - The public URL of the uploaded image
 */
export const getPublicUrl = async (file, uploadPreset, cloudName) => {
  const formData = new FormData();
  formData.append("file", file);  // Attach the file
  formData.append("upload_preset", uploadPreset);  // Attach the upload preset

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;  // Cloudinary API URL

  try {
    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',  // Ensure correct content type for form data
      },
    });

    return response.data.secure_url;  // The public URL of the uploaded image
  } catch (error) {
    console.error("Error uploading image: ", error);
    throw error;
  }
};
