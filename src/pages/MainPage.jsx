import React, { useEffect } from 'react';
import {
  Intro, Profile, Projects, TechStack, Certificates,
} from '../components';

function MainPage() {
  useEffect(() => {
    document.title = 'Arzaqul Mughny';
  });

  return (
    <div className="flex flex-col gap-y-4">
      <Profile />
      <Intro />
      <Projects />
      <TechStack />
      <Certificates />
    </div>
  );
}

export default MainPage;
