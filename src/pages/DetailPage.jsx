import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProjectCard } from '../components';
import getProjects from '../data/getProjects';

function DetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    const currentProject = getProjects().filter((projectItem) => projectItem.id === id);
    setProject(currentProject[0]);
  }, []);

  useEffect(() => {
    document.title = 'Project';
  });

  if (project.id !== undefined) {
    return (
      <div className="px-5 pb-5 flex flex-col gap-y-4">
        <Link to="/" className="text-blue-500 hover:underline hover:underline-offset-4 flex items-end">
          <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" />
          </svg>
          Back to previous page
        </Link>
        <ProjectCard project={project} size="full" />
      </div>
    );
  }
}

export default DetailPage;
