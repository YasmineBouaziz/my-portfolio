import React from 'react';
import Typewriter from './TypeWriter';
import './_Intro.scss'


const Intro = () => {
    return (
      <div className="intro-container">
        <Typewriter className="intro-title" text="Yasmine Bouaziz" />
        <div className="intro-description">
        Hi, I'm Yasmine, an aspiring software engineer interested in full-stack development. I have recently completed a Bootcamp with Le Wagon in which I mostly worked with Ruby, Ruby on Rails and JavaScript. I'm currently undertaking a nanodegree with CodeFirstGirls that focuses on the fundamentals of computer science (data structures and algorithms) as well as Python and SQL. In my spare time, I'm working on a personal project Viewit, which is a Reddit clone that uses PostgreSQL, has a Python/ Flask backend and a React/ Javascript frontend.
        </div>
      </div>
    );
}

export default Intro;
