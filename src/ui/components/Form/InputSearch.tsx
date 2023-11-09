'use client';
import clsx from 'clsx';
import React from 'react';
import HelpText from './HelpText';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import LoadingIcon from '../LoadingIcon';

interface InputSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  noMargin?: boolean;
  helpText?: string;
  isDanger?: boolean;
  inputRef?: any;
  loading?: boolean;
}

function InputSearch({
  label,
  noMargin,
  helpText,
  isDanger,
  inputRef,
  loading,
  ...props
}: InputSearchProps) {
  return (
    <div className={clsx(noMargin ? 'mb-0' : 'mb-3')}>
      {label && (
        <label className='mb-1 block text-sm font-medium text-gray-900'>
          {label}
        </label>
      )}
      <div>
        <div className='relative'>
          <input
            type='text'
            {...props}
            ref={inputRef}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 pr-10 text-sm text-gray-900 transition-colors duration-200 ease-linear hover:border-primary-hover focus:border-primary-ring focus:ring-primary-ring'
            placeholder={'Search'}
          />
          <div className='absolute right-2 top-2'>
            {loading ? (
              <LoadingIcon />
            ) : (
              <MagnifyingGlassIcon className='h-6 w-6 fill-gray-500' />
            )}
          </div>
        </div>
        <HelpText isDanger={isDanger} text={helpText} />
      </div>
    </div>
  );
}

export default InputSearch;
