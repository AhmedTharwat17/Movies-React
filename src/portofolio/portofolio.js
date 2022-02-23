import React from "react";
import './style.css'
import SkillsComponant from "./skills";
class PortoflioComponant extends React.Component{
    constructor(){
        super();
        this.state = {
            skills: ["Web Developer", "JavaScript Developer" , "MERN Stack" , "MEAN Stack","Front-End Developer","Back-End Developer"]
        }
    }
    render(){
        return (
            <React.Fragment>
                <div className="container my-5">
                    <div className="row">
                        <h1 className="text-center my-3">Portofolio</h1>
                        <SkillsComponant name ={this.state.skills}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default PortoflioComponant;