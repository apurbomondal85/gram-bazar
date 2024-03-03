import { Box, Container, Divider, Stack, Typography } from "@mui/material"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Link from "next/link";

const TopHeader = () => {
    return (
        <div className="w-full bg-secondary py-2 hidden sm:block">
            <Container maxWidth={"xl"}>
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Stack direction="row" alignItems="center" spacing="1px" color={'white'}>
                            <LocalPhoneIcon className="text-xs font-medium" />
                            <Typography variant="body2" className="text-xs font-medium">
                                We are available 24/7, Need help?
                            </Typography>
                        </Stack>
                        <Typography variant="body2" className="text-xs text-primary font-semibold">
                            +566426654
                        </Typography>
                    </Stack>
                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1} color="white">
                        <Link href='#'><Typography variant="body2" className="text-xs">About Us</Typography></Link>
                        <Link href='#'><Typography variant="body2" className="text-xs">Contact Us</Typography></Link>
                        <Link href='#'><Typography variant="body2" className="text-xs">My Account</Typography></Link>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}

export default TopHeader