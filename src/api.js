import axios from 'axios'

const url = 'https://api.nytimes.com/svc/books/v3/lists'
const key = 'EjXEM82DzEWNO04USpeGTw3pdTGuFUtC'

export async function getListNames() {
    return (await axios.get(`${url}/names.json?api-key=${key}`)).data.results
}

