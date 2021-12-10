import React, {
  HTMLAttributes,
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import { prefix } from '../core';
import Button from '@ui/button';
import { composeRef } from '@util/compose';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  search?: boolean;
  onSearch?: (text: string | null) => void;
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
    search,
    onSearch,
    ...otherProps
  } = props;
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const searchBtnClick = useCallback(
    (e) => {
      if (inputRef.current) {
        e.stopPropagation();
        onSearch && onSearch(inputRef.current.value);
      }
    },
    [inputRef, onSearch],
  );
  const inputInit = useCallback(
    (e) => {
      if (inputRef.current && !!inputRef.current.value) {
        e.stopPropagation();
        inputRef.current.value = '';
        onSearch && onSearch(null);
      }
    },
    [inputRef, onSearch],
  );

  return (
    <div
      className={classNames(
        inputClsName,
        { search },
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
            setFocus(true);
            onFocus && onFocus(e);
          }}
          onBlur={(e) => {
            setFocus(false);
            onBlur && onBlur(e);
          }}
          ref={composeRef(ref, inputRef)}
        >
          {children}
        </input>
        {search && (
          <span className={`${inputClsName}-init`} onClick={inputInit}>
            X
          </span>
        )}
      </div>
      {search && (
        <Button
          className={`${inputClsName}-right-btn`}
          disabled={disabled}
          onClick={searchBtnClick}
        >
          search
        </Button>
      )}
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
