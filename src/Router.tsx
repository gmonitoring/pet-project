import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { FC } from 'react';
import App from './App';
import { Home } from './pages/home';
import { Favorites } from './pages/favorites';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
};
