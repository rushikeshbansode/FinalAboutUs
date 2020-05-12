import React,{Component} from 'react';
import '../Components/Compo.css'


class Compo extends Component{


    render(){
        return (<div className="cointainer">
                <i class={this.props.icon} id="icon"></i>
                <h2>{this.props.servicename}</h2>
                <p>{this.props.serviceinbrief}</p>
                </div>);
    }
}

export default Compo;