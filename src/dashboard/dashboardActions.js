import axios from 'axios'
const BASE_URL = 'http://localhost:3333'

export function getSummary() {
    const request = axios.request({
        method: 'GET',
        url: `${BASE_URL}/agendamento/accept`,
        headers: {
            Authorization: '5f4d969113043012e048be92'
        },
    })
    .then(axios.spread((...responses) => {
        return [responses[0].data]
    }))

    return {
        type: 'CUIDADORES_FETCHED',
        payload: request
    }
}