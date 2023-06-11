import React from "react";
import myphoto from "./image/me.jpg"
import './App.css';


export default function Info(){
    return (
        <div className="Info">
        <div className="InfoImage">
        <img src={myphoto} alt="myphoto"
      
         />
         </div>
        <div className="Name">
        <h1 >Yegan Salehi </h1>
        <h4> Frontend Developer</h4>
        </div>
        <div className="buttons">
             <a class="btn btn-secondary portfolio-address" href="https://benevolent-druid-a3543f.netlify.app/" role="button">My Portfolio</a>
            <a href="mailto:salehisediqe86@gmail.com"  class="btn btn-secondary email-address">Email </a>

        </div>
        </div>
    );
}