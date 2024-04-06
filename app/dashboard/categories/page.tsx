"use client"
import CategoryAction from "@/app/components/CategoryAction";
import CategoryModal from "@/app/components/CategoryModal";
import getCategories from "@/app/utiliz/getCategories";
import { AddToPhotos } from "@mui/icons-material";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Data {
    _id: string;
    category_name: string;
    category_slug: string;
    category_img: string;
}

const Categories = () => {
    const [isOpen, setOpen] = useState<string>('');
    const [dialog, setDialog] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [refresh, setRefresh] = useState(false);
    const [allCategories, setCategories] = useState<Data[]>([]);

    useEffect(() => {
        const autoGet = async () => {
            const categories = await getCategories();
            setCategories(categories);
        }
        autoGet();
    }, [refresh, dialog, isOpen])

    const handleClickOpen = () => {
        setDialog(true);
    };
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <div className="p-12">
            <h1 className="text-2xl font-semibold tracking-wide">All Categories</h1>
            <div className="p-12 mt-8 rounded-lg shadow-md bg-white">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-semibold tracking-wide">Category List</h1>
                    <Button onClick={handleClickOpen} variant="contained" className="bg-[#64ffda] text-black text-[16px] transition-all duration-500 hover:bg-[#52d8b9] capitalize">
                        <AddToPhotos fontSize="small" className="mr-2" />
                        Add
                    </Button>
                </div>
                <TableContainer sx={{ minHeight: 330 }}>
                    <Table stickyHeader aria-label="sticky table" className="border-s border-e">
                        <TableHead>
                            <TableRow>
                                <TableCell className="font-semibold text-[16px] border-t" align="center">Category Name</TableCell>
                                <TableCell className="font-semibold text-[16px] border-t" align="center">Category Slug</TableCell>
                                <TableCell className="font-semibold text-[16px] border-t" align="center">Image</TableCell>
                                <TableCell className="font-semibold text-[16px] border-t" align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allCategories?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((category: any) => (
                                <TableRow
                                    key={category?._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{category?.category_name}</TableCell>
                                    <TableCell align="center">{category?.category_slug}</TableCell>
                                    <TableCell align="center">
                                        <Image src={category?.category_img} loading="lazy" alt="product image" className="mx-auto" width={60} height={60} />
                                    </TableCell>
                                    <TableCell align="center" className="relative">
                                        <Button variant="contained" className="bg-[#64ffda] text-black transition-all duration-500 hover:bg-[#52d8b9] capitalize" onClick={() => setOpen(category?._id)}>
                                            Action
                                        </Button>
                                        <CategoryAction setOpen={setOpen} open={isOpen} id={category?._id} setRefresh={setRefresh} />
                                    </TableCell>
                                    <div onClick={() => setOpen('')} className={`absolute top-0 left-0 w-full h-full z-10 ${isOpen == category?._id ? "block" : "hidden"}`}></div>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15, 20]}
                    component="div"
                    count={allCategories?.length}
                    color="secondary"
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    sx={{ "& .css-zylse7-MuiButtonBase-root-MuiIconButton-root": { bgcolor: '#64ffda' } }}
                />
            </div>
            <CategoryModal dialog={dialog} setDialog={setDialog} />
        </div>
    )
}

export default Categories