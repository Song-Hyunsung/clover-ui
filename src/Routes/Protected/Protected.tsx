import React, { FC, useEffect } from 'react';
import useAuthService from '../../Hooks/useAuthService';


interface IProtectedProps {
  children: JSX.Element
}

const Protected: FC<IProtectedProps> = (props: IProtectedProps) => {
  const { children } = props;
  useAuthService("checkLogin");

  return children;
}

export default Protected;
