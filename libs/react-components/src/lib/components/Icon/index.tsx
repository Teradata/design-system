import React from 'react';

const Icon: React.FC<React.HTMLProps<HTMLSpanElement>> = ({
  style,
  className,
}) => {
  return <i className={className} style={style}></i>;
};

export default Icon;
