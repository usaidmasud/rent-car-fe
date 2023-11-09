import clsx from 'clsx';
import React from 'react';

interface HelpTextProps {
  text?: string;
  isDanger?: boolean;
}

function HelpText({ text, isDanger }: HelpTextProps) {
  return (
    <p
      className={clsx(
        isDanger ? 'text-red-500' : 'text-gray-600',
        'my-1 text-sm'
      )}
    >
      {text}
    </p>
  );
}

export default HelpText;
