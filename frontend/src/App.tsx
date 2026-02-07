import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GamePage from './pages/GamePage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import MainLayoutComponent from "./components/MainLayoutComponent.tsx";

const App: React.FC = () => {
  return (
      <MainLayoutComponent
          header={<div>TODO My Header</div>}
          footer={<div>TODO Footer info</div>}
      >
        <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MainLayoutComponent>
  );
};

export default App;