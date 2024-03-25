import React from 'react';
import Typed from 'typed.js';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, Span } from './HeroStyles';
import DownloadApp from '../DownloadApp';

const Hero = () => {
  
  const anim = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed (anim.current, {
      strings: [ "mental health", "academics", "social life", "school schedule"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,

    });

      return () => {
        typed.destroy();
      };
      
     } , []);

 

  return (
    <>
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Take control of your <Span ref={anim}/> </HeroH1> 
                <HeroP>Designed for students to manage their mental wellbeing and connect with friends.</HeroP>
                <DownloadApp/>
            </HeroContent>
            
            
         
        </HeroContainer>
    </>
  )
}

export default Hero;

