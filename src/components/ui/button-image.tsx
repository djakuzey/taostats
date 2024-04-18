import React from 'react';
import { cn } from '@/lib/utils';

import { Button, ButtonProps } from './button';

export interface ButtonImageProps extends ButtonProps {
  position?: 'left' | 'right';
  onlyIcon?: boolean;
  iconComponent?: React.ReactNode;
  iconClassName?: string;
}

const iconStyles = {
  left: 'mr-[6px]',
  right: 'ml-[6px]',
};

const onlyIconStyles = '';

const ButtonImage = React.forwardRef<HTMLButtonElement, ButtonImageProps>(
  (
    {
      children,
      onlyIcon = false,
      iconClassName,
      position = 'left',
      iconComponent,
      ...props
    },
    ref,
  ) => {
    const icon = (
      <div
        className={cn(
          iconClassName,
          onlyIcon ? onlyIconStyles : iconStyles[position],
        )}
      >
        {iconComponent}
      </div>
    );
    return (
      <Button {...props} ref={ref}>
        {position === 'left' && icon && icon}
        {children}
        {position === 'right' && icon && icon}
      </Button>
    );
  },
);

ButtonImage.displayName = 'ButtonImage';

export { ButtonImage };
