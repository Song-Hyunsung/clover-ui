import { useEffect, useState } from "react";
import useApiRequest from "./useApiRequest";
import MemberList from "../Models/MemberList";

const useMemberService = () => {
  const [memberList, setMemberList] = useState<MemberList[]>([]);
  const apiRequest = useApiRequest('GET');
  const url = process.env.REACT_APP_CLOVER_API + "/member";

  const fetchMembers = (signal: AbortSignal) => {
    apiRequest(url, signal).then((res) => {
      if(res.data){
        setMemberList(res.data)
      }
    }).catch((err) => {
      if(err && err.response && err.response.status && err.response.status !== 401){
        console.error("Error during getMember call");
        console.error(err);
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