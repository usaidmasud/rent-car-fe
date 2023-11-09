'use client';
import clsx from 'clsx';
import React from 'react';
import HelpText from './HelpText';
import { DatePicker } from 'antd';

interface InputDatePickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  noMargin?: boolean;
  helpText?: string;
  isDanger?: boolean;
  placeholder?: string;
  inputRef?: any;
  inputProps?: any;
}

function InputDatePicker({
  label,
  noMargin,
  helpText,
  isDanger,
  placeholder,
  inputRef,
  inputProps,
}: InputDatePickerProps) {
  return (
    <div className={clsx(noMargin ? 'mb-0' : 'mb-3')}>
      <label className='mb-1 block text-sm font-medium text-gray-900'>
        {label}
      </label>
      <div>
        <DatePicker
          placeholder={placeholder}
          {...inputProps}
          size='large'
          ref={inputRef}
          style={{
            width: '100%',
            backgroundColor: '#FFF',
          }}
        />
        {/* className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 hover:border-primary-hover focus:border-primary-ring focus:ring-primary-ring ' */}
        <HelpText isDanger={isDanger} text={helpText} />
      </div>
    </div>
  );
}

export default InputDatePicker;
