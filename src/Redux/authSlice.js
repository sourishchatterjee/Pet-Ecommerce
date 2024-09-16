import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState = {
  upload_status: "idle", // Corrected typo
  isRegistered: false,
  reDirectLogin: null,
  isLogined: false,
  reDirectHome: null,
  userDetails:null,
};

export const register = createAsyncThunk(
    "user/signup",
    async (formData, { rejectWithValue }) => {
      
        const response = await axiosInstance.post("/user/signup", formData);
        return response.data;
      } 
    
  );

  export const login = createAsyncThunk(
    "user/signin",
    async (formData, { rejectWithValue }) => {
    
        const response = await axiosInstance.post("/user/signin", formData);
        return response.data;
        
    
    }
  );


  export const fetchUserDetails = createAsyncThunk(
    "user/fetchDetails",
    async () => {
      try {
        const res = await axiosInstance.get("https://wtsacademy.dedicateddevelopers.us/api/user/profile-details");
        console.log("Api",res.data)
        return res.data;
      } catch (err) {
        console.error("Error fetching user details:", err);     
       }
    }
  );

  export const authenticationSlice = createSlice({
    name: "authenticationSlice", // Corrected the name
    initialState,
    reducers: {
      logout: (state,{payload}) => {
        state.isLoggedIn = false;
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        
      },
      check_token:(state,{payload})=>{
        let token=localStorage.getItem("token");
        if(token!==null &&token!==undefined){
          state.isLoggedIn=true;
        }
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(register.pending, (state) => {
          state.upload_status = "sending data";
        })
        .addCase(register.fulfilled, (state, { payload }) => {
          state.upload_status = "idle";
          localStorage?.setItem("name", payload?.data?.first_name); 
          localStorage.setItem("profileImage", payload?.data.profile_pic);
          state.isRegistered = true;
          state.reDirectLogin = "/login";
        })
        .addCase(register.rejected, (state, { payload }) => {
          state.upload_status = "data cannot be sent";
          console.error("Registration failed:", payload); // Logging error details
        })
        .addCase(login.pending, (state) => {
          state.upload_status = "user is trying to login";
        })
        .addCase(login.fulfilled, (state, { payload }) => {
          console.log("Login payload:", payload);
          state.upload_status = "user is logging in";
          localStorage?.setItem("name", payload?.data.first_name); 
          localStorage?.setItem("profileImage", payload?.data.profile_pic);
          //localStorage.setItem('name', result.payload.user.name);
          localStorage.setItem("token", payload.token); // Assuming payload has token
          state.isLogined = true;
          state.reDirectHome = "/";
        })
        .addCase(login.rejected, (state, { payload }) => {
          state.upload_status = "user is unable to login";
          console.error("Login failed:", payload); // Logging error details
        })
        .addCase(fetchUserDetails.pending, (state) => {
          state.upload = "loading";
        })
        .addCase(fetchUserDetails.fulfilled, (state, { payload }) => {
          state.upload = "success";
          state.userDetails = payload?.data
  
        })
        .addCase(fetchUserDetails.rejected, (state) => {
          state.upload = "failed";
        });
    },
  });

  
  export const { logout,check_token } = authenticationSlice.actions;
  export default authenticationSlice.reducer;
  





