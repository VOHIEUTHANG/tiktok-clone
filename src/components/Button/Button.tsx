import React from 'react';
import { Link } from 'react-router-dom';
import className from 'classnames/bind';
import { BooleanLiteral } from 'typescript';

const styles = require('./Button.module.scss');
const cx = className.bind(styles.default);

type buttonOwnProps<E extends React.ElementType> = {
   to?: string;
   href?: string;
   text?: boolean;
   outline?: boolean;
   rounded?: boolean;
   primary?: boolean;
   disable?: boolean;
   size?: 'sm' | 'md' | 'lg';
   children: string;
   as?: E;
};

type buttonProps<E extends React.ElementType> = buttonOwnProps<E> &
   Omit<React.ComponentProps<E>, keyof buttonOwnProps<E>>;

const Button = <E extends React.ElementType = 'button'>(props: buttonProps<E>) => {
   const {
      to,
      href,
      size = 'md',
      rounded = false,
      disable = false,
      text = false,
      primary = false,
      as,
      outline = false,
      children,
      ...restProps
   } = props;
   const classes = cx('button', {
      outline,
      text,
      disable,
      rounded,
      primary,
      small: size === 'sm',
      large: size === 'lg',
   });

   let Comp = as || 'button';
   let additionProps = {};
   if (to) {
      return (
         <Link to={to} className={classes}>
            {children}
         </Link>
      );
   }
   if (href) {
      Comp = 'a';
      additionProps = { ...additionProps, href };
   }

   return (
      <Comp {...additionProps} {...restProps} className={classes}>
         {children}
      </Comp>
   );
};

export default Button;
