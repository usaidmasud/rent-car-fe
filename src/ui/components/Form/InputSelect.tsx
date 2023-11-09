'use client';
import { Select } from 'antd';
import clsx from 'clsx';
import React from 'react';
import HelpText from './HelpText';

interface InputSelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpText?: string;
  isDanger?: boolean;
  placeholder?: string;
  inputProps?: any;
  noMargin?: boolean;
  loading?: boolean;
  options: any;
  inputRef?: any;
}

function InputSelect({
  label,
  noMargin,
  helpText,
  isDanger,
  inputRef,
  options,
  inputProps,
  loading,
}: InputSelectProps) {
  return (
    <div className={clsx(noMargin ? 'mb-0' : 'mb-3')}>
      {label && (
        <label className='mb-1 block text-sm font-medium text-gray-900'>
          {label}
        </label>
      )}
      <div>
        <Select
          loading={loading}
          status={isDanger && 'error'}
          ref={inputRef}
          // className="border border-gray-200 ring-0  focus:border-primary-dark rounded-lg hover:border-primary-dark focus:ring-primary-main"
          {...inputProps}
          defaultValue={'Pilih'}
          size='large'
          style={{ width: '100%' }}
          // onChange={handleChange}
          options={options}
        />
        {/* className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 hover:border-primary-hover focus:border-primary-ring focus:ring-primary-ring ' */}
        <HelpText isDanger={isDanger} text={helpText} />
      </div>
    </div>
  );
}

export default InputSelect;
