import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, CssBaseline} from '@material-ui/core';
import Footer from './components/footer';
import Header from './components/header'

const useStyles = makeStyles(theme=>({
    root: {
       
        flexGrow: 1,         
     //   width:'100%',
      //  maxWidth:'100%',
     //   border:'4px solid green'     
       

    },
}));


const AppGrid = (props)=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <CssBaseline />
            <Header />
              <Grid container >                 
                    {props.children}
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
        </div>
    );
}

export default AppGrid;