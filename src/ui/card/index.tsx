import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { prefix } from '../core';

type baseType = HTMLAttributes<HTMLDivElement>;

export interface CardProps extends baseType {
  focus?: boolean;
}

const cardClsName = `${prefix}-card`;

function Card(props: CardProps) {
  const { children, className, focus, ...otherProps } = props;
  return (
    <div
      className={classNames(cardClsName, { focus }, className)}
      {...otherProps}
    >
      {children}
    </div>
  );
}

const Header: React.FC<baseType> = ({ children, className, ...otherProps }) => {
  return (
    <div
      className={classNames(`${cardClsName}-header`, className)}
      {...otherProps}
    >
      {children}
    </div>
  );
};
const body: React.FC<baseType> = ({ children, className, ...otherProps }) => {
  return (
    <div
      className={classNames(`${cardClsName}-body`, className)}
      {...otherProps}
    >
      {children}
    </div>
  );
};

Card.Header = Header;
Card.Body = body;

export default Card;
