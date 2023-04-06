import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import Container from '@mui/material/Container';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const drawerWidth = 240;
const navItems = ["Services", 'Contact', "Dashboard", "Login", "Register"];

export default function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, logOut } = useContext(AuthContext);

    console.log(user?.email);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant='h6' sx={{ my: 2 }}>
                <Button variant="outlined">
                    <CancelIcon sx={{ height: '30px' }} variant="contained" />
                </Button>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText   >
                                <Button href={item}
                                    sx={{ color: 'primary.main' }}
                                    variant='text'
                                >
                                    {item}
                                </Button>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                component='nav'
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    mt: 2,
                    position: 'static'
                }}
            >
                <Container>
                    <Toolbar>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge='start'
                            onClick={handleDrawerToggle}
                            sx={{
                                mr: 2,
                                display: { md: 'none' },
                                backgroundColor: 'primary.main',
                                '&:hover': {
                                    backgroundColor: 'primary.main',

                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box
                            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
                        >
                            <Link to="/">
                                <img
                                    src='https://i.ibb.co/JsvBDwD/logo.png'
                                    alt=''
                                    style={{
                                        width: '150px',
                                    }}
                                />
                            </Link>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>

                            <Button href="/Contact"
                                sx={{ color: 'primary.main' }}
                                variant='text'
                            >
                                Contact
                            </Button>
                            <Button href="/Services"
                                sx={{ color: 'primary.main' }}
                                variant='text'
                            >
                                Services
                            </Button>

                            {
                                user?.email ?
                                    <>
                                        <Button href="Dashboard"
                                            sx={{
                                                bgcolor: 'primary.green',
                                            }}
                                        >
                                            Dashboard
                                        </Button>
                                        <Button
                                            onClick={() => logOut()}
                                            sx={{
                                                bgcolor: 'primary.green',
                                            }}
                                        >
                                            LogOut
                                        </Button>
                                    </>
                                    :
                                    <>
                                        <Button href="Register"
                                            sx={{
                                                bgcolor: 'primary.green',
                                            }}
                                        >
                                            Register
                                        </Button>


                                        <Button href="Login"
                                            sx={{
                                                bgcolor: 'primary.green',
                                            }}
                                        >
                                            Login
                                        </Button>
                                    </>
                            }










                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component='nav'>
                <Drawer
                    container={container}
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component='main'>
                <Toolbar />
            </Box>
        </Box >
    );
}