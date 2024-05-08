'use client';

import { cn } from '@/utils/cn';
import Link, { LinkProps } from 'next/link';
import Icon, { IconProps } from '@/components/Icon';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  icon?: { variant: IconProps['variant'] };
};

type ActionProps = BaseProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
        as: 'button';
      })
    | (LinkProps & { href: string } & {
        as: 'link';
      })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string } & {
        as: 'external';
      })
  );

const Action = ({ className, ...props }: ActionProps) => {
  const allClassNames = cn(
    'flex items-center gap-x-1.5 text-stone-600 dark:text-stone-400 text-sm',
    className
  );

  if (props.as === 'link') {
    const { as, ...rest } = props;
    return (
      <Link className={allClassNames} {...rest}>
        {rest.children}
        {props.icon && <Icon variant={props.icon.variant} />}
      </Link>
    );
  }
  if (props.as === 'external') {
    const { as, ...rest } = props;
    return (
      <a className={allClassNames} {...rest} target="_blank">
        {rest.children}
        {props.icon && <Icon variant={props.icon.variant} />}
      </a>
    );
  }
  const { as, ...rest } = props;
  return (
    <button
      className={cn(allClassNames, rest.disabled ? 'disabled' : '')}
      {...rest}
    >
      {rest.children}
      {props.icon && <Icon variant={props.icon.variant} />}
    </button>
  );
};

export default Action;
