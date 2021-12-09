import Header from '@ui/header';
import React, { useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const moveProfile = useCallback(() => {
    navigate('/profile');
  }, []);
  return (
    <div>
      <Header
        logoURL={process.env.PUBLIC_URL + '/aiffel_logo.png'}
        onProfile={moveProfile}
      />
      <main className={'pt-8'}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
