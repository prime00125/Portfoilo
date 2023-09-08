import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../ComStyles/List.css'
import ReactDom from 'react-dom'



function List({open,close}) {
  
    if(!open) return null

 

  
  return ReactDom.createPortal(
    <>
    <div className='list'>
     <Link to="Other"><a>Summary</a></Link>
      <Link to="Technical"><a>Skills</a></Link>
       <Link to="Certifcation"><a>Certification</a></Link>
      <Link to="Project"><a>Project</a></Link>
      <Link to="Education"><a>Education</a></Link>
     <Link to="Contact"><a>Contact</a></Link>
     <button className='Lclose' type="button" onClick={close}>CLOSE</button>

    </div>
 
    </>,
    document.getElementById('list')
  )
}

export default React.memo(List)