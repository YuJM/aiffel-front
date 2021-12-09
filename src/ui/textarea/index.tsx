import React, { TextareaHTMLAttributes } from 'react';
import classNames from 'classnames';
import { prefix } from '../core';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const textareaClsName = `${prefix}-textarea`;
const Textarea: React.FC<TextareaProps> = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <textarea
      className={classNames(textareaClsName, className)}
      {...otherProps}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
