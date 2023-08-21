import React from 'react'
import "./About.css"
import Profile from "./images/Profile.png"
export default function About() {
  return ( 
  <div>
   
    <h1 className="about">About me</h1>
 <img src= {Profile} className="Profilepic"></img>
</div>
  );
}
