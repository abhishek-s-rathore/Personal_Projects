import React, {useState,useRef} from 'react';
import {BiExitFullscreen} from 'react-icons/bi';
import {BiFullscreen} from 'react-icons/bi';
import {IoMdPlay} from 'react-icons/io';
import {IoMdPause} from 'react-icons/io';
import {RiVolumeMuteFill} from 'react-icons/ri';
import {RiVolumeUpFill} from 'react-icons/ri';
import {RiVolumeDownFill} from 'react-icons/ri';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoMdSettings} from 'react-icons/io';
import {AiFillForward} from 'react-icons/ai';
import {AiFillBackward} from 'react-icons/ai';
import {MdSkipNext} from 'react-icons/md';
import {MdSkipPrevious} from 'react-icons/md';
import {IoContractOutline}  from 'react-icons/io';
import {IoExpandOutline}  from 'react-icons/io';
import {MdSlowMotionVideo}  from 'react-icons/md';
import {BiCaptions}  from 'react-icons/bi';
import {TiArrowLoop}  from 'react-icons/ti';


import {videoTimer} from './Controller.styles';

export default  function Controller (props){
     let {videoStats, videoRef,setVideoStats} = props;
     const [isMute, setIsMute] = useState(false);
     const [volumeValue, setVolumeValue] = useState(0.5);
     const timerRef = useRef(null);
    const volumeRef = useRef(null);

    //   videoTimer
    let iconStyle={
        color:'white'
    }

    function play(){
        videoRef.current.play();
    }

    function pause(){
        videoRef.current.pause();
    }


    function nextTenSeconds(){

    }

    function nextTenSeconds(){

    }

    function changeVolume(e){

         setVolumeValue(e.target.value/100);
          videoRef.current.volume = volumeValue;
    }

    function mute(){
        setIsMute(true);
        videoRef.current.muted = isMute;
    }

    function unmute(){
        setIsMute(false);
        videoRef.current.muted = isMute;
    }

    function changePlaybackSpeed(){
        videoRef.current.playbackRate = videoRef.current.playbackRate === 2 ? 1 : 2;
    }

    function updateTimer(){
                setInterval(()=>{
                    // console.log(timerRef);
                    timerRef.current.value = videoRef.current.currentTime;
                    timerRef.current.max = videoRef.current.duration;
                }, 1000);
    
    }


    function changeTime(e){
        let cT = e.target.value;
        videoRef.current.currentTime = cT;
  }


    updateTimer();
    return(
        <>
        {console.log(<videoTimer/>, 'ojj')}     
       
         <div className="Controller">
         
                 <div className='actions-box'>
                 <div className='timer'>
                 <videoTimer></videoTimer>
                 <input id="videoTimer" ref={timerRef} type="range" min={0}  onChange={(e)=>{changeTime(e)}} />
              </div>
               <div className='actions'>
                   <div className='volumeBox'>
                       { isMute === true ? <RiVolumeMuteFill style={iconStyle} onClick={()=>{unmute()}}/> : 
                         videoRef.current.volume <=.5  ?  < RiVolumeDownFill style={iconStyle} onClick={()=>{mute()}}/>  : <RiVolumeUpFill style={iconStyle}  onClick={()=>{mute()}}/>
                        }
                   <input id="videoVolume" ref={volumeRef} type="range" min={0}   max={100} onChange={(e)=>{changeVolume(e)}}/>
                   </div>
               
               <BiFullscreen style={iconStyle} />
            <BiExitFullscreen style={iconStyle} />
            <IoMdPause style={iconStyle} onClick={()=>{pause()}}/>
            <IoMdPlay style={iconStyle} onClick={()=>{play()}}/>
            
            <RiVolumeUpFill style={iconStyle}  />
            < RiVolumeDownFill style={iconStyle}/>
            <GiHamburgerMenu style={iconStyle} onClick={()=>{changePlaybackSpeed()}} />
            < IoMdSettings style={iconStyle}/>
            <AiFillForward style={iconStyle} />
            <AiFillBackward style={iconStyle}/>
               </div>
                 </div>
              
           
            </div>
        </>
    );

}