import { FC, useEffect, useState } from 'react';
import useAuthService from '../../Hooks/useAuthService';
import { useNavigate } from 'react-router-dom';

interface LoginRedirectProps {}

const LoginRedirect: FC<LoginRedirectProps> = () => {
  const { status } = useAuthService("authenticate");
  const navigate = useNavigate();

  useEffect(() => {
    if(status){
      switch(status){
        case 200:
          navigate("/member-list");
          break;
        case 403:
          navigate("/forbidden");
          break;
        default:
          break;
      }
    }
  },[status])

  const renderErrorMessage = () => {
    if(!status){
      return (
        <div></div>
      )
    }
    switch(status){
      case 200:
        return (
          <div></div>
        )
      default:
        return (
          <div>Error status: {status}, please reach out to me</div>
        )
    }
  }

  return (
    <div>
      {
        renderErrorMessage()
      }
    </div>
  )
}

export default LoginRedirect;
