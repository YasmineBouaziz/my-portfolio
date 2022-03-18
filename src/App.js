import './App.scss';
import React from 'react';
import About from './components/About';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

import projects from './content/projects';
import statements from './content/about-me';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        < Navbar />
        < Intro />
        <About statements={statements}/>
        <h2 id="projects" class="section-title" data-reactid="49">Projects</h2>
        <Projects projects={projects} />
      </div>
    );
  }
}
