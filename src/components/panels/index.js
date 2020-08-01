import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import { yellow, pink, green } from '@material-ui/core/colors';

// 


export const Panel = styled(Box)`
    display: flex;
    flex: auto;      
    width: 100%;      
    background-color:${yellow[100]}; 
    
    @media only screen and (min-width: 320px) and (max-width:767px) { 
        flex-flow: column wrap;
        justify-content: flex-start;
        align-content:center;
        align-items:center;
        height: 700px;
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {        
       
        flex-flow: row wrap;
        justify-content: space-around;
        align-content:center;
        align-items:center;
        height: 550px;     
    }

    @media only screen and (min-width: 1024px) { 
      
        flex-flow: row wrap;
        justify-content: space-around;
        align-content:center;
        align-items:center;
        height: 450px;
         
    }
`
