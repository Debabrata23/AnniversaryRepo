import React from 'react';
import {Carousel} from '3d-react-carousal';
import { yellow } from '@mui/material/colors';
import AnimateText from './CommonComponent/AnimateText';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import NavigateButton from './CommonComponent/NavigateButton';
import 'react-round-carousel/src/index.css';
import WeddingVideo from './WeddingVideo';
import Home from './Home';
const Images = (props) => {
  const [navVideo,setNavvideo]=useState(false);
  const[redHome,setRedHome]=useState(false);
  const galleryPage=isNav=>
  {
      
      isNav?setNavvideo(true):setNavvideo(false)
  }
    const openimage=(event)=>
    {
       console.log(event);
    }
    const redirectToHome=()=>
    {
       setRedHome(true);
    }
    if(!redHome)
    {
      if(!navVideo)
      {
        return (
          <div className='carausel-img'>
          <span className="material-icons-two-tone backicon" onClick={()=>redirectToHome()}> arrow_circle_left </span>
          <AnimateText type="chars" animationtype="rifle" texttodisplay="....A promise made for lifetime......." classDefault="animated-carousel"/>
          <Carousel className='casouselWedding' slides={props.items} autoplay={true}  arrow={true} interval={5000} onClick={(e)=>openimage()}/>
          <NavigateButton nav={navVideo} navigatePage={galleryPage} textDefault="View Wedding Video" classDefault="navigatebuttonVideo"/>
          </div>
        )
      }
      else if(navVideo)
      {
        return(<WeddingVideo items={props.items}/>)
      }
    }
    else
    {
      return(<Home items={props.items}/>)
    }
  
}

export default Images
