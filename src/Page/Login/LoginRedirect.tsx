import { FC } from 'react';
import useAuthService from '../../Hooks/useAuthService';
import { useNavigate } from 'react-router-dom';

interface LoginRedirectProps {}

const LoginRedirect: FC<LoginRedirectProps> = () => {
  const { status } = useAuthService("authenticate");
  const navigate = useNavigate();

  const renderStatusDiv = (status: number | undefined) => {
    switch(status){
      case 403:
        return (
          <div>You are not an admin and cannot view the site, sorry !</div>
        )
      case 200:
        navigate("/member-list");
        return (
          <div>Authentication finished, redirecting...</div>
        )
      default:
        if(status){
          return (
            <div>Error: {status}, please reach out to me</div>
          )
        } else {
          return (
            <div></div>
          )
        }

    }
  }

  return (
    <div>
      {
        renderStatusDiv(status)
      }
    </div>
  )
}

export default LoginRedirect;
