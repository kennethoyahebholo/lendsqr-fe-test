import { FunctionComponent } from 'react';

export interface IErrorComp {
  error?: string;
  className?: string;
}

const ErrorComp: FunctionComponent<IErrorComp> = ({
  error,
  className,
}) => (
  <span className={`error-flag error-comp ${className || ''}`}>{error}</span>
);

export default ErrorComp;
