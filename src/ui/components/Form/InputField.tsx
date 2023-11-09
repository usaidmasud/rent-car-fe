'use client';
import clsx from 'clsx';
import React from 'react';
import HelpText from './HelpText';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  noMargin?: boolean;
  helpText?: string;
  isDanger?: boolean;
  inputRef?: any;
}

function InputField({
  label,
  noMargin,
  helpText,
  isDanger,
  inputRef,
  ...props
}: InputFieldProps) {
  return (
    <div className={clsx(noMargin ? 'mb-0' : 'mb-3')}>
      {label && (
        <label className='mb-1 block text-sm font-medium text-gray-900'>
          {label}
        </label>
      )}
      <div>
        <input
          {...props}
          type={props.type ?? 'text'}
          ref={inputRef}
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm text-gray-900 transition-colors duration-200 ease-linear hover:border-primary-hover focus:border-primary-ring focus:ring-primary-ring'
          placeholder={props.placeholder ?? label}
        />
        <HelpText isDanger={isDanger} text={helpText} />
      </div>
    </div>
  );
}

export default InputField;
