import React from 'react';

const Icon: React.FC<React.HTMLProps<HTMLSpanElement>> = ({
  style,
  className,
}) => {
  return <i className={className} style={style}></i>;
};

Icon.displayName = 'Icon';

export default Icon;
