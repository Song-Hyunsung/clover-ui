import axios from 'axios';

const useApiRequest = (type: string) => {
  interface APIResponse {
    data: any;
    error: any;
  }

  const axiosInstance = axios.create();

  axiosInstance.interceptors.response.use((res: any) => {
    return res;
  }, (err) => {
    if(err && err.response && err.response.status && err.response.status === 401){
      window.location.href = "/login";
    }
    // in case of signal abort, resolve with empty object to prevent runtime error
    // caused by Promise.reject due to signal.abort() call
    // this empty resolve will get handled in useEffect clean up
    if(err.code === "ERR_CANCELED"){
      return Promise.resolve({});
    }
    return Promise.reject(err);
  })

  const makeGetRequest = async (url: string, signal?: AbortSignal) => {
    const response: APIResponse = {
      data: null,
      error: null
    }

    try {
      const { data } = await axiosInstance.get(url, {signal: signal});
      response.data = data
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

  switch(type){
    case 'GET':
      return makeGetRequest;
    default:
      return makeGetRequest
  }
}

export default useApiRequest;