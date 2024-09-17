"use client";
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Avatar, Card, CardMedia } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { mobMode, setStateSelector } from '../store/slice/Slice';

const drawerWidth = 240;
const navItems = ['Home', 'About Us', 'Services', 'Contact'];

function Header(props) {
    const { window } = props;
    // const [mobileOpen, setMobileOpen] = useState(false);
    const dispatch = useDispatch();
    const { mobileOpen } = useSelector(setStateSelector);

    const handleDrawerToggle = () => {
        // setMobileOpen((prevState) => !prevState);
        dispatch(mobMode());
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

            {/* <Avatar alt="BOUWBEDRIJF" src="/images/logo.png"
            sx={{ml: 2, w: 72}} /> */}
            {/* <CardMedia
                component="img"
                height="200"
                image={'/images/logo.png'}
                alt={'BOUWBEDRIJF'}
            /> */}
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} sx={{ color: 'black' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ bgcolor: 'white', padding: '10px' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none', sm: 'none' }, color: 'black' }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Card sx={{width:200, marginRight:{lg:20, md:10}, display:{sm:'none', md:'block'}}}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={'/images/logo.png'}
                            alt={'BOUWBEDRIJF'}
                        />
                    </Card>
                    {/* <img
                        srcSet={`/images/logo.png?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`/images/logo.png?w=164&h=164&fit=crop&auto=format`}
                        alt={'hjj'}
                        loading="lazy"
                    /> */}
                    <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: 'black', marginRight: { lg: '30px', md: '10px' }, fontWeight: '500', fontSize: { lg: '1.10rem', md: '1rem' } }}>
                                {item}
                            </Button>
                        ))}
                        {/* <Button
                            sx={{
                                backgroundColor: 'black',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'darkgrey',
                                },
                                marginLeft: { lg:'20px', md:'10px' },
                                paddingX: '16px' // Add spacing if needed
                            }}
                        >
                            Offerate aanveragen
                        </Button> */}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

Header.propTypes = {
    window: PropTypes.func,
};

export default Header;