import React, { useState, useEffect , useRef} from 'react';
import Controller from "../Controller";

export default function Player() {
    const [videoStats, setVideoStats] = useState({
        paused: false
    });
    
    const videoRef = useRef(null);

    return (
        <>
        <div className="VideoPlayer">
        <video ref={videoRef} className="Video"  controls>
        <source src="./media/KyaBaatAe.mp4" type="video/mp4" />
        </video>
        <Controller 
            videoRef= {videoRef}
            videoStats = {videoStats}
            setVideoStats= {setVideoStats}
        />
        </div>
        </>
        );
}
    