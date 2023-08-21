import React, { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const discordURI = process.env.REACT_APP_DISCORD_OAUTH2_URI;
  const [searchParams, setSearchParams] = useSearchParams();
  const authCode: string | null = searchParams.get("code");

  useEffect(() => {
    if(!authCode){
      window.location.replace(discordURI as string);
    } else {
      alert(authCode + " Make request to BE HERE");
    }

  },[])

  return (
    <div>
      {
        !authCode ? <div>User not logged in, redirecting to Discord authentication page...</div> : 
                    <div>Logging in...</div>
      }
      
    </div>
  )
}

export default Login;
