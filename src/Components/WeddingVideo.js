import React from 'react'
import ReactPlayer from "react-player";
import { Honeycomb, Hexagon } from "react-honeycomb";
import range from "lodash/range";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Home from './Home';
import AnimateText from './CommonComponent/AnimateText';
const WeddingVideo = (props) => {
    const [rediHome, setRediHome] = useState(false);
    const redirectToHome = () => {
        setRediHome(true);
    }
    if (!rediHome) {
        return (
            <div>
                <div className='home-img'>
                    <span className="material-icons-two-tone backicon" onClick={() => redirectToHome()}> arrow_circle_left </span>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container>
                            <Grid item xs={6} className="videoDiv">
                                <ReactPlayer
                                    url={"https://youtu.be/bTvB5d6K4t0"}
                                    playing={false}
                                    className="videoplayer animate__animated animate__zoomIn"
                                />
                                <AnimateText type="words" animationtype="blocks" texttodisplay="একটা বারান্দায়, আমি দাঁড়িয়ে ছিলাম
           ছুঁড়ে ম্যাজিক চোখ,
           তাকিয়ে যেই চলে গেলে।
           শীতে আরাম দেয়, সেইরকমই চাদর
           মেলে ফেলেছি,
           খেলার ছলে তোমার কোলে।
           এভাবেই গল্প হয়, আমাদের রূপকথায়
           এভাবেই গল্প হোক, আমাদের রূপকথায়।" classDefault="animated-paragraph2" />
                            </Grid>
                            <Grid item xs={6}>
                                <div className='video1_img_div animate__animated animate__bounce'><img src={require('../../src/images/honey1.JPG')} className='video1_img' /></div>
                                <div className='video2_img_div animate__animated animate__zoomIn'><img src={require('../../src/images/16.JPG')} className='video2_img' /></div>
                                <div className='video3_img_div animate__animated animate__bounce'><img src={require('../../src/images/1.JPG')} className='video3_img' /></div>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        )
    }
    else {
        return (<Home items={props.items} />)
    }

}

export default WeddingVideo
