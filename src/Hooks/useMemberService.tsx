import { useEffect, useState } from "react";
import useApiRequest from "./useApiRequest";

const useMemberService = () => {
  const [memberList, setMemberList] = useState([]);
  const apiRequest = useApiRequest('GET');
  const url = process.env.REACT_APP_CLOVER_API + "/member";

  const fetchMembers = (signal: any) => {
    apiRequest(url, signal).then((res) => {
      if(res.data){
        setMemberList(res.data)
      } else {
        console.error("Error during getMembers call")
      }
    })
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchMembers(signal);

    return () => {
      controller.abort();
    };
  }, []);

  return { memberList };
}

export default useMemberService;