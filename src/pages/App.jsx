/* eslint-disable import/no-cycle */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage, DetailPage, HomePage } from './index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
