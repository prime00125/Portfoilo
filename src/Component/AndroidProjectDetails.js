import React from 'react'
import '../ComStyles/AndroidProjectDetails.css'
import android from '../images/anroidggg.webp'
import assApk1 from '../images/assignment.jpeg'
import assApk2 from '../images/assiginment2.jpeg'
import RandomINT from '../images/randomapk.jpeg'


const styles = {
    backgroundColor: 'gold',
    color:'white',
    borderRadius:'10px',
    textAlign:'center',
  
  };
function AndroidProjectDetails() {
  return (
    <div>
        <nav class="AndroDetailsNav">
        <a href="#androIntroduction">Introduction</a>
        <a href="#project">Project1</a>
            <a href="#AndroLinks">Links</a>
        </nav>
        <h1 style={styles}>Android Development Project's</h1>
        <div id="androIntroduction">
           
            <div><img src={android} /></div>
            <div>
              <b>  Android </b> Project's that i built in a Android Studio using xml and 
                java to build a rich and fully functional robust application 
                this projects are small scale and practice works that i created while learning android development 
            </div>
        </div>
        
        
        
        <div id="project">
        <h1 style={styles}>Assginment Project</h1>
        <section>
          <span><img src={assApk1}/></span>
          <span><img src={assApk2}/></span>
          <span>its a scroll multiPage application where it similar looks like whatsapp and the refine button desined for 2nd page to redirect and this is a assignment that i completed in exam times in mca 3rd sem </span>
        </section>
      
        
        
        <h1 style={styles}>Random INT Generator Project</h1>
          <section>
            <span><img src={RandomINT}/></span>
            <span>its a <b>Random Int Generator</b> which capable to Generate a number with a range of specified value set by the user and it small scale application.
            </span>
           </section>
        </div>
        <div id="AndroLinks">
        <div>
        <a href="https://github.com/prime00125/android-development-project/blob/main/andro.zip">andro Project</a>
        <a href="https://github.com/prime00125/android-development-project/blob/main/Assignment.zip">Assginment Project</a>
        </div>
        <div>
        <a href="https://github.com/prime00125/android-development-project/blob/main/Applo.zip">Appolo Project</a>
        <a href="https://github.com/prime00125/android-development-project/blob/main/Random%20INT%20Generator.zip">Random INT Generator Project</a>
        </div>
        </div>
        
    </div>
  )
}

export default AndroidProjectDetails