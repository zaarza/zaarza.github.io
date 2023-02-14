/* eslint-disable react/prop-types */
import React from 'react';

function CertificateCard({ certificate }) {
  const { title, source, certificateUrl } = certificate;
  return (
    <div className="flex flex-col gap-y-1 flex-1">
      <p className="text-gray-700">{title}</p>
      <p className="text-gray-700">{source}</p>
      <a href={certificateUrl} className="text-blue-500 flex items-center gap-x-2 hover:underline hover:underline-offset-4" target="_blank" rel="noreferrer">
        View Certificate
        {' '}
        <span>
          <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z" />
          </svg>
        </span>

      </a>
    </div>
  );
}

export default CertificateCard;
