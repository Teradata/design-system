import { default as React, ReactNode } from 'react';

interface TypographyProps {
    /**
     * Scale or type of the text.
     */
    scale: 'body1' | 'body2' | 'body3' | 'headline1' | 'headline2' | 'headline3' | 'caption' | 'eyebrow';
    children?: ReactNode;
}
declare const Typography: React.FC<TypographyProps>;
export default Typography;
