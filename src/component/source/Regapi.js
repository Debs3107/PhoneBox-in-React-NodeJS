import axios from 'axios';

const BASE_URL = 'http://localhost:9800/Registration';

export async function saveData(data) {
    console.log(data);
    return axios.post(BASE_URL, data);

}
