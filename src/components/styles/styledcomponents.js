import React from 'react';
import {animated} from 'react-spring';
import styled from 'styled-components';
import {Box, Button} from '@material-ui/core';
import {cyan,blue,lightBlue,red, orange} from '@material-ui/core/colors';

export const TypoHeader = animated(styled(Box)`
font-family: 'Kaushan Script', cursive;
font-weight:300;
font-size:7vw;
letter-spacing:2px;
color:${orange[400]};
margin:auto;
`);

export const TypoHdKaushan = animated(styled(Box)`
font-family: 'Kaushan Script', cursive;
font-weight:300;
font-size:7vw;
letter-spacing:2px;
color:${orange[400]};
margin:auto;
`);


export const TypoHdMerriweather = styled(({fsize,color,...others})=><Box {...others} />)`
font-family: 'Merriweather', serif;
font-weight:500;
font-size: ${props=>props.fsize}vw;
letter-spacing:2px;
color:${props=>props.color?props.color:lightBlue[400]};
margin:auto;
`;

export const TypoHdBaskerville = styled(({fsize,color,...others})=><Box {...others} />)`
font-family: "Baskervville", serif;
font-weight:500;
font-size: ${props=>props.fsize}vw;
letter-spacing:2px;
color:${props=>props.color?props.color:lightBlue[400]};
margin:auto;
`;


export const TypoHdRoboMono = styled(({fsize,color,...others})=><Box {...others} />)`
font-family: 'Roboto Mono', monospace;
font-weight:600;
font-size: ${props=>props.fsize}vw;
letter-spacing:2px;
color:${props=>props.color?props.color:lightBlue[400]};
margin:auto;
transition: all .2s ease-in-out;
:hover{
    transform: scale(1.05);
}
`;

export const TypoHdOpenSans = styled(({fsize,color,...others})=><Box {...others} />)`
font-family: 'Open Sans', sans-serif;
font-weight:700;
font-size: ${props=>props.fsize}vw;
letter-spacing:2px;
color:${props=>props.color?props.color:lightBlue[400]};
margin:auto;
`;



export const Button1 = styled(({width,...others})=><Button {...others} />)`
width:${props=>props.width}
`;
