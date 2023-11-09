'use client';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import React, { useState } from 'react';
import HelpText from './HelpText';

interface InputFieldPasswordProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  noMargin?: boolean;
  helpText?: string;
  isDanger?: boolean;
  inputRef?: any;
}

function InputFieldPassword({
  label,
  noMargin,
  helpText,
  isDanger,
  inputRef,
  ...props
}: InputFieldPasswordProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={clsx(noMargin ? 'mb-0' : 'mb-3')}>
      <label className='mb-1 block text-sm font-medium text-gray-900'>
        {label}
      </label>
      <div className='relative'>
        <input
          {...props}
          ref={inputRef}
          type={open ? 'text' : 'password'}
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pr-10 text-sm text-gray-900 hover:border-primary-hover focus:border-primary-ring focus:ring-primary-ring '
          placeholder={props.placeholder ?? label}
          required
        />
        <button
          onClick={() => setOpen(!open)}
          type='button'
          className='absolute bottom-3 right-2.5 '
        >
          {open ? <EyeOpenIcon /> : <EyeClosedIcon />}
        </button>
      </div>
      <HelpText isDanger={isDanger} text={helpText} />
    </div>
  );
}

export default InputFieldPassword;
