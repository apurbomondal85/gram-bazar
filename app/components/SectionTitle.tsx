import { Box, Typography } from "@mui/material";
import React from "react"
interface SectionTitleProps {
    title: string;
  }

const SectionTitle:React.FC<SectionTitleProps> = ({title}) => {
  return (
    <Box sx={{textAlign:'center'}}>
        <Typography variant="h2" className="text-slate-800" sx={{"@media (min-width: 900px)":{fontSize:'28px', fontWeight:'500'},"@media (max-width: 900px)":{fontSize:'22px'}}}>{title}</Typography>
        <div className="h-[2px] w-24 mt-2 rounded-md mx-auto bg-secondary"></div>
    </Box>
  )
}

export default SectionTitle