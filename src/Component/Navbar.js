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
    <section>
    <FontAwesomeIcon icon={faBars} onClick={()=>Setisopen(true)}/>
    </section>
        <section>
      <div className='logo' onClick={()=>Setisopen(true)}></div>
        <span onClick={()=>Setisopen(true)} className='prof'>Profile</span>
        </section>
    
        <List open={isopen} close={() => Setisopen(false)} />
    
          
      </nav>
    </div>
  )
}

export default Navbar
