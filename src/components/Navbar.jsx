import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor:"black", color:"pink", borderRadius:"30px"}}>
            <Toolbar>
                <Link to={'/'}>
                    <Button color="inherit" style={{color:"pink", border:"1px", borderColor:"pink"}}>Products</Button>
                </Link>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Pringle</Typography>
                <Link to={'/add'}>
                    <Button color="inherit" style={{color:"pink"}}>Add Products</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar
