"use client"
import Image from "next/image"
import logo from '@/public/grambazar.webp'
import { Button, Typography } from "@mui/material"
import { AddToPhotos, Category, GridView, KeyboardArrowDown, KeyboardArrowUp, ShoppingBag, ShoppingCart } from "@mui/icons-material"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface Chil {
    id: number,
    title: string,
    path: string,
}

interface linkType {
    title: string,
    path?: string,
    icon: React.ReactNode,
    chil?: Chil[];
};


const SideBar = () => {
    const [isOpen, setIsOpen] = useState(0);
    const path = usePathname();

    const handleClick = (index: number) => {
        if (isOpen === index) {
            setIsOpen(0);
        } else {
            setIsOpen(index);
        }
    };


    const linkItem: linkType[] = [
        {
            title: "Products",
            icon: <ShoppingCart />,
            chil: [
                {
                    id: 1,
                    title: "Add Products",
                    path: "/dashboard/add-products",
                },
                {
                    id: 2,
                    title: "Products",
                    path: "/dashboard/all-products",
                }
            ]
        },
        {
            title: "Categories",
            path: "/dashboard/categories",
            icon: <Category />,
        },
    ];

    useEffect(() => {
        linkItem.map((item, i) => item?.chil?.map(itemChil => itemChil.path === path && setIsOpen(i + 1)));
    }, [])

    return (
        <div className="relative">
            <div className="bg-white min-h-screen xl:w-[250px] fixed left-0">
                <div className="py-4 border-b-2 border-[#64ffda]">
                    <Image src={logo} alt="Logo" className="mx-auto" />
                </div>
                <div className="px-4 pt-8">
                    <Link href="/dashboard">
                        <Button className="w-full flex gap-2 bg-[#64ffda] text-black py-2 hover:bg-[#64ffda]">
                            <GridView />
                            <Typography variant="body1" className="">Dashboard</Typography>
                        </Button>
                    </Link>
                    <div className="mt-6 flex flex-col items-start gap-4">
                        {
                            linkItem.map((item, i) =>
                                <div className="w-full" key={i}>
                                    {
                                        item.chil
                                            ?
                                            <Button onClick={() => handleClick(i + 1)} className={`w-full justify-between ${isOpen > 0 && isOpen == i + 1 ? "bg-[#64ffda]" : "bg-[rgba(169,175,255,0.2)]"} text-black py-2 capitalize hover:bg-[#64ffda]`}>
                                                <div className="flex items-center gap-2">
                                                    {item?.icon}
                                                    <Typography variant="body1" className="text-start">{item.title}</Typography>
                                                </div>
                                                <div>
                                                    {
                                                        item.chil ? isOpen > 0 && isOpen == i + 1 ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" /> : ''
                                                    }
                                                </div>
                                            </Button>
                                            :
                                            <Link href={item?.path || ""}>
                                                <Button onClick={() => handleClick(i + 1)} className={`w-full justify-start gap-2 ${isOpen > 0 && isOpen == i + 1 ? "bg-[#64ffda]" : "bg-[rgba(169,175,255,0.2)]"} text-black py-2 capitalize hover:bg-[#64ffda]`}>
                                                    {item?.icon}
                                                    <Typography variant="body1" className="text-start">{item.title}</Typography>
                                                </Button>
                                            </Link>
                                    }
                                    {

                                        isOpen == i + 1 && item?.chil &&
                                        <div className={`flex flex-col gap-2 p-4 bg-[#e4e3e3] mt-1`}>
                                            {
                                                item?.chil?.map((listItem, i) =>
                                                    <Link href={listItem.path} key={i}>
                                                        <Button startIcon={<AddToPhotos />} className="bg-transparent text-[#673ab7] hover:bg-transparent capitalize text-">
                                                            {listItem.title}
                                                        </Button>
                                                    </Link>
                                                )
                                            }
                                        </div>
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar