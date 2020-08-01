import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useGrid1Styles = makeStyles(theme => ({
 
 
}));

const Grid1 = (props)=> {
  const classes = useGrid1Styles();
  const pageObjArr = React.Children.toArray(props.children);
  return (
    <React.Fragment>
        <Grid item xs={12}>
         
            {pageObjArr?pageObjArr[0]:""}
         
        </Grid>
        <Grid item xs={12}>
         
         {pageObjArr?pageObjArr[1]:""}
      
     </Grid>
      
        <Grid item xs={12} sm={6}>
        
          {pageObjArr?pageObjArr[2]:""}
        
        </Grid>
        <Grid item xs={12} sm={6}>
        
          {pageObjArr?pageObjArr[3]:""}
        
        </Grid>

        <Grid item xs={12} sm={6}>
        
        {pageObjArr?pageObjArr[4]:""}
      
      </Grid>
      <Grid item xs={12} sm={6}>
      
        {pageObjArr?pageObjArr[5]:""}
      
      </Grid>

      <Grid item xs={12}>
         
         {pageObjArr?pageObjArr[6]:""}
      
     </Grid>
      
     
      </React.Fragment>
    
  );
}

export default Grid1;
