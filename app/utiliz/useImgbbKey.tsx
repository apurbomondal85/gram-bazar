
import axios from "axios";

const useImgbb = async(formData: object) => {
    try {
        const response = await axios.post(`https://api.imgbb.com/1/upload?key=b160019366ea098005a89408a9d91fbc`, formData);
        return response.data.data.display_url;
      } catch (error) {
        console.error('Error uploading image:', error);
      }
}

export default useImgbb;