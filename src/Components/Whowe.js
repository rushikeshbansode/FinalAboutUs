import React,{Component} from 'react';
import '../Components/Whowecss.css';
import image7 from '../images/r8.jpg';
class Whowe extends Component{

   render(){

           return(
               <div className="outercointainer">
                   <div className="whoimag">
                   <img  src={image7} className="whoimage"></img>
                   </div>
                   <div className="whocointainer">
                   <h1 className="whotitle">WHO WE ARE</h1>
                     <p>{this.props.whowetext}
                    </p>
                   </div>
               </div>
           );
   }
}

export default Whowe;   