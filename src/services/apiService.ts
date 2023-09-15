import axios from 'axios';

type ApiGetProps = {
    queryParams: string[]
}

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const apiGet = ({queryParams}: ApiGetProps) => axios.get(`${apiUrl}/?apikey=${apiKey}&${queryParams.join('&')}`);