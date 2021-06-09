const { VUE_APP_DEFAULT_LANGUAGE, VUE_APP_API_BASE_URL, NODE_ENV = '',
VUE_APP_SERVICE_HOST,VUE_APP_SERVICE_PORT
} = process.env;

console.log(" process.env ",  process.env); 
console.log(" VUE_APP_SERVICE_HOST ", VUE_APP_SERVICE_HOST); 
console.log(" VUE_APP_SERVICE_PORT ", VUE_APP_SERVICE_PORT); 

const environment = NODE_ENV.toLowerCase();
const VUE_APP_SERVICE = "http://" + VUE_APP_SERVICE_HOST + ":" + VUE_APP_SERVICE_PORT + "/";
const useAppHost = VUE_APP_SERVICE_HOST !== undefined && VUE_APP_SERVICE_HOST !== null;
const apiBaseUrl = useAppHost === true ? VUE_APP_SERVICE : VUE_APP_API_BASE_URL;

const defaultLanguage = VUE_APP_DEFAULT_LANGUAGE;

export { environment, apiBaseUrl , defaultLanguage };
