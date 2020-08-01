import React from 'react';
import { maketyles } from '@material-ui/core/styles';
import { Box, makeStyles, Typography } from '@material-ui/core';
import clouds from './alex-machado-80sv993lUKI-unsplash.jpg';
import { TypoHdOpenSans } from '../../components/styles/styledcomponents';


const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('xs')]: {

            height: 400,
            maxHeight: 400,
            padding:20,
        },
        [theme.breakpoints.up('sm')]: {

            height: 500,
            maxHeight: 500,
            padding:30,
        },
        [theme.breakpoints.up('md')]: {

            height: 600,
            maxHeight: 600,
            padding:40,

        },
        display: 'flex',
        flexFlow: 'row nowrap',
        flex: 'auto',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        width: '100%',
        maxWidth: '100%',

        backgroundColor: 'white',
        backgroundImage: `url(${clouds})`,
        backgroundSize: 'cover',
    }

}));

const Banner = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <TypoHdOpenSans fsize={7.5} color='white' style={{margin:'20px 20px 50px'}}>
                We put you on a cloud !!!
        </TypoHdOpenSans>


        </Box>
    );
}

export default Banner;