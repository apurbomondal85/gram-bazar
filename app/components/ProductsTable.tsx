import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Menu, MenuItem } from "@mui/material";
import { toast } from 'react-toastify';
import axiosInstance from "../utiliz/axiosInstance";
import Image from "next/image";
import ProductAction from "./ProductAction";
import Link from "next/link";
import Loading from "./Loading";

const ProductsTable = ({ allProducts, setRefresh }: { allProducts: any, setRefresh: Function }) => {
    const [isOpen, setOpen] = useState<string>('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDelete = async (id: string) => {

        const deleted = await axiosInstance.delete(`delete-product/${id}`);
        if (deleted.status) {
            toast.success('product is Deleted Successfuly', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            setOpen('');
            setRefresh(true)
        } else {
            toast.error('product is Deleted Failed', {
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

    return (
        <>
            {
                !allProducts?.length ?
                    <div className='w-full h-[600px] flex items-center justify-center'>
                        <Loading />
                    </div>
                    :
                    <TableContainer sx={{ minHeight: 330 }}>
                        <Table stickyHeader aria-label="sticky table" className="border-s border-e">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="font-semibold text-[16px] border-t" align="center">Product Name</TableCell>
                                    <TableCell className="font-semibold text-[16px] border-t" align="center">Product Slug</TableCell>
                                    <TableCell className="font-semibold text-[16px] border-t" align="center">Product Price</TableCell>
                                    <TableCell className="font-semibold text-[16px] border-t" align="center">Image</TableCell>
                                    <TableCell className="font-semibold text-[16px] border-t" align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allProducts?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product: any) => (
                                    <TableRow
                                        key={product?._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{product?.product_name}</TableCell>
                                        <TableCell align="center">{product?.product_slug}</TableCell>
                                        <TableCell align="center">{product?.price}</TableCell>
                                        <TableCell align="center">
                                            <Image src={product?.product_img} loading="lazy" alt="product image" className="mx-auto" width={60} height={60} />
                                        </TableCell>
                                        <TableCell align="center" className="relative">
                                            <Button variant="contained" className="bg-[#64ffda] text-black transition-all duration-500 hover:bg-[#52d8b9] capitalize" onClick={() => setOpen(product?._id)}>
                                                Action
                                            </Button>
                                            <div className={`py-2 flex flex-col justify-center items-center shadow-md absolute -bottom-[78px] rounded-md left-1/2 -translate-x-1/2 bg-white z-20 ${isOpen == product?._id ? "block" : "hidden"}`}>
                                                <Button onClick={() => handleDelete(product?._id)} className="px-1 text-red-600"><FaTrash /></Button>
                                                <Button className="px-1 text-[#4adab9]"><FaEye /></Button>
                                                <Link href={`/dashboard/update-product/${product?.product_slug}`}><Button className="px-1 text-[#994ada]"><FaEdit /></Button></Link>
                                            </div>
                                        </TableCell>
                                        <div onClick={() => setOpen('')} className={`absolute top-0 left-0 w-full h-full z-10 ${isOpen == product?._id ? "block" : "hidden"}`}></div>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            }
            <TablePagination
                rowsPerPageOptions={[5, 10, 15, 20]}
                component="div"
                count={allProducts?.length}
                color="secondary"
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{ "& .css-zylse7-MuiButtonBase-root-MuiIconButton-root": { bgcolor: '#64ffda' } }}
            />
        </>
    )
}

export default ProductsTable;