
import React, { useState } from 'react'
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Button, Menu, MenuItem } from "@mui/material";
import axiosInstance from '../utiliz/axiosInstance';
import { toast } from 'react-toastify';
import UpdateCategory from './UpdateCategory';

interface Action {
    open: string
    setOpen: Function
    id: string
    setRefresh: Function
}

const CategoryAction = ({ setOpen, open, id, setRefresh }: Action) => {
    const [editDialog, setEditDialog] = useState(false);
    const [category, setCategory] = useState<object>({});

    const handleDelete = async (_id: string) => {
        const deleted = await axiosInstance.delete(`/delete-category/${_id}`);
        if (deleted.status) {
            toast.success('Category is Deleted Successfuly', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            setOpen('');
        } else {
            toast.error('Category is Deleted Failed', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }

    }

    const handleEdit = async (_id:string) => {
        const category = await axiosInstance.get(`/get-category/${_id}`);

        setCategory(category.data);
        setEditDialog(true)
    }

    return (
        <>
            <div className={`py-2 flex flex-col justify-center items-center shadow-md absolute -bottom-[78px] rounded-md left-1/2 -translate-x-1/2 bg-white z-20 ${open == id ? "block" : "hidden"}`}>
                <Button onClick={() => handleDelete(id)} className="px-1 text-red-600"><FaTrash /></Button>
                <Button className="px-1 text-[#4adab9]"><FaEye /></Button>
                <Button onClick={() => handleEdit(id)} className="px-1 text-[#994ada]"><FaEdit /></Button>
            </div>
            {
                editDialog ? 
                <UpdateCategory dialog={editDialog} setDialog={setEditDialog} category={category} setRefresh={setRefresh} setOpen={setOpen} />
                : ''
            }
        </>
    )
}

export default CategoryAction