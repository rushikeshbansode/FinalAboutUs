import React, { Component } from 'react';
import '../Components/Community.css'
import image1 from '../images/r2.jpg'
import image2 from '../images/r1.jpg'
import image3 from '../images/r3.jpg'
import image4 from '../images/r4.jpg'
import image5 from '../images/r5.jpg'
import image6 from '../images/r6.jpg'
import image7 from '../images/r7.jpg'

class Community extends Component{

    render(){
        return (<div className="Ccointainer">
            <h1 className="Ctitle" >OUR COMMUNITY</h1>
            <img  src={image1}></img>
            <img  src={image2}></img>
            <img  src={image3}></img>
            <img  src={image4}></img>
            <img  src={image5}></img>
            <img  src={image6}></img>
            <img  src={image7}></img>
            
            </div>);

    }
}


export default Community;
