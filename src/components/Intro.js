import React from 'react';
import Typewriter from './TypeWriter';
import './_Intro.scss'


const Intro = () => {
    return (
      <div className="intro-container">
        <Typewriter className="intro-title" text="Yasmine Bouaziz" />
        <div className="intro-description">
          Hi I'm Yasmine, I am a junior software engineer. I am a graduate from the University of Sussex and I recently attended the Le Wagon bootcamp where I learned computer programming.
          I am currently doing a nanodegree with Code First Girls.
        </div>
      </div>
    );
}

export default Intro;
