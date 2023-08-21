import React from "react"


export default function Contact() {
    return <div>
      <h1>Contact me here!</h1>
{/* list containing my github and twitter and linked in and also phone number */}
<ul>
<li>My phone! 3852273626</li>
<li>My email! Jaspyyy@icloud.com</li>
<a href="https://www.linkedin.com/in/bronson-gonzalez-327135266/"></a>
<a href="https://github.com/bronsongonzalez27"></a>


</ul>
{/* form to submit email */}
<form>
  <input type = "text" id="name" placeholder="Name "></input>
  <input type = "text" id="Email" placeholder="Email"></input>
  <button type="submit">Contact</button>
</form>

   </div>
  }
  