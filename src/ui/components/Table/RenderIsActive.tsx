import React, { Fragment } from 'react';
import { CheckCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid';

interface RenderIsActiveProps {
  value: boolean;
}

function RenderIsActive({ value }: RenderIsActiveProps) {
  return (
    <Fragment>
      {value ? (
        <CheckCircleIcon className='h-6 w-6 fill-success-main' />
      ) : (
        <MinusCircleIcon className='h-6 w-6 fill-gray-600' />
      )}
    </Fragment>
  );
}

export default RenderIsActive;
