import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Twój Kantor
          </Typography>
          <Link to='/'>
          <Button color="inherit" startIcon={< CurrencyExchangeIcon />}>Exchange</Button >
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}