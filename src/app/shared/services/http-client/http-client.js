import axios from 'axios'
import { apiBaseUrl } from '@/environment/environment';
import { Decrypt } from "@/app/shared/util.js";

const pURL = require('url');

const noTokenUrl = [
    'Users/me',
    'Users/Token',
  ];
  
const config = {
    baseURL: apiBaseUrl
  };

const httpClient = axios.create(config);

const apiPath = (url) => {
    let retVal = '';
    const p_url = pURL.parse(url);
    const path = p_url.pathname;
    const n = path.indexOf('api');
  
    const len = (path.charAt(path.length-1) == '/') ? (path.length-6) : (path.length-4);
    retVal = path.substr( (n+4), len);
    return retVal;
  }

  const authInterceptor = config => {
    /** add auth token */
    const path = apiPath(config.url);
  
    if(!noTokenUrl.includes(path)) { // add Bearer
  
      const tokenKey = localStorage.getItem('_id');
      const token = localStorage.getItem('_val');
  
      if(tokenKey) {
        const decryptString = Decrypt(token, tokenKey);
        //console.log("decryptString",decryptString);
  
        if(decryptString) {
          const o = decryptString;
          config.headers.Authorization = "Bearer " + o.token; 
        }
      }
    }
  
    return config;
  };
  
  const loggerInterceptor = config => {
    /** Add logging here */
    return config;
  };
  
  /** Adding the request interceptors */
  httpClient.interceptors.request.use(authInterceptor);
  httpClient.interceptors.request.use(loggerInterceptor);
  
  /** Adding the response interceptors */
  httpClient.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      /** Do something with response error */
      return Promise.reject(error);
    }
  );
  
  const isEmpty = arg => {
    for (var item in arg) {
      return false;
    }
    return true;
  }
  
  const ErrorResponse = (error) => {
    let response = {
      success: false,
      message: ''
    };
  
    const jo = JSON.parse(JSON.stringify(error));
  
    if(isEmpty(jo)) {
      response.success = false;
      response.message = error;
    } else {
      response = error.response;
      response.success = false;
      response.message = response.statusText;
    }
  
    return response;
  };

  export { httpClient, ErrorResponse };