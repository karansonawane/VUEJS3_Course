import Axios from 'axios';
const axiosinstance = Axios.create({
    baseURL: 'https://vue-course-9cc29-default-rtdb.firebaseio.com/',
});

axiosinstance.defaults.headers.common['Karaninstance'] = 'Karan Instance header';

export default axiosinstance;

