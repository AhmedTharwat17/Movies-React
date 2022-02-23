import React from "react";
class FooterComponant extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <React.Fragment>
                <div className="bg-dark py-4">
                    <div className="container">
                    <div className="row">
                    <div className="d-flex flex-wrap justify-content-center align-items-center text-white text-center">
                        <div className="col">
                            Copyright 2022
                        </div>
                        <div className="col">
                            <button style={{width:'200px',background:'none' , border:'2px solid #fff', padding:'10px',color:'#fff',fontSize:'18px'}}>Contact Us</button>
                        </div>
                        <div className="col">
                            <i class="fab fa-facebook-f px-3"></i>
                            <i class="fab fa-youtube px-3"></i>
                            <i class="fab fa-twitter px-3"></i>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default FooterComponant