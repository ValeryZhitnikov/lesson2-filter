import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import './ProjectList.css';

function ProjectList(props) {
  const { projects } = props;
  const projectsIndex = projects.map((project) => {
    project.id = shortid.generate();
    return project;
  });
  
  const projectsList = projectsIndex.map((project) => {
    return <img className="projects-item" key={project.id} src={project.img} />
  });
  
  return (
    <div className="projects-list">
      {projectsList}
    </div>
  )
}

ProjectList.propTypes = {
  projects : PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProjectList;