import { Home } from "@mui/icons-material"
import { Breadcrumbs, Link } from "@mui/material"

const Breadcrumb = ({ title }: { title: string }) => {
    return (
        <div>
            <div className="h-[200px] w-full bg-primary my-2 flex justify-center items-center">
                <h2 className="text-white text-3xl font-semibold">{title}</h2>
            </div>
            <div className="flex justify-center py-4 bg-[#ebebeb]">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        <Home />
                    </Link>
                    <p className="text-color-gray" >
                        {title}
                    </p>
                </Breadcrumbs>
            </div>
        </div>
    )
}

export default Breadcrumb