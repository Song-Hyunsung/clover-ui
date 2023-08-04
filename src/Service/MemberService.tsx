import useApiRequest from "../Hooks/useApiRequest";

const MemberService = () => {
    const apiRequest = useApiRequest('GET');

    let url = process.env.REACT_APP_CLOVER_API + "/member";

    const getMembers = async () => {
        return await apiRequest(url, null);
    }

    return { getMembers }
}

export default MemberService;