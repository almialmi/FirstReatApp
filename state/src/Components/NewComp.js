import React,{Component} from 'react';
import bell from './bell.png';
import bell1 from './bell1.png';

class NewComp extends Component{
    constructor(props){
        super(props)
        this.state ={
            message:"Subscribe to simple Learn",
            sub:"Subscribe",
            imageURL:bell1

        }
    }
    styles ={
        fontStyle:"italic",
        color:"purple"
    
      }
    ButtonChange=()=>{
        this.setState({
            message:"Hit the bell icon to never miss an update",
            sub:"Subscribed"
        });
    }  
    imageChange=()=>{
        this.setState({
            imageURL:bell,
            message:"Thank You ! Happy learning"
        });
    }
    render(){
        return(
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                 <button onClick={this.ButtonChange}>{this.state.sub}</button>
                 <p/>
                 <img onClick={this.imageChange} style={{width:"30px",height:"30px"}} src={this.state.imageURL} alt="" ></img>
            </div>
        )
    }
}

export default NewComp;