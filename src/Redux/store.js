import { configureStore } from "@reduxjs/toolkit";
import  {authenticationSlice} from "./authSlice";

import productDetailsReducer from "./crudSlice";
//import ContextProvider from "../Components/Features/ContextProvider";

export const store = configureStore({
    reducer: {
      contents: authenticationSlice.reducer, // Use the correct name for the reducer from authSlice
      //crudKey:productDetails.reducer,       // Use the correct name for the reducer from crudSlice

       crudKey: productDetailsReducer,
    },
  });