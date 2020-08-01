import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid1 from '../../components/grids/grid1';
import { Paper, Box, Typography } from '@material-ui/core';
import Banner from '../../components/banner';
import { RBox, LBox } from './components';
import { ContactForm } from '../contact';
import { TypoHdRoboMono } from '../../components/styles/styledcomponents';
import { Panel } from '../../components/panels';
import { useMediaProp } from '../../lib/userhooks';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  forminfo: {
    [theme.breakpoints.up('xs')]: {
      width: '95%',
      height: '40%',
      padding: 40,
    },
    [theme.breakpoints.up('sm')]: {
      width: '95%',
      height: '40%',
      padding: 40,
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
      height: '100%',
      padding: 40,
    },


  }

}))

const Home = (props) => {
  const classes = useStyles();
  

  let xs = useMediaProp('xs');
  let sm = useMediaProp('sm');
  let md = useMediaProp('md');


  
  let fsize = 2.2

  if (!(xs && sm)) {
    fsize = 5.0
  } else if (!(sm && md)) {
    fsize = 3.0
  } else {
    fsize = 2.2
  }

  return (
    <Grid1>
      <Banner />
      <Box></Box>

      <RBox>
        <img src="./img/mike-petrucci-c9FQyqIECds-unsplash.jpg" width="100%" height="auto" />
      </RBox>
      <LBox>
        <TypoHdRoboMono fsize={fsize} style={{ textAlign: 'justify' }}>
          The one stop solutions for small businesses.
          </TypoHdRoboMono>
      </LBox>

      {(sm && md)
        ?
        <LBox>
          <TypoHdRoboMono fsize={fsize} style={{ textAlign: 'justify' }}>
            We provide a quick and cost effective solutions
            for creating a hassle free online presence on the web.
        </TypoHdRoboMono>
        </LBox>
        :
        <RBox>
          <img src="./img/cloud-computing.png" width="40%" height="auto" />
        </RBox>
      }


      {(sm && md)
        ?
        <RBox>
          <img src="./img/cloud-computing.png" width="40%" height="auto" />
        </RBox>

        :
        <LBox>
          <TypoHdRoboMono fsize={fsize} style={{ textAlign: 'justify' }}>
            We provide quick and cost effective solutions
            for creating presence on the web.
      </TypoHdRoboMono>
        </LBox>
      }





      <Panel>
        <Box className={classes.forminfo} >
          <TypoHdRoboMono fsize={fsize} style={{ textAlign: 'justify' }}>
            Provide digital marketing solutions for professionals, such as CPA's, Financial Analysts, Lawyers, Property agents, Food joints, Grocery Stores etc.
          </TypoHdRoboMono>
        </Box>
        <ContactForm />
      
      </Panel>


    </Grid1>
  );

}

export default Home;
