import React from 'react';
import './App.css';
import About from './Components/About';
import Whowe from './Components/Whowe';
import Wedo from './Components/Wedo';
import Community from './Components/Community';


function Aboutus() {
  return ( 
    <div className="App">
      <About companyname="CONSECTETUR" slogan="adipiscing tristique risus nec feugiat in fermentum posuere urna"></About>

      <Whowe whowetext=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Aliquam nulla facilisi cras fermentum odio. Massa sapien faucibus et molestie ac feugiat sed lectus.
       Est velit egestas dui id ornare. Luctus venenatis lectus magna fringilla urna porttitor.
       Rhoncus mattis rhoncus urna neque viverra justo nec. Amet risus nullam eget felis.
       Nulla at volutpat diam ut  metus. 
    ">
      </Whowe>
       
      <Wedo></Wedo>
      
      <Community></Community>
    </div>
  );
}

export default Aboutus;
