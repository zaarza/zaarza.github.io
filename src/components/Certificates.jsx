/* eslint-disable import/no-cycle */
import React from 'react';
import getCertificates from '../data/getCertificates';
import { CertificateCard } from './index';

function Certificates() {
  const certificates = getCertificates();
  return (
    <div className="p-5 flex flex-col gap-y-1">
      <h2 className="text-2xl text-blue-500 font-bold">Certificates</h2>
      <div className="flex flex-col gap-y-8 md:flex-row justify-between">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}

export default Certificates;
