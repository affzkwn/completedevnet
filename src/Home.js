import React,{Component} from "react";
import image from "./assests/072574192779be898f58b5bb47aa4ebe.png"
import './Home.css';

export class Home extends Component{
    render(){
        return(
            <div className="background-container">
                <img src={image} alt="Background" className="background-image" />
                <div className="text-overlay">
                <h1>The New <span className="text-color">Yellow Page</span> for Freelancer</h1>
                </div>
            </div>
            
            
        )
    }
}