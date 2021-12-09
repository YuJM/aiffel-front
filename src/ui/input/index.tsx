import React, { InputHTMLAttributes, useState } from 'react';
import classNames from 'classnames';
import { prefix } from '../core';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const inputClsName = `${prefix}-input`;
const Input: React.FC<InputProps> = (props) => {
  const {
    children,
    className,
    disabled,
    error,
    type = 'text',
    ...otherProps
  } = props;
  const [focus, isFocus] = useState(false);
  return (
    <div
      className={classNames(
        inputClsName,
        {
          [`${inputClsName}-focus`]: focus,
          [`${inputClsName}-error`]: error,
          [`${inputClsName}-disabled`]: disabled,
        },
        className,
      )}
    >
      <div className={classNames(`${inputClsName}-wrap`)}>
        <input
          disabled={disabled}
          type={type}
          {...otherProps}
          onFocus={() => isFocus(true)}
          onBlur={() => isFocus(false)}
        >
          {children}
        </input>
      </div>
    </div>
  );
};

export default Input;
