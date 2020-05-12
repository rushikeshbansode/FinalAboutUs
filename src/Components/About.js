import React, { Component } from 'react';
import '../Components/myStyle.css'

import image1 from '../images/aboutus2.jpg'
class About extends Component{

    render(){
        return <div class="divsection" >
            <img  className="imageclass" src={image1}></img>
            <h1 className="myname">ABOUT {this.props.companyname}</h1>
            <p className="slogansentance">{this.props.slogan}</p>
            <a className="morebutton" href="#">SERVICES FOR YOU</a>
            </div>;

    }

}


export default About;
