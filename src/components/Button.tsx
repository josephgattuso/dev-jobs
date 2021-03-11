import { ReactNode } from 'react';
import classNames from 'classnames';
import JobView from './JobView';

export default function Button({
  className = '',
  children,
  primary = false,
  block = false,
  onClick = () => {},
}: {
  className?: string;
  children: ReactNode;
  primary?: boolean;
  block?: boolean;
  onClick?: () => void;
}) {
  return (
    <>
      <button
        className={classNames(
          className,
          'font-brand text-base font-bold leading-button h-12 bg-violet hover:bg-light-violet rounded-button',
          primary
            ? 'text-white'
            : 'text-violet dark:text-white dark:bg-very-light-white bg-opacity-10 hover:bg-opacity-35',
          block ? 'w-full' : 'w-35'
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
