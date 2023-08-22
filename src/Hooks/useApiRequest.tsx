import axios from 'axios';

interface APIResponse {
  data: any;
  status: number;
  error: any;
  headers: any;
}

const useApiRequest = (type: string) => {
  const axiosProtectedInstance = axios.create({ withCredentials: true });
  const axiosUnprotectedInstance = axios.create({ withCredentials: true });

  axiosProtectedInstance.interceptors.response.use((res: any) => {
    return res;
  }, (err) => {
    if(err && err.response && err.response.status && err.response.status === 401){
      window.location.href = "/login";
    } else if(err.response.status === 403){
      window.location.href = "/forbidden";
    }
    // in case of signal abort, resolve with empty object to prevent runtime error
    // caused by Promise.reject due to signal.abort() call
    // this empty resolve will get handled in useEffect clean up
    if(err.code === "ERR_CANCELED"){
      return Promise.resolve({});
    }
    return Promise.reject(err);
  })

  const makeProtectedGetRequest = async (url: string, signal?: AbortSignal) => {
    const response: APIResponse = {
      data: null,
      status: 500,
      error: null,
      headers: null
    }

    try {
      let authHeader = {};
      if(localStorage.getItem("AUTH_JWT")){
        authHeader = {
          "Authorization": "Bearer " + localStorage.getItem("AUTH_JWT")
        }
      }

      const { data, status, headers } = await axiosProtectedInstance.get(url, { signal: signal, headers: authHeader });
      response.data = data;
      response.status = status;
      response.headers = headers;
    } catch(err: any){
      if(err && err.response && err.response.status && err.response.status === 401){
        console.log("User not logged in, redirecting to login page");
      } else {
        console.error("Error during GET: ", url);
      }
      throw err;
    }

    return response;
  }

  const makeUnprotectedGetRequest = async (url: string, signal?: AbortSignal) => {
    const response: APIResponse = {
      data: null,
      status: 500,
      error: null,
      headers: null
    }

    try {
      const { data, status, headers } = await axiosUnprotectedInstance.get(url, {signal: signal});
      response.data = data;
      response.status = status;
      response.headers = headers;
    } catch(err: any){
      throw err;
    }

    return response;
  }

  switch(type){
    case 'GET':
      return makeProtectedGetRequest;
    case 'UNPROTECTED_GET':
      return makeUnprotectedGetRequest;
    default:
      return makeProtectedGetRequest
  }
}

export default useApiRequest;