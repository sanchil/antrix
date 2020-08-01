import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import { TextF } from '../../components/datacomponents/inputcomponents';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { addContact } from '../../data/queries';
import { useSpring, animated as a } from 'react-spring';
import { TypoHdOpenSans } from '../../components/styles/styledcomponents';
import {useMediaProp} from '../../lib/userhooks'; 


const useFormStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            width: '95%',
            maxWidth: '95%',
            height: '60%',
            maxHeight: '60%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '95%',
            maxWidth: '95%',
            height: '60%',
            maxHeight: '60%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
            maxWidth: '50%',
            height: '80%',
            maxHeight: '80%',
        },
        position: 'relative',
        display: 'flex',
        flexFlow: 'row wrap',
        flex: 'auto',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',

        padding: 10,
        margin: 'auto',

        //      border:'3px solid blue'

    },
    txtarea: {
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            padding: 5,
        },
        [theme.breakpoints.up('sm')]: {
            width: '95%',
            padding: 5,
        },
        [theme.breakpoints.up('md')]: {
            width: '70%',
            padding: 5,
        },

    }
}));

export const ContactForm = (props) => {
    const classes = useFormStyles();
    const frmData = {}

    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })


  let xs = useMediaProp('xs');
  let sm = useMediaProp('sm');
  let md = useMediaProp('md');


  
  let fsize = 3.0

  if (!(xs && sm)) {
    fsize = 8.0
  } else if (!(sm && md)) {
    fsize = 6.0
  } else {
    fsize = 3.0
  }

    const handleContact = e => {

        addContact(frmData)
            .then(res => {
                console.log('Contact added' + JSON.stringify(res));
                set(state => !state);
            });
    }

    const handleInput = (inp) => e => {

        let val = e.target.value;
        frmData[inp] = val;
    }

    return (
        <Box className={classes.root} >

            <a.div style={{ position: 'absolute', zIndex: 5, opacity: opacity.interpolate(o => 1 - o), transform }} >

                <TextF label="First Name" onChange={handleInput('fname')} />
                <TextF label="Last Name" onChange={handleInput('lname')} />
                <TextF label="Phone" onChange={handleInput('phone')} />
                <TextF label="Email Id" onChange={handleInput('email')} />


                <Box className={classes.txtarea}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        rowsMin={3}
                        cols={60}
                        maxLength={300}
                        placeholder="What can we do for you?"
                        style={{ width: '95%', margin: 'auto' }}
                        onChange={handleInput('info')}
                    />
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: 15 }}
                    onClick={handleContact}>
                    Contact Us.
            </Button>



            </a.div>

            <a.div style={{ position: 'absolute', zIndex: 1, opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
                <TypoHdOpenSans fsize={fsize}>
                    Thank you !!
            </TypoHdOpenSans>
                <TypoHdOpenSans fsize={fsize-1}>
                    <br />We will get back to you shortly.
            </TypoHdOpenSans>
            </a.div>

        </Box>
    );
}

/*
const useSectionStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            flexFlow: 'column wrap',
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            height: 550,
        },
        [theme.breakpoints.up('sm')]: {
            flexFlow: 'column wrap',
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            height: 550,
        },
        [theme.breakpoints.up('md')]: {
            flexFlow: 'row wrap',
            justifyContent: 'space-around',
            alignContent: 'center',
            alignItems: 'center',
            height: 450,
        },
        display: 'flex',
        flex: 'auto',
        width: '100%',
        backgroundColor: yellow[100],

    }
}));



 const ContactSection = (props) => {
    const classes = useSectionStyles();

    return (
        <Box className={classes.root}>
            {props.children}
        </Box>
    );
}


export default ContactSection;
 */