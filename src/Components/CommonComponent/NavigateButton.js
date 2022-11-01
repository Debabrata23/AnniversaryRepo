import React from 'react'
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
const NavigateButton = (props) => {
    
    const navigatePage=(isNav)=>
    {
    if(isNav==false)
    {
        props.navigatePage(true)
    }
    else
    {
        props.navigatePage(false)
    }
       
    }
    return (
        <Fab variant="extended" className={props.classDefault} onClick={() => navigatePage(props.nav)}>
            <NavigationIcon sx={{ mr: 1 }} />
            {props.textDefault}
        </Fab>
    )
}

export default NavigateButton
