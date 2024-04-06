import axiosInstance from "./axiosInstance";

const getCategories = async () => {
    try {
        const allCategories = await axiosInstance.get('get-categories');
        return allCategories.data;
    } catch (error) {
        console.log(error);
    }
}

export default getCategories;