import React from 'react';
import { prefix } from '@ui/core';
import classNames from 'classnames';

export interface HeaderProps {
  logoURL?: string;
  session?: string;
  onProfile?: VoidFunction;
}

const headerClcName = `${prefix}-header`;
const Header: React.FC<HeaderProps> = ({ children, logoURL, onProfile }) => {
  return (
    <header className={classNames(headerClcName)}>
      <div className={'logo'}>
        {logoURL && <img src={logoURL} alt="logo" />}
      </div>
      <div className={'avatar'}>
        <img
          src={process.env.PUBLIC_URL + 'profile.png'}
          alt="avatar"
          onClick={() => onProfile && onProfile()}
        />
        <span className="overlay"></span>
      </div>
    </header>
  );
};

export default Header;
