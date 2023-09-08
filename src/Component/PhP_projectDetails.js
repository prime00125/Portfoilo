
import React from 'react'
import '../ComStyles/ProjectDetails.css'
import ImageFullScreen from './ImageFullScreen'
import outputScreen1 from '../images/phpoutputscreen1.jpg'
import outputScreen2 from '../images/phpoutputscreen2.jpg'

const styles = {
  backgroundImage: 'linear-gradient(to right,purple,white)',
  color:'white',
  textAlign:'center',

};



function PhP_projectDetails() {
 

  return (
    <div> 
        <nav className='DetailsHeader'>
            <a href="#Introduction">Introduction</a>
            <a href="#Images">Images</a>
            <a href="#Links">Links</a>
        </nav>
        <header id="Introduction">
       <h1 style={styles}>Shopping Portal Project</h1>
           <div>
           The <b> Shopping Portal Project </b>is an online platform designed to provide
users with a seamless and convenient shopping
experience. The platform offers a wide
range of products, from fashion and electronics to home goods, all accessible from the
comfort of a user's device.
The Shopping Portal Project aims to create an intuitive and user
-
friendly interface that
allows users
to easily browse and purchase products, as well as manage their orders and
track their deliveries.
The Shopping Portal Project is designed to cater to a diverse audience, with a focus on
providing accessibility and convenience to all users.
By
leveraging technology and user data, the platform aims to continually improve the
shopping experience for its users, setting a new standard for online shopping portals
        </div>
        </header>
        
        <div id="Images">
          <h1 style={styles}> Project Output Screen </h1>
        <div className='OutputScreen'><ImageFullScreen imgUrl={outputScreen1} /></div>
        <div className='OutputScreen'><ImageFullScreen imgUrl={outputScreen2} /></div>

            
        </div>
        <div id="Links">
       
                <a class="pdf" href="https://www.dropbox.com/scl/fi/zyf93czsdo9d5a18ib1kg/Project-of-OSP.pdf?rlkey=8tiuefkg8iydeoggz6lrgmwbp&dl=0">Project Source File</a>
                <a class="pdf" href="https://www.dropbox.com/scl/fi/a5p5avankksj0pszjei5z/Abstract.pdf?rlkey=roph46xm0xqh16e29g9w0y1vu&dl=0">Project PPT</a>
        </div>
    </div>
  )
}

export default PhP_projectDetails