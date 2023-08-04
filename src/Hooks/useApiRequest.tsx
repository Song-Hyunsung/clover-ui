import axios from 'axios';

const useApiRequest = (type: string) => {
    interface APIResponse {
        data: any;
        error: any;
    }

    const http = axios.create();

    const makeGetRequest = async (url: string, body: any) => {
        const response: APIResponse = {
            data: null,
            error: null
        }

        try {
            const { data } = await http.get(url, body);
            response.data = data
        } catch(err: any){
            console.error("Error during GET: ", url);
            console.error(err)
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