
import React from 'react'
import '../ComStyles/ProjectDetails.css'
import ImageFullScreen from './ImageFullScreen'
import outputScreen1 from '../images/dotnetoutputScreen1.jpg'
import outputScreen2 from '../images/dotnetoutputScreen2.jpg'
const styles = {
  backgroundImage: 'linear-gradient(to right,red,white)',
  color:'white',
  textAlign:'center',

};



function CsharpProjectDetails() {
 

  return (
    <div> 
        <nav className='DetailsHeader'>
            <a href="#Introduction">Introduction</a>
            <a href="#Images">Images</a>
            <a href="#Links">Links</a>
        </nav>
        <header id="Introduction">
       <h1 style={styles}>Gym Management System</h1>
           <div>
           The <b>   
 Gym Management System </b>
is a standalone applicat
ion. The application here
gym and
health club membership management system
. Hence this project offers a application were
You
can keep records on your members, their memberships, and have quick and easy
communication between you and your members
.
The system implemented by focuses on the
database storage and secured access of the stored information of the
members and staff of
gym
.
To achieve this feature the software product has only
one
end us
er such as Admin
defined while designing the proposed system. Admin have the priority to retrieve the
information of
member (s) and Staff (s)
.
Gym Management Software is a complete gym and
re
creation facility system program which looks after all of your members, memberships and
activities. It is designed for gyms, recreation centers, and health clubs.
Services provided by
Gym are also handled by this system.
        </div>
        </header>
        
        <div id="Images">
          <h1 style={styles}> Project Output Screen </h1>
        <div className='OutputScreen'><ImageFullScreen imgUrl={outputScreen1} /></div>
        <div className='OutputScreen'><ImageFullScreen imgUrl={outputScreen2} /></div>
            
        </div>
        <div id="Links">
       
                <a class="pdf" href="https://www.dropbox.com/scl/fi/uomojq9g54odr7g55mge8/final-doc.pdf?rlkey=ss1tkqs9ryd53qaoy8d9aanw5&dl=0">Project Source File</a>
                
        </div>
    </div>
  )
}

export default CsharpProjectDetails