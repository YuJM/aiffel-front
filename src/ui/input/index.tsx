import React, { HTMLAttributes, InputHTMLAttributes, useState } from 'react';
import classNames from 'classnames';
import { prefix } from '../core';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const inputClsName = `${prefix}-input`;
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    children,
    className,
    disabled,
    invalid,
    type = 'text',
    onFocus,
    onBlur,
    ...otherProps
  } = props;
  const [focus, isFocus] = useState(false);
  return (
    <div
      className={classNames(
        inputClsName,
        {
          [`${inputClsName}-focus`]: focus,
          [`${inputClsName}-invalid`]: invalid,
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
          onFocus={(e) => {
            isFocus(true);
            onFocus && onFocus(e);
          }}
          onBlur={(e) => {
            isFocus(false);
            onBlur && onBlur(e);
          }}
          ref={ref}
        >
          {children}
        </input>
      </div>
    </div>
  );
});

export const InputErrorMessage: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames(`${inputClsName}-error-message`, className)}>
      {children}
    </div>
  );
};

export default Input;
