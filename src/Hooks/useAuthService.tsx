import { useEffect, useState } from "react";
import useApiRequest from "./useApiRequest";
import { useSearchParams } from "react-router-dom";

const useAuthService = (endpoint: string) => {
  const protectedApiRequest = useApiRequest('GET');
  const unprotectedApiRequest = useApiRequest('UNPROTECTED_GET');
  const baseUrl = process.env.REACT_APP_CLOVER_API;
  const [status, setStatus] = useState<number>();
  const [searchParams, setSearchParams] = useSearchParams();

  const checkLogin = (signal?: AbortSignal) => {
    protectedApiRequest(baseUrl + "/auth/check", signal).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.error(err);
    })
  }

  const authenticate = (signal?: AbortSignal) => {
    const authCode: string | null = searchParams.get("code");
    if(authCode){
      unprotectedApiRequest(baseUrl + "/auth/authenticate?code=" + authCode, signal).then((res) => {
        console.log(res.status);
        setStatus(res.status);
      }).catch((err) => {
        if(err && err.response && err.response.status){
          setStatus(err.response.status);
        }
      })
    } else {
      setStatus(401);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    switch(endpoint){
      case "checkLogin":
        checkLogin(signal);
        break;
      case "authenticate":
        authenticate(signal);
        break;
      default:
        break;
    }

    return () => {
      controller.abort();
    };
  },[])

  return { status };
}

export default useAuthService;