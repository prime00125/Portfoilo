import React,{useState} from 'react'
import '../ComStyles/imagesFullScreen.css'


const ImageFullScreen=({imgUrl})=>{
    const[FullScreen,setFullScreen]=useState(false)

    const openFullScreen =()=>{
        setFullScreen(true)
    };

    const closeFullScreen=()=>{
        setFullScreen(false)
    };
    
    return(
        <React.Fragment>
            <img src={imgUrl} onClick={openFullScreen}  alt="click to enlarge"/>
            {FullScreen && (
                <div className='fullscreen-img' onClick={closeFullScreen}>
                    <img src={imgUrl} alt="Full Screen imgage" className='fullImage'/>
                </div>
            )}
        </React.Fragment>
    )

}
export default React.memo(ImageFullScreen)