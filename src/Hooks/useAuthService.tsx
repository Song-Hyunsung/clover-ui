import { useEffect, useState } from "react";
import useApiRequest from "./useApiRequest";

const useAuthService = (endpoint: string) => {
  const apiRequest = useApiRequest('GET');
  const url = process.env.REACT_APP_CLOVER_API + "/auth/check";

  const checkLogin = () => {
    const controller = new AbortController();
    const signal = controller.signal;

    const callCheckLogin = () => {
      apiRequest(url, signal).then((res) => {
        console.log(res);
      }).catch((err) => {
        controller.abort();
      })
    }

    callCheckLogin();
  }

  switch(endpoint){
    case "checkLogin":
      return checkLogin();
    default:
      return null;
  }
}

export default useAuthService;