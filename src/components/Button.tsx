import { ReactNode } from 'react';
import classNames from 'classnames';

export default function Button({
  className = '',
  children,
  primary = false,
}: {
  className?: string;
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <>
      <button
        className={classNames(
          className,
          'font-brand font-bold text-base leading-button h-12 w-35 bg-black hover:bg-white hover:text-black rounded-button',
          primary
            ? 'text-white'
            : 'text-violet bg-opacity-10 hover:bg-opacity-35'
        )}
      >
        {children}
      </button>
    </>
  );
}
