import { CloudUpload } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import axiosInstance from "../utiliz/axiosInstance";
import useImgbb from "../utiliz/useImgbbKey";
import { toast } from "react-toastify";

interface Input {
    name: string,
    slug: string,
    image: string
    icon: string
}



const CategoryModal = ({ dialog, setDialog }: { dialog: boolean, setDialog: Function }) => {
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
        const imgData = new FormData();
        const iconData = new FormData();
        
        imgData.append('image', data.image[0]);
        iconData.append('image', data.icon[0]);
        try {
            const imgbbUrl = await useImgbb(imgData);
            const iconUrl = await useImgbb(iconData);
            

            if (imgbbUrl && iconUrl) {
                const body = { category_name: data.name, category_slug: data.slug, category_img: imgbbUrl, category_icon: iconUrl };
                const res = await axiosInstance.post('create-categories', body);
                if (res.status) {
                    toast.success('Category added Successfuly', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    });
                    reset();
                    setDialog(false);
                }
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };


    return (
        <Dialog
            open={dialog}
            onClose={dialogClose}
        >
            <DialogTitle>Add Category</DialogTitle>
            <form onSubmit={handleSubmit(onsubmit)}>
                <DialogContent >
                    <div className="flex items-center gap-4">
                        <div>
                            <TextField {...register("name", { required: true })} label="Category Name" variant="standard" />
                            {errors.name && <p className="text-red-500 text-[10px] mt-1">Category is required</p>}
                        </div>
                        <div>
                            <TextField {...register("slug", { required: true })} label="Category Slug" variant="standard" />
                            {errors.slug && <p className="text-red-500 text-[10px] mt-1">Category slug is required</p>}
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-2">
                        <div>
                            <input
                                accept="image/*"
                                className="hidden w-auto"
                                multiple
                                id="image file"
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
                                    <span>Upload Category Image</span>
                                </Button>
                            </label>
                            {errors.image && <p className="text-red-500 text-[10px] mt-1">Image is required</p>}
                        </div>
                        <div>
                            <input
                                accept="image/*"
                                className="hidden w-auto"
                                multiple
                                id="icon file"
                                type="file"
                                {...register("icon", { required: true })}
                            />
                            <label htmlFor="icon file">
                                <Button
                                    className="w-auto flex items-center gap-2 capitalize"
                                    component="span"
                                    variant="contained"
                                >
                                    <CloudUpload />
                                    <span>Upload Category Icon</span>
                                </Button>
                            </label>
                            {errors.icon && <p className="text-red-500 text-[10px] mt-1">Icon is required</p>}
                        </div>
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

export default CategoryModal