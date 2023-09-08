import React from 'react'
import '../ComStyles/Project.css'
import { Link} from 'react-router-dom';


function Project() {

  function urlLink(){
    window.location.href='https://github.com/prime00125?tab=repositories';
  }
  return (
    <>
    <div className='Project_body'>
    <div className='set'>
     <Link to="/Project/ProjectDetails"><button type="button" className="project1"></button></Link>
     <Link to="/Project/CsharpProjectDetails">  <button type="button" className='project2'/></Link> 
      </div> 
      <div className='set'>
      <Link to="/Project/Php_projectDetails"> <button type="button" className='project3'/></Link>
      <Link to="/Project/AndroidProjectDetails"> <button type="button" className='project4'/></Link>
      </div>
      <div className='set'>
        <button type="button"  name="react" className='project5' onClick={urlLink}></button>

      <button type="button" onClick={urlLink} name="webdev"className='project6'/>     
      </div>
    </div>
    
     
    </>
  )
}

export default Project