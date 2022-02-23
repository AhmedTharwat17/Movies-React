import React from "react";
import cv from "./Ahmed Cv.pdf"
class AboutComponant extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <React.Fragment>
                <div className="container my-5 py-5">
                    <div className="row" style={{margin:'80px 0 40px 0'}}>
                        <div className="col-4">
                            <h1>About Us</h1>
                        </div>
                        <div className="col-8">
                            <p className="pb-3" style={{textAlign:'justify',lineHeight:'35px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                            <a href={cv} download='cv'><button type="submit" style={{width:'200px',backgroundColor: 'rgba(0, 0, 0, 0.8)' , border:'2px solid #fff', padding:'10px',color:'#fff',fontSize:'18px'}} data-bs-toggle="button" autocomplete="off" aria-pressed="true">Download</button></a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default AboutComponant;