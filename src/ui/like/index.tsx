import React, { ChangeEvent, useCallback, useState } from 'react';
import { prefix } from '@ui/core';

interface Props {
  defaultChecked?: boolean;
  onLike?: (like: boolean) => void;
  disabled?: boolean;
}

const likeClsName = `${prefix}-like`;
const Like: React.FC<Props> = ({
  defaultChecked = false,
  onLike,
  disabled,
}) => {
  const [isLike, setIsLike] = useState(defaultChecked);
  const _onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target) {
        setIsLike(e.target.checked);
        onLike && onLike(e.target.checked);
      }
    },
    [setIsLike, onLike],
  );
  return (
    <label className={likeClsName}>
      <input
        type="checkbox"
        onChange={_onChange}
        hidden
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      <span className={`${likeClsName}-wrap`}>{isLike ? '👍' : '👎'}</span>
    </label>
  );
};

export default Like;
