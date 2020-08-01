import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Box, AppBar, Button, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {pink, purple, indigo} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        display: 'flex',
        flexFlow: 'row nowrap',
        flex: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',



    },
    appbar: {
        boxSizing: 'border-box',
        background: 'rgba(0,0,0,0.8)',
        boxShadow: 'none',
        backgroundColor: indigo[900],
    }
}));

const Header = (props) => {
    const classes = useStyles();
    return (

        <AppBar position="static" className={classes.appbar} >
            <Toolbar variant="dense" className={classes.toolbar} >

                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    AntrixTech
                </Typography>

           {/*      <Button color="inherit">Login</Button>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Login</Button>
 */}


            </Toolbar>
        </AppBar>


    );
}

export default Header;