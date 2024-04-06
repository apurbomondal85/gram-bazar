import React, { ReactNode } from "react"
import NavBar from "../components/dashboard/NavBar"
import { Grid } from "@mui/material"
import SideBar from "../components/dashboard/SideBar"

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Grid container>
            <Grid item xs={2}>
                <SideBar />
            </Grid>
            <Grid item xs={10} className="">
                <NavBar />
                <div className="bg-[#fdf1ff] min-h-screen">
                    {children}
                </div>
            </Grid>
        </Grid>
    )
}

export default DashboardLayout