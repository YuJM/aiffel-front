import React from 'react';

/**
 * ref 합성
 * @param refs
 */
export function composeRef<T>(...refs: React.Ref<T>[]): React.Ref<T> {
  if (refs.length === 1) {
    return refs[0];
  }
  return (node: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref && typeof ref === 'object' && 'current' in ref) {
        (ref as any).current = node;
      }
    });
  };
}
