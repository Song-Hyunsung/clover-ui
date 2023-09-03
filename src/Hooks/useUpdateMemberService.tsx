import { useEffect, useState } from "react";
import useApiRequest from "./useApiRequest";
import NoteInfo from "../Models/NoteInfo";
import Note from "../Models/Note";

// TODO - implement abort signal
const useUpdateMemberService = () => {
  const apiRequest = useApiRequest('POST');
  const url = process.env.REACT_APP_CLOVER_API + "/member";

  const updateMemberNote = async (payload: NoteInfo) => {
    try {
      const res = await apiRequest(url, payload);
      return res.status;
    } catch(err: any) {
      if(err && err.response && err.response.status && err.response.status !== 401){
        console.error("Error during update member note call");
        console.error(err);
        return err.response.status;
      }
      return 500;
    }
  }

  return { updateMemberNote }
}

export default useUpdateMemberService;