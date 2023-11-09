import clsx from 'clsx';
import React from 'react';

interface CustomCardProps {
  children: React.ReactNode;
  className?: string;
}

function CustomCard({ children, className }: CustomCardProps) {
  return (
    <div className={clsx('bg-white shadow-lg', className)}>{children}</div>
  );
}

interface CustomCardTitleProps {
  title: string;
}
export function CustomCardTitle({ title }: CustomCardTitleProps) {
  return (
    <div className='mb-6'>
      <h5 className='text-lg font-semibold'>{title}</h5>
    </div>
  );
}

export default CustomCard;
