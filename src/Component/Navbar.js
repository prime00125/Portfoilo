import React  from 'react'
import '../ComStyles/Navbar.css';
import List from './List';
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';



function Navbar() {
  const[isopen,Setisopen]=useState(false)

  return (
    <div>
      <nav>
    <span>
    <FontAwesomeIcon icon={faBars} onClick={()=>Setisopen(true)}/>
    </span>
        <section>
        <span onClick={()=>Setisopen(true)} className='prof'>Profile</span>
  &nbsp;
        <div className='logo' onClick={()=>Setisopen(true)}></div>
        </section>
    
        <List open={isopen} close={() => Setisopen(false)} />
    
          
      </nav>
    </div>
  )
}

export default Navbar
