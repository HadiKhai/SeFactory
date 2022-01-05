import React from 'react';
import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    Drawer,
    Hidden,
    IconButton,
    List, ListItem, ListItemText,
    Toolbar,
    useMediaQuery
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useTheme} from "@emotion/react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../assets/logo.png'
import HideOnScroll from "../common/HideOnScroll";

const useStyle = makeStyles(() => ({
    header: {
        backgroundColor:'transparent !important',
        height:'103px',
        padding:'1vw 7vw',
        boxShadow:'unset !important'
    },
    drawerPaper: {
        width: '100%',
    },
    containerHead:{
        display:'flex',
        padding:'1vw 7vw',
        flexDirection:'column',
        height:'103px !important',
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
    },
}))


const CustomAppBar = (props) => {
    const classes = useStyle()

    const categories = ['Get Trained', 'Hire Talent', 'FAQs', 'Blog', 'About Us','Contact']

    const theme = useTheme();

    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const {children} = props;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    return (
            <Box style={{position:'relative'}}>
                <CssBaseline />
                <HideOnScroll {...props}>
                <AppBar position="fixed" className={classes.header}>
                    <Toolbar sx={{paddingLeft: '0 !important'}}>
                        <img className={"logo"} src={Logo} height={80} alt={"logo"}/>
                        <Box sx={{flexGrow: 1}}/>
                        {!matchesMd ?
                            <>
                                {
                                    categories.map((e)=>(
                                        <Button
                                            variant="text"
                                            style={{
                                                marginRight: 12,
                                                color:'white'
                                            }}
                                        >
                                            {e}
                                        </Button>
                                    ))
                                }
                                <Button
                                    variant="contained"
                                    style={{
                                        marginRight: 12,
                                        color:'white'
                                    }}
                                >
                                    Apply Now

                                </Button>
                            </>
                            :
                            <IconButton
                                aria-label="Open drawer"
                                edge="end"
                                style={{
                                    color:'white'
                                    }}
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon/>
                            </IconButton>
                        }
                    </Toolbar>
                </AppBar>
                </HideOnScroll>

                <nav className={classes.drawer}>
                    <Hidden smUp implementation="css">
                        <Drawer
                            variant="temporary"
                            anchor={'right'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            <div className={classes.containerHead}>
                                <div style={{
                                    display:'flex',
                                    '-webkit-align-items': 'center',
                                    '-webkit-box-align': 'center',
                                }}>
                                    <img className={"logo"} src={Logo} height={80} alt={"logo"}/>
                                    <Box sx={{flexGrow: 1}}/>
                                    <>
                                        <IconButton
                                            aria-label="Open drawer"
                                            edge="end"
                                            style={{
                                                color:'black',
                                            }}
                                            onClick={handleDrawerToggle}
                                        >
                                            <CloseIcon/>
                                        </IconButton>
                                    </>
                                </div>

                            </div>
                            <List style={{
                                display: 'flex',
                                flexDirection: 'column',
                                placeContent: 'center',
                                flexGrow: 1,
                                flexShrink: 0,
                            }}>
                                {categories.map((text) => (
                                    <ListItem button key={text} sx={{
                                        textAlign:'center',
                                        fontSize:'8.5 vmin !important'

                                    }}>
                                        <ListItemText

                                            sx={{
                                                fontSize:'8.5vmin !important'

                                            }}
                                            primary={text} />
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </Hidden>
                </nav>
                <div>
                        {children}
                </div>
            </Box>
    )
};

export default CustomAppBar;