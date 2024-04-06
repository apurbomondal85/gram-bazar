import { CloudUpload } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";
import axiosInstance from "../utiliz/axiosInstance";
import useImgbb from "../utiliz/useImgbbKey";
import { toast } from "react-toastify";
import { useState } from "react";

interface Input {
    name: string,
    slug: string,
    image: string
}

interface updateType { dialog: boolean, setDialog: Function, category: any, setRefresh: Function, setOpen:Function }



const UpdateCategory = ({ dialog, setDialog, category, setRefresh, setOpen }: updateType) => {
    console.log(category.category_name);
    const [isdelete, setIsDelete] = useState(false);
    const dialogClose = () => {
        setDialog(false);
    };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Input>();

    const onsubmit = async (data: Input) => {

        try {
            if (!data.image[0]) {
                const imgUrl = category?.category_img;
                const body = { category_name: data.name, category_slug: data.slug, category_img: imgUrl };
                const res = await axiosInstance.put(`update-category/${category?._id}`, body);
                if (res.status) {
                    toast.success('Category updated Successfuly', {
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
                    setOpen('');
                    setDialog(false);
                }
            } else {
                
                const formData = new FormData();
                formData.append('image', data.image[0]);

                const imgUrl = await useImgbb(formData);

                if (imgUrl) {
                    const body = { category_name: data.name, category_slug: data.slug, category_img: imgUrl };
                    const res = await axiosInstance.put(`update-category/${category?.id}`, body);
                    if (res.status) {
                        toast.success('Category updated Successfuly', {
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
                        setOpen('');
                        setDialog(false);
                    }
                }
            }

        } catch (error) {
            console.error('Error uploading :', error);
        }
    };


    return (
        <Dialog
            open={dialog}
            onClose={dialogClose}
        >
            <DialogTitle>Update Category</DialogTitle>
            <form onSubmit={handleSubmit(onsubmit)}>
                <DialogContent >
                    <div className="flex items-center gap-4">
                        <div>
                            <TextField {...register("name", { required: true })} defaultValue={category?.category_name} label="Category Name" variant="standard" />
                            {errors.name && <p className="text-red-500 text-[10px] mt-1">Category is required</p>}
                        </div>
                        <div>
                            <TextField {...register("slug", { required: true })} defaultValue={category?.category_slug} label="Category Slug" variant="standard" />
                            {errors.slug && <p className="text-red-500 text-[10px] mt-1">Category slug is required</p>}
                        </div>
                    </div>
                    <div className="mt-4">
                        <input
                            accept="image/*"
                            className="hidden w-auto"
                            multiple
                            id="image file"
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
                        {/* {errors.image && <p className="text-red-500 text-[10px] mt-1">Image is required</p>} */}
                        {
                            category ?
                                <div className={`w-[100px] h-[80px] mx-auto mt-3 rounded-md relative p-1 border-2 border-[#4dcd6d] ${isdelete ? "hidden" : 'block'}`}>
                                    <Image src={category?.category_img} blurDataURL="https://i.ibb.co/WPBt2Wk/blur.webp" width={100} height={80} alt="Product Image" className="w-full h-full rounded-md" />
                                    <div onClick={() => setIsDelete(true)} className="absolute -right-2 -top-2 cursor-pointer text-red-500">
                                        <FaXmark />
                                    </div>
                                </div> : ''
                        }
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={dialogClose} variant="contained" className="bg-[#c02f2f] py-1 px-2 text-white text-[12px] transition-all duration-500 hover:bg-[#c02f2f] capitalize">Cancel</Button>
                    <Button type="submit" variant="contained" className="bg-[#64ffda] py-1 px-2 text-black text-[12px] transition-all duration-500 hover:bg-[#52d8b9] capitalize">Add Category</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default UpdateCategory