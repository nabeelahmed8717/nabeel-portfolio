import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type TextVariant = 'default' | 'muted';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  children: ReactNode;
}

const variantClasses: Record<TextVariant, string> = {
  default: 'text-sm text-neutral-900 dark:text-white',
  muted: 'text-sm text-neutral-600 dark:text-white'
};

export function Text({
  variant = 'default',
  className,
  children,
  ...props
}: TextProps) {
  return (
    <p className={clsx(variantClasses[variant], className)} {...props}>
      {children}
    </p>
  );
}

