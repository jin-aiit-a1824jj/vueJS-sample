import axios from "axios";

const instance = axios.create({
  baseURL: 'anthoer base url'
});

//instance.defaults.headers.common

export default instance;