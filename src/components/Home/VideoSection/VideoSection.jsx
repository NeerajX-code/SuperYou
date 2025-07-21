import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./VideoSection.css";

const VideoSection = () => {
  const videoRef = useRef();
  const video = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        video.current,
        { scale: 0.4 },
        {
          scale: 1.5,
          ease: 'none',
          scrollTrigger: {
            trigger: videoRef.current,
            start: 'top bottom',     // start anim when top of section hits bottom of viewport
            end: 'bottom top',       // end anim when bottom of section hits top of viewport
            scrub: true,
          },
        }
      );
    }, videoRef);

    return () => ctx.revert();
  }, []);


  return (
    <div ref={videoRef} className='video_Section'>
      <video ref={video} src="https://cdn.shopify.com/videos/c/o/v/c4adb7ca57c447cc8868a189e47df85f.mp4" muted autoPlay playsInline loop></video>
    </div>
  )
}

export default VideoSection