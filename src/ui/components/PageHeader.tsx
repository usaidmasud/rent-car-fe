'use client';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  extra?: React.ReactNode;
  showBackButton?: boolean;
}

function PageHeader({
  title,
  description,
  extra,
  showBackButton,
}: PageHeaderProps) {
  const router = useRouter();
  return (
    <div className='flex flex-col gap-4 md:flex-row md:justify-between md:gap-0'>
      <div className={clsx(showBackButton && 'inline-flex gap-1')}>
        {showBackButton && (
          <div
            className='flex h-auto cursor-pointer items-center justify-center rounded-md bg-gray-500 text-white transition-colors duration-200 ease-in hover:bg-gray-700'
            title='Back'
            onClick={() => router.back()}
          >
            <ChevronLeftIcon className='h-6 w-6' />
          </div>
        )}
        <div className=''>
          <h5 className='text-xl font-semibold leading-8'>{title}</h5>
          <p className='text-sm font-normal text-gray-600'>{description}</p>
        </div>
      </div>

      {extra && <div>{extra}</div>}
    </div>
  );
}

export default PageHeader;
