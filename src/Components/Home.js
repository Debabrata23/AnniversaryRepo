import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DialogBox from './Dialog';
import AnimateText from './CommonComponent/AnimateText';
import AnimatedText from 'react-animated-text-content';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useState,useEffect } from 'react';
import Images from './Images';
import NavigateButton from './CommonComponent/NavigateButton';
const Home = (props) => {
    const [nav,setNav]=useState(false);
  
    const galleryPage=isNav=>
    {
        
        isNav?setNav(true):setNav(false)
    }
    if(!nav)
    {
        return (
            <div className='home-img'>
                <DialogBox/>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container>
                        <Grid item xs={4} className='textGrid'>
                            <span className='span_text animate__animated animate__float'>1st Year Aniversary of Pritha Weds Debabrata</span>
                            <span className='span_date'>20th February 2023</span>
                            <AnimateText type="words" animationtype="blocks" texttodisplay="“In a sea of people, my eyes will always search for you.”" classDefault="animated-paragraph" />
    
                        </Grid>
                        <Grid item xs={8} className='imgGrid'>
                            <div className='home1_img_div animate__animated animate__bounce'><img src={require('../../src/images/home1.JPG')} className='home1_img' /></div>
                            <div className='home2_img_div animate__animated animate__zoomIn'><img src={require('../../src/images/home2.JPG')} className='home2_img' /></div>
                            <div className='home3_img_div animate__animated animate__bounce'><img src={require('../../src/images/home3.JPG')} className='home3_img' /></div>
                            <NavigateButton nav={nav} navigatePage={galleryPage} textDefault="View Wedding Images" classDefault="navigatebutton"/>
                          
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
    }
    else{
         return(<Images items={props.items}/>)
    }
  
}

export default Home
