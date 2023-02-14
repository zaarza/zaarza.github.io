import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Navbar,
} from '../components';

function HomePage() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default HomePage;
