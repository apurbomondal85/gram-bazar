"use client"
import { AddToPhotos, CloudUpload } from "@mui/icons-material"
import { Button, MenuItem, TextField } from "@mui/material"
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import getCategories from "@/app/utiliz/getCategories";
import { useForm } from "react-hook-form";
import useImgbb from "@/app/utiliz/useImgbbKey";
import axiosInstance from "@/app/utiliz/axiosInstance";
import { toast } from "react-toastify";

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


const AddProducts = () => {
  const [allCategories, setCategories] = useState<CategoryType[]>();

  useEffect(() => {
    const autoGet = async () => {
      const categories = await getCategories();
      setCategories(categories);
    }
    autoGet();
  }, []);

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();

  const onsubmit = async (data: Input) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);
    
    try {
      const imgbbUrl = await useImgbb(formData);
      const price = parseInt(data.price) | 0;
      const stock = parseInt(data.stock) | 0;
      const disc = parseInt(data.discount) | 0;

      if (imgbbUrl) {
        const body = { product_name: data.name, product_slug: data.slug, product_img: imgbbUrl, description: data.description, price: price, select: data.select, stock: stock, discount: disc};
        
        const res = await axiosInstance.post('create-products', body);
        if (res.status) {
          toast.success('Product added Successfuly', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          reset();
        }
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="p-12">
      <h1 className="text-2xl font-semibold tracking-wide"><AddToPhotos /> Add Products</h1>
      <div className="p-12 mt-8 rounded-lg shadow-md bg-white">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="w-full flex itc gap-8">
            <div className="w-full flex flex-col gap-8">
              <div>
              <TextField
                id="product_name"
                label="Product Name"
                variant="standard"
                className="w-full"
                {...register("name", { required: true })}
              />
              {errors.name && <p className="text-red-500 text-[10px] mt-1">Name is required</p>}
              </div>

              <div>
              <TextField
                id="product_slug"
                label="Product Slug"
                variant="standard"
                className="w-full"
                {...register("slug", { required: true })}
              />
              {errors.slug && <p className="text-red-500 text-[10px] mt-1">Slug is required</p>}
              </div>

              <div>
              <TextField
                id="price"
                label="Price"
                variant="standard"
                // type="number"
                className="w-full"
                {...register("price", { required: true })}
              />
              {errors.price && <p className="text-red-500 text-[10px] mt-1">Price is required</p>}
              </div>

              <div>
              <TextField
                id="stock"
                label="Stock"
                variant="standard"
                type="number"
                className="w-full"
                {...register("stock", { required: true })}
              />
              {errors.stock && <p className="text-red-500 text-[10px] mt-1">Stock is required</p>}
              </div>

              <div>
              <TextField
                id="discount"
                label="Discount"
                variant="standard"
                type="number"
                className="w-full"
                {...register("discount", { required: true })}
              />
              {errors.discount && <p className="text-red-500 text-[10px] mt-1">Discount is required</p>}
              </div>
            </div>

            <div className="w-full flex flex-col gap-8">
              <div>
              <TextField
                id="categories"
                select
                label="categories"
                className="w-full"
                defaultValue="Vegetable"
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
             <Textarea aria-label="Description" minRows={8} placeholder="Write Description" className="w-full" {...register("description", { required: true })} />
              {errors.description && <p className="text-red-500 text-[10px] mt-1">Description is required</p>}
             </div>

              <div>
                <input
                  accept="image/*"
                  className="hidden w-auto"
                  id="image file"
                  multiple
                  type="file"
                  {...register("image", { required: true })}
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
  )
}

export default AddProducts