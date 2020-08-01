import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box} from '@material-ui/core';
import {blue} from '@material-ui/core/colors';



const useRStyles = makeStyles(theme=>({
    root:{
        [theme.breakpoints.up('xs')]: {
            flexFlow:'row nowrap',
            height:300,
        },
        [theme.breakpoints.up('sm')]: {
            flexFlow:'row nowrap',
            height:350,
        },
        [theme.breakpoints.up('md')]: {
            flexFlow:'row nowrap',
            height:400,
        },
        display:'flex',
        flexFlow:'row nowrap',
        flex:'auto',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%',
        height:400,
        backgroundColor: blue[50],
        overflow:'hidden',
    }
}));

export const RBox = (props)=>{
    const classes = useRStyles();
    return(
        <Box className={classes.root}>
            {props.children}
        </Box>
    );

}

const useLStyles = makeStyles(theme=>({
    root:{
        [theme.breakpoints.up('xs')]: {
            flexFlow:'row nowrap',
            height:300,
        },
        [theme.breakpoints.up('sm')]: {
            flexFlow:'row nowrap',
            height:350,
        },
        [theme.breakpoints.up('md')]: {
            flexFlow:'row nowrap',
            height:400,
        },
        display:'flex',
        
        flex:'auto',
        justifyContent:'space-around',
        alignItems:'center',

        width:'100%',
        
       padding:40,
    }
}));

export const LBox = (props)=>{
    const classes = useLStyles();
    return(
        <Box className={classes.root}>
            {props.children}
        </Box>
    );

}