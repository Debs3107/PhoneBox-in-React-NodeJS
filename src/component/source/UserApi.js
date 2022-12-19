import axios from 'axios';

const BASE_URL = 'http://localhost:9800/Admin';

export async function saveData(user) {
    return axios.post(BASE_URL, user)
}

export async function getAllUserFromServer() {
    return axios.get(BASE_URL);
}

export async function deleteUserFromServer(id) {
    return axios.delete(`${BASE_URL}/${id}`);
}

