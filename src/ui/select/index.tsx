import React, { forwardRef, SelectHTMLAttributes } from 'react';
import classNames from 'classnames';
import { prefix } from '../core';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
}

const selectClsName = `${prefix}-select`;
const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { children, className, invalid, ...otherProps } = props;
  return (
    <select
      className={classNames(
        selectClsName,
        { [`${selectClsName}-invalid`]: invalid },
        className,
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </select>
  );
});

export default Select;
