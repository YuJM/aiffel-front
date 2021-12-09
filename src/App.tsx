import React from 'react';
import './ui/ui.scss';
import './styles/util.scss';
import LoginPage from '@pages/loginPage';
import { Outlet, Route, Routes } from 'react-router-dom';
import ForumPage from '@pages/forumPage';
import ForumDetailPage from '@pages/forumPage/deatil';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="forum" element={<Outlet />}>
        <Route path="" element={<ForumPage />} />
        <Route path={':id'} element={<ForumDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
