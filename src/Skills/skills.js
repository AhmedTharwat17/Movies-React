import React from "react";
class SkillComponant extends React.Component{
    constructor(){
        super();
        this.state = {
            skills: [{name:"HTML",num:"25%"} , {name:"CSS",num:"70%"} , {name:"JS",num:"80%"} ,  {name:"REACT",num:"10%"}]
        }
    }
    render(){
        return (
            <React.Fragment>
                <div style={{backgroundColor: 'rgba(0, 0, 0, 0.6)' , padding:'40px 0 40px 0' , color:'#fff'}}>
                    <div className="px-5 py-5">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="text-center">
                                <h1>Skills</h1>
                                <p style={{lineHeight:'30px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="col-12">
                            {this.state.skills.map((item)=>{
                                return(
                                        <div className="progress my-3" style={{height: '40px'}}>
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: `${item.num}`,fontSize:'18px'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{item.name}</div>
                                        </div>
                                )
                            })}
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default SkillComponant;