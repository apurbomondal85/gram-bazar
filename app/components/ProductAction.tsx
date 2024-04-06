
import React, { useState } from 'react'
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Menu, MenuItem} from "@mui/material";
import axiosInstance from '../utiliz/axiosInstance';
import { toast } from 'react-toastify';
import UpdateCategory from './UpdateCategory';

interface Action {
    anchorEl: HTMLElement | null
    open: any
    handleClose: any
    id: string
}

const ProductAction = ({anchorEl, open, handleClose, id}:Action) => {

    console.log(id);
    const handleDelete = async () => {
        
        // const deleted = await axiosInstance.delete(`delete-product/${id}`);
        // if (deleted.status) {
        //     toast.success('product is Deleted Successfuly', {
        //         position: "top-right",
        //         autoClose: 3000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: false,
        //         draggable: true,
        //         progress: undefined,
        //     });
        //     handleClose();
        // }else{
        //     toast.error('product is Deleted Failed', {
        //         position: "top-right",
        //         autoClose: 3000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: false,
        //         draggable: true,
        //         progress: undefined,
        //     });
        // }

    }

    return (
        <>
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            <MenuItem onClick={handleDelete} className="text-red-600"><FaTrash /></MenuItem>
            <MenuItem className="text-[#4adab9]"><FaEye /></MenuItem>
            <MenuItem className="text-[#994ada]"><FaEdit /></MenuItem>
        </Menu>
        </>
    )
}

export default ProductAction