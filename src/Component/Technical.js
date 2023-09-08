import React from 'react'
import '../ComStyles/Skill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC,faS,faN} from '@fortawesome/free-solid-svg-icons';
import { faPython, faJava, faSquareJs, faReact, faAndroid, faNodeJs } from '@fortawesome/free-brands-svg-icons';


function Technical() {
  return (
    <div className='SkillBody'>
      <div className='parent1'>Language</div>

      <section className='gitem-1'>
        <div className='g-item-01'>

          {/* GITEM 1 */}
          <div className='item-1'>
            <div className='logo'>
              <FontAwesomeIcon icon={faPython} spin style={{ color: "#16e9d1", fontSize: "50px" }} />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Python</p>
            <section>0%<div className='status'><div className='color'></div>70%</div>100%</section>
          </div>
          {/* GITEM 2 */}
          <div className='item-1'>
            <div className='logo'>
              <FontAwesomeIcon icon={faJava} beat style={{ color: "#e411dd", fontSize: "50px" }} />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Java</p>
            <section>0%<div className='status'><div className='color'></div>90%</div>100%</section>
          </div>
          {/* GITEM 3 */}
          <div className='item-1'>
            <div className='logo'>
              <FontAwesomeIcon icon={faC} bounce style={{ color: "#ec2618", fontSize: "50px" }} />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>C </p>
            <section>0%<div className='status'><div className='color'></div>50%</div>100%</section>
          </div>
        </div>

        <div className='g-item-01' >
          {/* GITEM 4 */}
          <div className='item-1' id="t4">
            <div className='logo'>
              <FontAwesomeIcon icon={faReact} spin style={{ color: "#574bfb", fontSize: "50px" }} />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>WEB development</p>
            <section>0%<div className='status'><div className='color'></div>85%</div>100%</section>
          </div>
          {/* GITEM 5 */}
          <div className='item-1' id="t5">
            <div className='logo'>
              <FontAwesomeIcon icon={faSquareJs} fade style={{ color: "#16e9d1", fontSize: "50px" }} />
            </div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>JavaScript</p>
            <section>0%<div className='status'><div className='color'></div>80%</div>100%</section>
          </div>
        </div>
      </section >
      {/* End of gitem 1 */}

      <div className='parent2'>Strongest Area</div>
      <section className='p2g1'>
        <div className='p2g01'>
        <div className='g1-item-1'>
          <div className='logo1'></div>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>OOPS</p>
          <section>0%<div className='status'><div className='color'></div>80%</div>100%</section>
        </div>


               {/* item 2 */}
          <div className='g1-item-1'>
            <div className='logo2'></div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Algorithum</p>
            <section>0%<div className='status'><div className='color'></div>90%</div>100%</section>
          </div>


           {/* item 3 */}
           <div className='g1-item-1'>
            <div className='logo3'></div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>DataStructure</p>
            <section>0%<div className='status'><div className='color'></div>80%</div>100%</section>
          </div>
          </div>

              <div className='p2g01'>
                     {/* item 4 */}
                     <div className='g1-item-1' id='t4'>
            <div className='logo4'></div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Problem Solving</p>
            <section>0%<div className='status'><div className='color'></div>60%</div>100%</section>
          </div>



                     {/* item 5 */}
                     <div className='g1-item-1' id='t4'>
            <div className='logo5'></div>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Networking</p>
            <section>0%<div className='status'><div className='color'></div>70%</div>100%</section>
          </div>
</div>

        </section>

{/* END OF PARENT 2 */}

<div className='parent3'>Skills</div>

<section className='gitem-1'>

  <div className='g-item-01'>
  <div className='item-1'>
    <div className='logo'>
    <FontAwesomeIcon icon={faS} flip style={{color: "#750bbc", fontSize:"50px"}} />
    </div>
    <p style={{fontSize:"20px", fontWeight:"bold"}}>SQL</p>
    <section>0%<div className='status'><div className='color'></div>90%</div>100%</section>
  </div>

  {/* item 2 */}
  <div className='item-1'>
    <div className='logo'>
    <FontAwesomeIcon icon={faReact} spin style={{color: "#750bbc", fontSize:"50px"}} />
    </div>
    <p style={{fontSize:"20px", fontWeight:"bold"}}>React</p>
    <section>0%<div className='status'><div className='color'></div>90%</div>100%</section>
  </div>
  {/* item 3 */}
  <div className='item-1'>
    <div className='logo'>
    <FontAwesomeIcon icon={faAndroid} bounce style={{color: "#750bbc", fontSize:"50px"}} />
    </div>
    <p style={{fontSize:"20px", fontWeight:"bold"}}>Android</p>
    <section>0%<div className='status'><div className='color'></div>70%</div>100%</section>
  </div>
  </div>
<div className='g-item-01'>
  {/* item 4 */}
<div className='item-1'>
    <div className='logo'>
    <FontAwesomeIcon icon={faNodeJs} beat style={{color: "#750bbc", fontSize:"50px"}} />
    </div>
    <p style={{fontSize:"20px", fontWeight:"bold"}}>Node</p>
    <section>0%<div className='status'><div className='color'></div>40%</div>100%</section>
  </div>
  {/* item 5 */}
  <div className='item-1'>
    <div className='logo'>
    <FontAwesomeIcon icon={faN} fade style={{color: "#750bbc", fontSize:"50px"}} />
    </div>
    <p style={{fontSize:"20px", fontWeight:"bold"}}>Networking</p>
    <section>0%<div className='status'><div className='color'></div>80%</div>100%</section>
  </div>
</div>



</section>



    </div >
  )
}

export default Technical