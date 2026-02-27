import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type HeadingSize = 'xl' | 'lg' | 'md' | 'sm' | '2xl';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  size?: HeadingSize;
  children: ReactNode;
}

const sizeClasses: Record<HeadingSize, string> = {
  '2xl': 'text-4xl font-semibold tracking-tight',
  xl: 'text-3xl font-semibold tracking-tight',
  lg: 'text-2xl font-semibold tracking-tight',
  md: 'text-xl font-semibold tracking-tight',
  sm: 'text-lg font-semibold tracking-tight'
};

export function Heading({
  as: Tag = 'h2',
  size = 'lg',
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag className={clsx(sizeClasses[size], className)} {...props}>
      {children}
    </Tag>
  );
}

