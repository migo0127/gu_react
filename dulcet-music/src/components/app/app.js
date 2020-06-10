import React from 'react';

import NavbarIndex from '../navbar-index/navbar-index';
import SliderIndex from '../slider-index/slider-index';
import Logo from '../img/logo_方1.png';
import Logo2 from '../img/logo_長2.svg';

function App(){

  return (
    <div className="App" id="App">
      <SliderIndex />
      <NavbarIndex Logo={Logo} Logo2={Logo2}/>
    </div>
  )
}

export default App;



//https://www.youtube.com/watch?v=Tdpq-9XYoNM