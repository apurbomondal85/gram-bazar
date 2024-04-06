import axiosInstance from "./axiosInstance";

const getProducts = async() => {
    try {
        const allProducts = await axiosInstance.get('get-products');
        return allProducts.data;
    } catch (error) {
        console.log(error);
    }
}

export default getProducts