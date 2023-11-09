'use client';
import React, { ReactNode } from 'react';
import * as Form from '@radix-ui/react-form';
interface FormSubmitWrapperProps {
  children: ReactNode;
  className?: string;
}

function FormSubmitWrapper({ children, className }: FormSubmitWrapperProps) {
  return (
    <Form.Submit className={className} asChild>
      {children}
    </Form.Submit>
  );
}

export default FormSubmitWrapper;
