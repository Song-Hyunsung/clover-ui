import { useEffect, useState } from "react";
import useApiRequest from "./useApiRequest";

const useAuthService = (endpoint: string) => {
  const apiRequest = useApiRequest('GET');
  const baseUrl = process.env.REACT_APP_CLOVER_API;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    switch(endpoint){
      case "checkLogin":
        checkLogin(signal);
    }

    return (() => {
      controller.abort();
    })
  }, []);

  const checkLogin = (signal: AbortSignal) => {
    apiRequest(baseUrl + "/auth/check", signal).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.error(err);
    })
  }

}

export default useAuthService;