import React from 'react'
import '../ComStyles/Education.css'
import x from '../images/x.jpg'
import ImageFullScreen from './ImageFullScreen'
import xii from '../images/xii.jpg'
import bca01 from '../images/ug-1_page-0001.jpg'
import bca02 from '../images/ug-2_page-0001.jpg'
import bca03 from '../images/ug-3_page-0001.jpg'
import bca04 from '../images/ug-4_page-0001.jpg'
import bca06 from '../images/ug-5_page-0001.jpg'
import mca01 from '../images/1st sem results _page-0001.jpg'
import mca02 from '../images/2nd sem results _page-0001.jpg'




function Education() {
    return (
        <div className='edu'>
          
          
            <div className="backcards">
                <span className='heading'> EDUCATION</span>
                <div className="cards">
                    {/* ITEM ! */}
                    <div className='items'>
                        <div className='t1'> <h1>Class x</h1></div>
                        <div className='t2'>
                            <p>School : Noble School</p> 
                            <p>Location : Ballari </p> 
                            <p>percentage : 74.75%</p> 
                            <p>year: 2015</p>
                        </div>
                        <div className='t3'><ImageFullScreen imgUrl={x}/></div>
                    </div>
                   {/* ITEM 2 */}
                   <div className='items'>
                        <div className='t1'> <h1>Class 12th</h1></div>
                        <div className='t2'>
                            <p>College : Satyam Pu College</p> 
                            <p>Location : Ballari </p> 
                            <p>percentage : 51.88%</p> 
                            <p>year: 2018 </p>
                        </div>
                        <div className='t3'><ImageFullScreen imgUrl={xii}/></div>
                    </div>
                    {/* ITEM 3 */}
                    <div className='items'>
                        <div className='t1'> <h1>BCA 1st Sem</h1></div>
                        <div className='t2'>
                            <p>College : Sree Guru Thipperudra </p> 
                            <p>Location : Ballari </p> 
                            <p>CGPA : 8.5</p> 
                            <p>year: 2018 to 2021 </p>
                        </div>
                        <div className='t3'><ImageFullScreen imgUrl={bca01}/></div>
                    </div>

                    {/* ITEM 4 */}
                    <div className='items'>
                        <div className='t1'> <h1>BCA 2nd Sem</h1></div>
                        <div className='t2'>
                            <p>College : Sree Guru Thipperudra </p> 
                            <p>Location : Ballari </p> 
                            <p>CGPA : 8.63</p> 
                            <p>year: 2018 to 2021 </p>
                        </div>
                        
                        <div className='t3'><ImageFullScreen imgUrl={bca02}/></div>
                    </div>
                    {/* ITEM 5 */}
                    <div className='items'>
                        <div className='t1'> <h1>BCA 3rd Sem</h1></div>
                        <div className='t2'>
                            <p>College : Sree Guru Thipperudra </p> 
                            <p>Location : Ballari </p> 
                            <p>CGPA : 8.86</p> 
                            <p>year: 2018 to 2021 </p>
                        </div>
                        <div className='t3'><ImageFullScreen imgUrl={bca03}/></div>
                    </div>
                    {/* ITEM 6 */}
                    <div className='items'>
                        <div className='t1'> <h1>BCA 4th Sem</h1></div>
                        <div className='t2'>
                            <p>College : Sree Guru Thipperudra </p> 
                            <p>Location : Ballari </p> 
                            <p>CGPA : 9.51</p> 
                            <p>year: 2018 to 2021 </p>
                        </div>
                        <div className='t3'><ImageFullScreen imgUrl={bca04}/></div>
                    </div>
                    {/* ITEM 7 */}
                    
                    {/* <div className='items'>
                        <div className='t1'> <h1>BCA 5th Sem</h1></div>
                        <div className='t2'>
                            <p>College : Sree Guru Thipperudra </p> 
                            <p>Location : Ballari </p> 
                            <p>CGPA : 8.5</p> 
                            <p>year: 2018 to 2021 </p>
                        </div>
                        <div className='t3'><ImageFullScreen imgUrl={x}/></div>
                    </div> */}
                    
                    {/* ITEM 8 */}
                    <div className='items'>
                        <div className='t1'> <h1>BCA 6th Sem</h1></div>
                        <div className='t2'>
                            <p>College : Sree Guru Thipperudra </p> 
                            <p>Location : Ballari </p> 
                            <p>CGPA : 9.01</p> 
                            <p>year: 2018 to 2021 </p>
                        </div>
                        <div className='t3'><ImageFullScreen imgUrl={bca06}/></div>
                    </div>
                    {/* ITEM 9 */}
                    <div className='items'>
                        <div className='t1'> <h1>MCA 1st Sem</h1></div>
                        <div className='t2'>
                            <p>College : Dayananda Sagar College </p> 
                            <p>Location : Bengaluru </p> 
                            <p>CGPA : 8.25</p> 
                            <p>year: 2021 to 2023 </p>
                        </div>
                        <div className='t3'><ImageFullScreen imgUrl={mca01}/></div>
                    </div>
                    {/* ITEM 10 */}
                    <div className='items'>
                        <div className='t1'> <h1>MCA 2nd Sem</h1></div>
                        <div className='t2'>
                            <p>College : Dayananda Sagar College </p> 
                            <p>Location : Bengaluru </p> 
                            <p>CGPA : 8.5</p> 
                            <p>year: 2021 to 2023 </p>
                        </div>
                        <div className='t3'><ImageFullScreen imgUrl={mca02}/></div>
                    </div>
                    {/* ITEM 11 */}
                    {/* <div className='items'>
                        <div className='t1'> <h1>MCA 3rd Sem</h1></div>
                        <div className='t2'>
                            <p>College : Dayananda Sagar College </p> 
                            <p>Location : Bengaluru </p> 
                            <p>CGPA : 8.25</p> 
                            <p>year: 2021 to 2023 </p>
                        </div>
                        <div className='t3'><ImageFullScreen imgUrl={x}/></div>
                    </div> */}







                </div>
            </div>
        </div>
    )
}

export default Education