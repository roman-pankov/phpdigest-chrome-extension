axios.defaults.baseURL = 'https://phpdigest.free.beeceptor.com';

const token = window.localStorage.getItem('token');
if(token){
    axios.defaults.headers['Authorization'] = `Bearer ${token}`
}
