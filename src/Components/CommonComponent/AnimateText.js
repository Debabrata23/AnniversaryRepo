import React from 'react'
import AnimatedText from 'react-animated-text-content';
const AnimateText = (props) => {
  return (
    <AnimatedText
                            type={props.type} // animate words or chars
                            animationType={props.animationtype}
                            interval={0.06}
                            duration={0.20}
                            className={props.classDefault}
                            includeWhiteSpaces
                            threshold={0.1}
                            rootMargin="20%"
                        
                        >
                        {props.texttodisplay}
                        
                        </AnimatedText>
  )
}

export default AnimateText
