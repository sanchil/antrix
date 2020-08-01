import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { purple, orange, lightBlue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('xs')]:{
            flexFlow: 'column nowrap',
            width: '100%',          
            height: 900,
        },
        [theme.breakpoints.up('sm')]:{
            flexFlow: 'column nowrap',
            width: '100%',           
            height: 600,
        },
        [theme.breakpoints.up('md')]:{
            flexFlow: 'row wrap',          
            width: '100%',
            height: 300,
        },
        

        display: 'flex',
        
        flex: 'auto',
        justifyContent:'space-around',
        alignItems:'center',
        width: '100%',
        
        backgroundColor: orange[900]
    },
    footerpanel:{
        [theme.breakpoints.up('xs')]:{
            flexFlow: 'column wrap',
            width: '95%',
            maxWidth:'95%',
            height: '88%',
        },
        [theme.breakpoints.up('sm')]:{
            flexFlow: 'column wrap',
            width: '95%',
            maxWidth:'95%',
            height: '89%',
        },
        [theme.breakpoints.up('md')]:{
            flexFlow: 'row wrap',
            width: '30%',
            maxWidth:'33%',
            height: '90%',
        },
        


        display: 'flex',
       
        flex: 'auto',
       
        backgroundColor: orange[400],
        padding:30,

    },
    card:{
        fontFamily: '"Roboto Mono", monospace',
        fontWeight:600,
        fontSize: '1.2em',
        letterSpacing:2.2,
        color:lightBlue[700],
        margin:'auto',
    }
}));
const Footer = (props) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.footerpanel}>

            </Box>
            <Box  className={classes.footerpanel}>
            </Box>
            <Box  className={classes.footerpanel}>

                <Typography variant="h6" style={{width:'100%'}}>
                    Contact
                </Typography>
                <Box  className={classes.card}>
                Sandeep Chiluveru<br />
                 +1 647 614 1096<br />
                 sandeepnet@aol.com<br />
                </Box>            
            </Box>
        </Box>
    )
}

export default Footer;