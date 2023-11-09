import { TColor, TSize } from '@/libs/models/root.model';
import clsx from 'clsx';
import React from 'react';

interface ButtonFillProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: TColor;
  size?: TSize;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  className?: string;
}

function ButtonFill({
  children,
  color = 'secondary',
  size = 'base',
  block,
  className,
  loading,
  disabled,
  ...props
}: ButtonFillProps) {
  return (
    <button
      {...props}
      className={clsx(
        'mb-2 mr-2 rounded-lg  font-medium  transition-colors duration-200 ease-in focus:outline-none focus:ring-2 ',
        block && 'w-full',
        className,
        (loading || disabled) && 'cursor-not-allowed opacity-60',
        size === 'base' && 'px-5 py-2 text-sm',
        size === 'sm' && 'px-3 py-1 text-sm',
        size === 'lg' && 'px-5 py-2 text-base',
        color === 'primary' &&
          'bg-primary-main text-white hover:bg-primary-hover focus:ring-primary-ring',
        color === 'info' &&
          'bg-info-main text-white hover:bg-info-hover focus:ring-info-ring',
        color === 'danger' &&
          'bg-danger-main text-white hover:bg-danger-hover focus:ring-danger-ring',
        color === 'success' &&
          'bg-success-main text-white hover:bg-success-hover focus:ring-success-ring',
        color === 'secondary' &&
          'bg-secondary-main text-gray-700 hover:bg-secondary-hover focus:ring-secondary-ring',
        color === 'warning' &&
          'bg-warning-main text-gray-700 hover:bg-warning-hover focus:ring-warning-ring',
        color === 'green' &&
          'bg-green-600 text-white hover:bg-green-700 focus:ring-green-300'
      )}
    >
      {loading && (
        <div className='flex items-center justify-center'>
          <svg
            aria-hidden='true'
            role='status'
            className={clsx(
              'mr-1 inline animate-spin  fill-white',
              size === 'sm' && 'h-3 w-3',
              size === 'base' && 'h-4 w-4',
              size === 'lg' && 'h-4 w-4',
              color === 'primary' && 'text-primary-ring',
              color === 'secondary' && 'text-light-secondary-ring',
              color === 'danger' && 'text-error-ring',
              color === 'warning' && 'text-warning-ring',
              color === 'success' && 'text-success-ring',
              color === 'info' && 'text-info-ring',
              color === 'sky' && 'text-sky-300',
              color === 'purple' && 'text-purple-300',
              color === 'green' && 'text-green-300'
            )}
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentColor'
            />
          </svg>
          <span
            className={clsx(
              size === 'sm' && 'text-xs',
              size === 'base' && 'text-sm',
              size === 'lg' && 'text-sm'
            )}
          >
            Loading
          </span>
        </div>
      )}
      {!loading && children}
    </button>
  );
}

export default ButtonFill;
