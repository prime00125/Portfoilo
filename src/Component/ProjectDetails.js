
import React from 'react'
import '../ComStyles/ProjectDetails.css'
import ImageFullScreen from './ImageFullScreen'
import outputScreen1 from '../images/javaOutputScree1.jpg'
import outputScreen2 from '../images/javaOutputScree2.jpg'
import outputScreen3 from '../images/javaOutputScree3.jpg'

const styles = {
  backgroundImage: 'linear-gradient(to right,purple,white)',
  color:'white',
  textAlign:'center',

};



function ProjectDetails() {
 

  return (
    <div> 
        <nav className='DetailsHeader'>
            <a href="#Introduction">Introduction</a>
            <a href="#Images">Images</a>
            <a href="#Links">Links</a>
        </nav>
        <header id="Introduction">
       <h1 style={styles}>E-Parking System</h1>
           <div>
           The<b> E
-
parking solution </b>
 is a standalone application. The application here mainly focuses on
people face parking problems in most metropolitan area. Hence this project offers a
application were the customer vehicle parking
area, space and details will retrieved
collectedly.
The system implemented by focuses on the database storage and secured access
of the stored information of the vehicle. To achieve this feature the software product has only
two end user such as Admin and
Staff's, defined while designing the proposed system.
Admin have the priority to retrieve the information of customer vehicle's were Staff's can
attend the vehicle of customer. It makes a solution for vehicle parking allotment and the
details of par
ticular vehicle.
Customer vehicles is parked in standard order, This turns
benefits to improve quality and quantity through placements. The project supports a huge
database to the existing vehicle through details and can retrieve individual specific vehicl
e by
providing a unique ID or register number. This system will automatically list the complete
data with date and timings
will display with a identification number generated during initial
add details module.
        </div>
        </header>
        
        <div id="Images">
          <h1 style={styles}> Project Output Screen </h1>
        <div className='OutputScreen'><ImageFullScreen imgUrl={outputScreen1} /></div>
        <div className='OutputScreen'><ImageFullScreen imgUrl={outputScreen2} /></div>
        <div className='OutputScreen'><ImageFullScreen imgUrl={outputScreen3} /></div>
            
        </div>
        <div id="Links">
       
                <a class="pdf" href="https://www.dropbox.com/scl/fi/d8i8t2ivdamwoaxfzvo80/final-doc.pdf?rlkey=70fdiwz1m6lwkam3zlq9yh0ed&dl=0">Project Source File</a>
                <a class="pdf" href="https://www.dropbox.com/scl/fi/0ri53zxra939tcxfefu2m/E-PARKING-SOLUTION.pptx?rlkey=b0w1vg42w5a9afs4v5khsun7y&dl=0">Project PPT</a>
        </div>
    </div>
  )
}

export default ProjectDetails