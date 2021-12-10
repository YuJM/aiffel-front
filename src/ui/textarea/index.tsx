import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import classNames from 'classnames';
import { prefix } from '../core';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

const textareaClsName = `${prefix}-textarea`;
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { children, className, invalid, ...otherProps } = props;
    return (
      <textarea
        className={classNames(
          textareaClsName,
          { [`${textareaClsName}-invalid`]: invalid },
          className,
        )}
        ref={ref}
        {...otherProps}
      >
        {children}
      </textarea>
    );
  },
);

export default Textarea;
