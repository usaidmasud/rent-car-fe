'use client';
import clsx from 'clsx';
import HelpText from './HelpText';

import * as Switch from '@radix-ui/react-switch';
interface InputSwitchProps {
  label: string;
  noMargin?: boolean;
  helpText?: string;
  isDanger?: boolean;
  inputRef?: any;
  inputProp?: any;
}

function InputSwitch({
  label,
  noMargin,
  helpText,
  isDanger,
  inputRef,
  inputProp,
}: InputSwitchProps) {
  return (
    <div className={clsx(noMargin ? 'mb-0' : 'mb-3')}>
      <label className='mb-1 block text-sm font-medium text-gray-900'>
        {label}
      </label>
      <div>
        <Switch.Root
          className='relative h-6 w-12 rounded-full bg-gray-300 shadow-lg focus:shadow-sm data-[state=checked]:bg-primary-light'
          {...inputProp}
          ref={inputRef}
        >
          <Switch.Thumb className=' block h-4 w-4 translate-x-1 rounded-full bg-white transition-transform duration-300 will-change-transform data-[state=checked]:translate-x-7' />
        </Switch.Root>
        <HelpText isDanger={isDanger} text={helpText} />
      </div>
    </div>
  );
}

export default InputSwitch;
