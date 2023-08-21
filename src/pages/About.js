import React from "react";
import React from 'react'
import "./About.css"
import Profile from "./images/Profile.png"
export default function About() {
  return ( 
  <div>
   
    <h1 className="about">About me</h1>
 <img src= {Profile} className="Profilepic"></img>


 <p className="Aboutme">
    Hello, My name is Bronson Gonzalez, I am a 20 year old JR developer, I have been learning how to code for 6 months now
      </p>

</div>
  );
}
