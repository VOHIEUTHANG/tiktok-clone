import React from 'react';

type buttonOwnProps<E extends React.ElementType> = {
   to?: string;
   href?: string;
   primary: boolean;
   target?: string;
   size: 'sm' | 'md' | 'lg';
   children: string;
   as?: E;
};

type buttonProps<E extends React.ElementType> = buttonOwnProps<E> &
   Omit<React.ComponentProps<E>, keyof buttonOwnProps<E>>;

const Button = <E extends React.ElementType = 'button'>({
   to,
   href,
   size = 'md',
   primary = false,
   target,
   as,
   children,
}: buttonProps<E>) => {
   let Comp = as || 'button';

   return <Comp>{children}</Comp>;
};

export default Button;
