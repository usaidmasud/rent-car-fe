import React, { ReactNode } from 'react';

interface AuthWrapperProps {
  children: ReactNode;
  icon: ReactNode;
  title: string;
}

function AuthWrapper({ children, icon, title }: AuthWrapperProps) {
  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-gray-200 '>
      <div className='mx-4 w-full rounded-xl bg-white shadow-lg md:mx-12 md:max-w-sm lg:max-w-md '>
        <div className='relative'>
          <div className='absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary-main p-2'>
              {icon}
            </div>
          </div>
        </div>
        <div className='mt-6 px-10 py-6'>
          <div className='mb-6 text-center'>
            <h5 className='text-lg font-semibold'>{title}</h5>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;
