import axios from 'axios';
export default axios.create({
   //baseURL: 'https://88cf3d16.ngrok.io/api'
 baseURL: 'http://172.10.24.112/inityapi/rest/public/api'
   // baseURL: 'https://arc.inity.de:8443/rest/public/api'

});

