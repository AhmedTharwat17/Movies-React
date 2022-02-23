import React from "react";
import './header.css'
class HeaderComponant extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <React.Fragment>
              <div
                class="bg-image"
                style={{
                backgroundImage: 'url("https://wallpaperaccess.com/full/2109964.jpg")',
                height: '100vh',
                backgroundAttachment: 'fixed'
              }}
              >
                <div className="mask h-100" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="data">
                     <h1>Ahmed Tharwat</h1>
                     <p style={{fontSize:'25px'}}>Full Stack Developer</p>
                      <br/>
                      <button className="" style={{width:'200px',background:'none' , border:'2px solid #fff', padding:'10px',color:'#fff',fontSize:'18px'}}>Contact Us</button>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
        );
    }
}
export default HeaderComponant;