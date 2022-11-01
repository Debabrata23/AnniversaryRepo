import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Components/Home'
import Images from './Components/Images';
import 'animate.css';
import 'material-icons/iconfont/material-icons.css';
function App() {
  let slides=[];
  let promisesvalue;
  for(var i=1;i<=111;i++)
  {
    slides.push(<img  src={require(`../src/images/${i}.JPG`)} alt="1"  className='carsouselimg'/>)
  }
  return (
    <div className="App">
   
      <Home items={slides}/>
      
    </div>
  );
}

export default App;
