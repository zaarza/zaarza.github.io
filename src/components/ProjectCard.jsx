/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project, size }) {
  const {
    id, name, imageUrl, description, liveViewUrl, repositoryUrl, technology,
  } = project;

  return (
    <div className={size === 'full' ? 'flex flex-col gap-y-6' : 'flex flex-col gap-y-6 md:max-w-[350px]'}>
      <div className="group overflow-hidden">
        <img src={imageUrl} alt="app project" className="group-hover:scale-110 transition-all duration-300" />
      </div>
      {size === 'full' ? (
        <div className="flex flex-col gap-y-2">
          <h3 className="text-gray-700 font-semibold text-2xl">{name}</h3>
          <p className="text-gray-700 leading-7">{description}</p>
        </div>
      ) : (
        <Link to={`/detail/${id}`} className="flex flex-col gap-y-2 group">
          <h3 className="text-gray-700 font-semibold text-xl line-clamp-1 group-hover:text-blue-500">{name}</h3>
          <p className="text-gray-700 line-clamp-4 leading-7">{description}</p>
        </Link>
      )}
      <div className="flex flex-col gap-y-2">
        <a href={liveViewUrl} className="text-blue-500 hover:underline hover:underline-offset-4 flex gap-x-2 items-center" target="_blank" rel="noreferrer">
          <p>Live view</p>
          {' '}
          <span>
            <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
            </svg>
          </span>
        </a>
        <a href={repositoryUrl} className="text-blue-500 hover:underline hover:underline-offset-4 flex gap-x-2 items-center" target="_blank" rel="noreferrer">
          Repository
          {' '}
          <span>
            <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
            </svg>
          </span>
        </a>
      </div>

      <div className="flex flex-col gap-y-2">
        <h4 className="text-gray-700">Framework/Technology used:</h4>
        <div className="flex gap-x-3">
          {technology.map((technologyItem) => (
            <div className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-sm" key={technologyItem.name}>{technologyItem.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
