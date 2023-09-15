
"use client"

import { useRef, useState } from "react";

function Header() {

    const videoRef = useRef();
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const handlePlay = () => {
        videoRef.current.play();
        setIsVideoPlaying(true);
    };

    const handlePause = () => {
        videoRef.current.pause();
        setIsVideoPlaying(false);
    };

    return(
        <div className="flex flex-col self-center">
            <div className="text-5xl font-extrabold" data-aos="fade-up">Selamat datang di Melati</div>
            <div className="text-xl font-extrabold" data-aos="fade-up">Media Pembelajaran Interaktif</div>
            <div className="bg-black h-60 sm:h-96 mt-20 justify-center rounded-3xl flex cursor-pointer" data-aos="fade-up" onClick={isVideoPlaying ? handlePause : handlePlay}>
                
                {isVideoPlaying ?
                    <div className="text-white/60 fixed top-20 sm:top-36 m-auto">
                        <i className='text-7xl bx bx-pause-circle' ></i>
                    </div>
                :   
                    <div className="text-white fixed top-20 sm:top-36 m-auto">
                        <i className='text-7xl bx bx-play-circle' ></i>
                    </div>
                }

                <video
                    className="rounded-3xl"
                    ref={videoRef}
                    onEnded={(event) => {
                        setIsVideoPlaying(false);
                    }}
                >
                    <source className="h-fit w-fit" src="/intro.mp4" />
                </video>
            </div>
            <div className="mt-20" data-aos="fade-up">*silakan putar intro vidio terlebih dahulu untuk melanjutkan</div>
        </div>
    )
}

export { Header }