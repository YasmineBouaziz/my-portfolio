import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './_Projects.scss'

const ProjectSkill = (props) => {
    return <span className="project-skill">{props.skill}</span>;
}

const ProjectSkills = (props) => {
    return (
      <div className="project-skills">
        {props.skills.map((skill, index) => {
          return <ProjectSkill skill={skill} key={index} />;
        })}
      </div>
    );
}

const ProjectLinks = (props) => {
    // const { github, preview } = this.props.links;
    const { github, site } = props.links;
    return (
      <div className="project-links">
        {/* <a
          href={preview}
          rel="noopener"
          target="_blank"
          className="project-link"
        >
          Live Demo <FontAwesomeIcon icon="external-link-alt" />
        </a> */}

<div class="button1">
          <a
          href={site}
          target="_blank"
          rel="noreferrer"
          className="project-link secondary"
          > Visit App
        </a>
        </div>
        <div class="button2">
        <a
          href={github}
          // rel="noopener"
          target="_blank"
          rel="noreferrer"
          className="project-link secondary"
          >
          <FontAwesomeIcon icon={['fab', 'github']} /> View Source
        </a>
          </div>
      </div>
    );
}

const ProjectCard = (props) => {
    const { image, title, description, skills, links } = props;
    const { github }  = props.links ;

    return (
      <div className="project-card">
        <img
        className="project-image"
        src={image} alt = ""
        />
        <a
        href={github}
        target="_blank"
        rel="noreferrer">
        </a>
        <div className="project-content">
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <ProjectSkills skills={skills} />
          <ProjectLinks links={links} />
          <projectCard links = {links} />
        </div>
      </div>
    );
}

const Projects = (props) => {
    const { projects } = props;
    return (
      <div className="projects-container">
        {projects.map(proj => (
          <ProjectCard
            title={proj.title}
            description={proj.description}
            skills={proj.skills}
            links={proj.links}
            image={proj.image}
            a={proj.links}
            key={proj.title}
          />
        ))}
      </div>
    );
}

export default Projects;
