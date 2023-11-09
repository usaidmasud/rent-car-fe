'use client';
import clsx from 'clsx';
import React from 'react';
import HelpText from './HelpText';

interface InputTextFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  noMargin?: boolean;
  helpText?: string;
  isDanger?: boolean;
  inputRef?: any;
}

function InputTextField({
  label,
  noMargin,
  helpText,
  isDanger,
  inputRef,
  ...props
}: InputTextFieldProps) {
  return (
    <div className={clsx(noMargin ? 'mb-0' : 'mb-3')}>
      {label && (
        <label className='mb-1 block text-sm font-medium text-gray-900'>
          {label}
        </label>
      )}
      <div>
        <textarea
          {...props}
          ref={inputRef}
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 hover:border-primary-hover focus:border-primary-ring focus:ring-primary-ring '
          placeholder={props.placeholder ?? label}
        />
        <HelpText isDanger={isDanger} text={helpText} />
      </div>
    </div>
  );
}

export default InputTextField;
