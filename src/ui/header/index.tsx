import React from 'react';
import { prefix } from '@ui/core';
import classNames from 'classnames';

export interface HeaderProps {
  logoURL?: string;
  session?: string;
  onProfile?: VoidFunction;
  profileURL?: string;
}

const headerClcName = `${prefix}-header`;
const Header: React.FC<HeaderProps> = (props) => {
  const { profileURL, logoURL, onProfile } = props;
  return (
    <header className={classNames(headerClcName)}>
      <div className={'logo'}>
        {logoURL && <img src={logoURL} alt="logo" />}
      </div>
      <div className={'avatar'} onClick={() => onProfile && onProfile()}>
        <img src={profileURL} alt="avatar" />
        <span className="overlay"></span>
      </div>
    </header>
  );
};

export default Header;
