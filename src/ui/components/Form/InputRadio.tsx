'use client';
import { DefaultOptionType } from '@/libs/models/root.model';
import { Radio } from 'antd';
import clsx from 'clsx';
import React from 'react';
import HelpText from './HelpText';

interface InputRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  noMargin?: boolean;
  helpText?: string;
  isDanger?: boolean;
  inputRef?: any;
  options: DefaultOptionType[];
  inputProps?: any;
}

function InputRadio({
  label,
  noMargin,
  helpText,
  isDanger,
  inputRef,
  options,
  inputProps,
}: InputRadioProps) {
  return (
    <div className={clsx(noMargin ? 'mb-0' : 'mb-3')}>
      {label && (
        <label className='mb-1 block text-sm font-medium text-gray-900'>
          {label}
        </label>
      )}
      <div>
        <Radio.Group
          {...inputProps}
          ref={inputRef}
          options={options}
          optionType='button'
          buttonStyle='solid'
        />
        <HelpText isDanger={isDanger} text={helpText} />
      </div>
    </div>
  );
}

export default InputRadio;
