/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ProjectCard from './ProjectCard';
import getProjects from '../data/getProjects';

function Project() {
  const Projects = getProjects();
  return (
    <div className="p-5 flex flex-col gap-y-1" id="projects">
      <h2 className="text-blue-500 text-2xl font-bold">Here's what I've made</h2>
      <div className="flex flex-col gap-y-14 md:flex-row gap-x-5">
        {Projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </div>
  );
}

export default Project;
