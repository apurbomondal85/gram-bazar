'use client'
import { IconButton, InputBase, alpha, styled } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    boxShadow: '0 0px 3px rgb(123, 31, 162, 0.2)',
    transition: 'all .3s ease',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.05),
        boxShadow: '0 2px 3px rgb(123, 31, 162, 0.5)',
    },
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        backgroundColor: alpha(theme.palette.common.white, 1),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 1)
        },
    },
    [theme.breakpoints.up('md')]: {
        width: '400px',
    },
    [theme.breakpoints.up('lg')]: {
        width: '600px',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width:'100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1rem + ${theme.spacing(1)})`,
        paddingRight: `calc(1.5rem + ${theme.spacing(1)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '350px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '520px',
        },
    },
}));

const SearchBar = () => {
    return (
        <form className="group flex justify-center mx-4 lg:m-0">
            <Search>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton className="transition-all duration-300 group-hover:text-complementary" sx={{ position: 'absolute', right: '0' }}>
                    <SearchIcon />
                </IconButton>
            </Search>
        </form>
    )
}

export default SearchBar