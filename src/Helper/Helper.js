import axios from "axios";
let adminUrl = "https://wtsacademy.dedicateddevelopers.us/api";

if (process.env?.REACT_APP_ENV === "production") {
  adminUrl = "https://wtsacademy.dedicateddevelopers.us/api"; 
  //change when app goes live
}

export const baseURL = adminUrl;

let axiosInstance = axios.create({ 
    baseURL, //We will only work with the endpoint of the api with the instance.
  });


  const profilePicBaseUrl = 'https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/';

  export const profile_Url = (media) => {
    if (!media) {
      console.error("No media provided to profile_Url function.");
      return '/path/to/default/image.png'; // Return a default image URL
    }
    
    return `${profilePicBaseUrl}${media}`;
  };
  
  axiosInstance.interceptors.request.use(
    async function(config){
      const token=
      localStorage.getItem("token")||sessionStorage.getItem("token");
      if(token !==null ||token !== undefined){
        config.headers["X-access-token"]=token;
      }
      return config;
    },
    function (err){
      return Promise.reject(err);
    }
  )
  
  export default axiosInstance;
