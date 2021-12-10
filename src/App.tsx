import React from 'react';
import './ui/ui.scss';
import './styles/util.scss';
import LoginPage from '@pages/loginPage';
import { Route, Routes } from 'react-router-dom';
import ForumPage from '@pages/forumPage';
import ForumDetailPage from '@pages/forumPage/deatil';
import Layout from '@pages/layout';
import ForumWritePage from '@pages/forumPage/write';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="forum" element={<Layout />}>
          <Route path="" element={<ForumPage />} />
          <Route path={':id'} element={<ForumDetailPage />} />
          <Route path={'write'} element={<ForumWritePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
