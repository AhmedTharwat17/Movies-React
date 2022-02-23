import React from "react";
import './style.css';
class SkillsComponant extends React.Component{
    constructor(props){
        super();
    }
    render(){
            return (
                <React.Fragment>
                    <div className="d-flex flex-wrap justify-content-center align-items-center py-4">
                        {this.props.name.map((item)=>{
                             return(
                                <div className="card bg-danger">{item}</div>
                            )
                        })}
                    </div>
                </React.Fragment>
            );
    }
}
export default SkillsComponant;