import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import { prefix } from '../core';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
}

const buttonClsName = `${prefix}-btn`;
const Button: React.FC<ButtonProps> = (props) => {
  const { children, block, type = 'button', className, ...otherProps } = props;
  return (
    <button
      type={type}
      className={classNames(buttonClsName, { block }, className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
