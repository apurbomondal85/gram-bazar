'use client'
import axiosInstance from "@/app/utiliz/axiosInstance"
import getCategories from "@/app/utiliz/getCategories"
import useImgbb from "@/app/utiliz/useImgbbKey"
import { AddToPhotos, CloudUpload } from "@mui/icons-material"
import { Button, MenuItem, TextField, styled } from "@mui/material"
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Loading from "@/app/components/Loading"

interface CategoryType {
  _id: string
  category_name: string
  category_slug: string
  category_image: string
}

interface Input {
  name: string
  slug: string
  image: string
  description: string
  price: string
  select: string
  stock: string
  discount: string
}
interface ProductType {
  _id: string
  product_name: string
  product_slug: string
  product_img: string
  description: string
  price: string
  select: string
  stock: string
  discount: string
}


const UpdateProduct = () => {
  const [allCategories, setCategories] = useState<CategoryType[]>([]);
  const [product, setProduct] = useState<ProductType>();
  const [refresh, setRefresh] = useState<boolean>(false);
  const { slug } = useParams();


  useEffect(() => {
    const autoGet = async () => {
      const categories = await getCategories();
      setCategories(categories);
      const getProduct = await axiosInstance.get(`get-product/${slug}`)
      setProduct(getProduct.data);

    }
    autoGet();
  }, [refresh]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();

  const handleUpdate = async (data: Input, imgUrl: string | undefined) => {
    const body = { product_name: data.name, product_slug: data.slug, product_img: imgUrl, description: data.description, price: parseInt(data.price), select: data.select, stock: parseInt(data.stock), discount: parseInt(data.discount) };
    const res = await axiosInstance.put(`update-product/${product?._id}`, body);
    if (res.status == 200) {
      toast.success('Product updated Successfuly', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      reset();
      setRefresh(true);
    }
  }

  const onsubmit = async (data: Input) => {
    try {
      if (!data.image[0]) {
        const imgUrl = product?.product_img;
        handleUpdate(data, imgUrl);
      } else {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        const imgUrl = await useImgbb(formData);
        if (imgUrl) {
          handleUpdate(data, imgUrl);
        }
      }

    } catch (error) {
      console.error('Error uploading :', error);
    }
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
        box-sizing: border-box;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: #000;
        background: #fff;
        border: 1px solid #64ffda;
    
        &:hover {
          border-color: #64ffda;
        }
    
        &:focus {
          border-color: #64ffda;
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
  );

  return (
    <div>
      {
        !product?.product_name
          ?
          <div className='w-full h-[600px] flex items-center justify-center'>
            <Loading />
          </div>
          :
          <div className="p-12">
            <h1 className="text-2xl font-semibold tracking-wide"><AddToPhotos /> Update Products</h1>
            <div className="p-12 mt-8 rounded-lg shadow-md bg-white">
              <form onSubmit={handleSubmit(onsubmit)}>
                <div className="w-full flex itc gap-8">
                  <div className="w-full flex flex-col gap-8">
                    <div>
                      <TextField
                        label="Product Name"
                        variant="standard"
                        className="w-full"
                        defaultValue={product?.product_name || ' '}
                        {...register("name", { required: true })}
                      />
                      {errors.name && <p className="text-red-500 text-[10px] mt-1">Name is required</p>}
                    </div>

                    <div>
                      <TextField
                        label="Product Slug"
                        variant="standard"
                        className="w-full"
                        defaultValue={product?.product_slug || ' '}
                        {...register("slug", { required: true })}
                      />
                      {errors.slug && <p className="text-red-500 text-[10px] mt-1">Slug is required</p>}
                    </div>

                    <div>
                      <TextField
                        label="Price"
                        variant="standard"
                        // type="number"
                        className="w-full"
                        defaultValue={product?.price || ' '}
                        {...register("price", { required: true })}
                      />
                      {errors.price && <p className="text-red-500 text-[10px] mt-1">Price is required</p>}
                    </div>

                    <div>
                      <TextField
                        label="Stock"
                        variant="standard"
                        type="number"
                        className="w-full"
                        defaultValue={product?.stock || '0'}
                        {...register("stock", { required: true })}
                      />
                      {errors.stock && <p className="text-red-500 text-[10px] mt-1">Stock is required</p>}
                    </div>

                    <div>
                      <TextField
                        label="Discount"
                        variant="standard"
                        type="number"
                        className="w-full"
                        defaultValue={product?.discount || '0'}
                        {...register("discount", { required: true })}
                      />
                      {errors.discount && <p className="text-red-500 text-[10px] mt-1">Discount is required</p>}
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-8">
                    <div>
                      <TextField
                        select
                        label="categories"
                        className="w-full"
                        defaultValue={product?.select || ' '}
                        {...register("select", { required: true })}
                      >
                        {allCategories?.map((option: CategoryType) => (
                          <MenuItem key={option?._id} value={option?.category_name}>
                            {option?.category_name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>

                    <div>
                      <Textarea minRows={8} value={product?.description || ' '} placeholder="Write Description" className="w-full" {...register("description", { required: true })} />
                      {errors.description && <p className="text-red-500 text-[10px] mt-1">Description is required</p>}
                    </div>

                    <div>
                      <input
                        accept="image/*"
                        className="hidden w-auto"
                        id="image file"
                        multiple
                        type="file"
                        {...register("image")}
                      />
                      <label htmlFor="image file">
                        <Button
                          className="w-auto flex items-center gap-2 capitalize"
                          component="span"
                          variant="contained"
                        >
                          <CloudUpload />
                          <span>Upload Image</span>
                        </Button>
                      </label>
                      {errors.image && <p className="text-red-500 text-[10px] mt-1">Image is required</p>}
                    </div>
                  </div>
                </div>
                <Button variant="contained" type="submit" className="mt-8 capitalize text-black bg-[#64ffda] hover:bg-[#64ffda]">
                  Add Product
                </Button>
              </form>
            </div>
          </div>
      }
    </div>
  )
}

export default UpdateProduct