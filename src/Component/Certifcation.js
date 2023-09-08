import React from 'react'
import '../ComStyles/Certifcation.css'
import dataAnytcs1 from '../images/data analatics 001_page-0001.jpg'
import dataAnytcs2 from '../images/data anataics 002_page-0001.jpg'
import java from '../images/java.jpg'
import ethcal from '../images/Ethical-hacking.jpg'
import android from '../images/android.jpg'
import cloud from '../images/cloud.jpg'
import ds from '../images/ds.jpg'
import interview from '../images/interview skill certifcate_page-0001.jpg'
import machine from '../images/machinie learning linear regression 001_page-0001.jpg'
import machine2 from '../images/machinie learning linear regression 002_page-0001.jpg'
import network from '../images/networking.jpg'
import prepinsta from '../images/prepinsta.jpg'
import python from '../images/py.jpg'
import tally from '../images/tally&basic.jpg';
import ImageFullScreen from '../Component/ImageFullScreen'




function Certifcation() {
  return (

    <div className='CertifiedBody'>
      <span>Certifcation</span>
      <section className='outline'>
        <div className='inline'>
        
         <div className='img' ><ImageFullScreen  imgUrl={java}/></div>
         <div className='img' ><ImageFullScreen  imgUrl={python}/></div>
         <div className='img' ><ImageFullScreen  imgUrl={ethcal}/></div>
         <div className='img' ><ImageFullScreen  imgUrl={android}/></div>
         <div className='img' ><ImageFullScreen  imgUrl={cloud}/></div>
         <div className='img' ><ImageFullScreen  imgUrl={cloud}/></div>
         <div className='img' ><ImageFullScreen  imgUrl={ds}/></div>
         <div className='img' ><ImageFullScreen  imgUrl={network}/></div>
         <div className='img' ><ImageFullScreen  imgUrl={prepinsta}/></div>
         <div className='img' ><ImageFullScreen  imgUrl={interview}/></div>
         <div className='img' ><ImageFullScreen  imgUrl={machine}/></div>
         <div className='img' ><ImageFullScreen  imgUrl={machine2}/></div>
         <div className='img' ><ImageFullScreen  imgUrl={dataAnytcs1}/></div>
         <div className='img' ><ImageFullScreen  imgUrl={dataAnytcs2}/></div>
         <div className='img' ><ImageFullScreen  imgUrl={tally}/></div>
         
        </div>
      </section>

    </div>
  )
}

export default Certifcation