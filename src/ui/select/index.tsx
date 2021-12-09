import React, { SelectHTMLAttributes } from 'react';
import classNames from 'classnames';
import { prefix } from '../core';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const selectClsName = `${prefix}-select`;
const Select: React.FC<SelectProps> = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <select className={classNames(selectClsName, className)} {...otherProps}>
      {children}
    </select>
  );
};

export default Select;
