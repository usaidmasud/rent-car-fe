'use client';
import { InputNumber, InputNumberProps } from 'antd';
import clsx from 'clsx';
import React from 'react';
import HelpText from './HelpText';

interface InputFieldNumberProps extends InputNumberProps {
  label?: string;
  noMargin?: boolean;
  helpText?: string;
  isDanger?: boolean;
  inputRef?: any;
}

function InputFieldNumber({
  label,
  noMargin,
  helpText,
  isDanger,
  inputRef,
  ...props
}: InputFieldNumberProps) {
  return (
    <div className={clsx(noMargin ? 'mb-0' : 'mb-3')}>
      {label && (
        <label className='mb-1 block text-sm font-medium text-gray-900'>
          {label}
        </label>
      )}
      <div>
        <InputNumber
          {...props}
          className='hover:border-primary-hover focus:border-primary-hover focus:ring-0'
          size='large'
          style={{
            width: '100%',
          }}
          ref={inputRef}
          min={0}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
          parser={(value: any) => value!.replace(/\$\s?|(,*)/g, '')}
          addonAfter=''
        />
        {/* <input
          type='text'
          {...props}
          ref={inputRef}
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 hover:border-primary-hover focus:border-primary-ring focus:ring-primary-ring '
          placeholder={props.placeholder ?? label}
        /> */}
        <HelpText isDanger={isDanger} text={helpText} />
      </div>
    </div>
  );
}

export default InputFieldNumber;
