import { FC, useEffect } from 'react';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const discordURI = process.env.REACT_APP_DISCORD_OAUTH2_URI;

  useEffect(() => {
    window.location.replace(discordURI as string);
  },[])

  return (
    <div>Redirecting user to Discord authentication page...</div>
  )
}

export default Login;
