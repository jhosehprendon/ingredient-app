import axios from 'axios';

const instance = axios.create({
    bareURL: 'https://react-burger-20b9b.firebaseio.com/'
})

export default instance;