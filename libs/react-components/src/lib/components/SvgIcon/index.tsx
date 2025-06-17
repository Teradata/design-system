import React from 'react';
import { iconMap } from '../../assets/social-icons/iconMap';
export interface SvgIconProps {
  className?: string;
  size?: number;
  color?: string;
  title?: string;
  iconName: string;
  defaultPath?: string;
}

export const SvgIcon: React.FC<SvgIconProps> = ({
  className,
  size = 24,
  color = 'currentColor',
  title,
  iconName,
  defaultPath = 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
}) => {
  const [iconPath, setIconPath] = React.useState<string>(defaultPath);

  React.useEffect(() => {
    const rawSvg = iconMap[iconName];
    const pathMatch = rawSvg?.match(/<path[^>]*d="([^"]*)"[^>]*>/);
    if (pathMatch?.[1]) {
      setIconPath(pathMatch[1]);
    } else {
      console.warn(`Icon "${iconName}" not found or has no <path d="...">`);
      setIconPath(defaultPath);
    }
  }, [iconName, defaultPath]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      className={className}
      role="img"
      aria-hidden={!title}
      aria-label={title}
    >
      <path d={iconPath} />
    </svg>
  );
};
