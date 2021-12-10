import Header from '@ui/header';
import React, { useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '@store';

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const moveProfile = useCallback(() => {
    navigate('/profile');
  }, [navigate]);
  const isLogin = useSelector<RootState>((s) => s.auth.session.id);

  useEffect(() => {
    if (!isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  return (
    <div
      style={{ width: '100vw', height: '100vh' }}
      className={'flex flex-column'}
    >
      {isLogin ? (
        <>
          <Header
            logoURL={process.env.PUBLIC_URL + '/aiffel_logo.png'}
            onProfile={moveProfile}
            profileURL={process.env.PUBLIC_URL + '/profile.png'}
          />
          <main className={'pt-20 flex-1'}>
            <Outlet />
          </main>
        </>
      ) : (
        <div className={'flex flex-column w-400'}>
          <h2>로그인이 필요합니다</h2>
        </div>
      )}
    </div>
  );
};

export default Layout;
