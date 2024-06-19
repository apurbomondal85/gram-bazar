import RelatedProductSlider from "@/app/components/RelatedProductSlider"
import axiosInstance from "@/app/utiliz/axiosInstance"
import { Container } from "@mui/material"

const RelatedProducts = async({category, productName}:{category: string, productName: string}) => {
    
    const {data} = await axiosInstance.get(`get-category-product/${category}`);
    const products = data.filter((product:any) => product.product_name !== productName);

    return (
        <Container maxWidth="xl">
            <div className="mt-12">
                <div>
                    <h2 className="text-3xl text-slate-700 font-semibold">Related Products</h2>
                    <div className="h-[3px] w-[120px] bg-secondary mt-2"></div>
                </div>
                <RelatedProductSlider products={products}/>
            </div>
        </Container>
    )
}

export default RelatedProducts