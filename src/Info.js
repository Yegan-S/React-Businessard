import React from "react";
import './App.css';

export default function Info(){
    return (
        <div className="Info">
        <img src="image/me.jpg" alt="myphoto"/>
        <div className="Name">
        <h1>Yegan Salehi </h1>
        <h4> Frontend Developer</h4>
        </div>
        <div className="buttons">
            <a class="btn btn-secondary" href="#" role="button">My Portfolio</a>
            <a class="btn btn-secondary" href="#" role="button">Email</a>

        </div>
        </div>
    );
}