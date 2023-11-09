import React from 'react';
interface FormWrapperProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

function FormWrapper({ children, ...props }: FormWrapperProps) {
  return <form {...props}>{children}</form>;
}

export default FormWrapper;
