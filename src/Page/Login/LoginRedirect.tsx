import { FC } from 'react';
import useAuthService from '../../Hooks/useAuthService';

interface LoginRedirectProps {}

const LoginRedirect: FC<LoginRedirectProps> = () => {
  const { status } = useAuthService("authenticate");

  const renderStatusDiv = (status: number | undefined) => {
    switch(status){
      case 403:
        return (
          <div>You are not an admin and cannot view the site, sorry !</div>
        )
      case 200:
        return (
          <div>Authentication finished, redirecting...</div>
        )
      default:
        return (
          <div>Something went wrong, reach out to me</div>
        )
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
