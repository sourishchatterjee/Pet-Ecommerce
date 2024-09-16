// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../Helper/Helper";
// //import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     upload_Status: "idle",
//     Allproducts: [{}],
//     currentProduct: null,
//     error: null,
//     editStudent:[],
//     Allblog:[{}],
//   };
  
//   export const createProduct = createAsyncThunk(
//     "product/create",
//     async (formData,{ rejectWithValue }) => {
//         try{
//         const res = await axiosInstance.post("/product/create", formData);
//         return res.data;
//     } catch (error) {
//         console.error("API Error:", error.response || error.message);
//         return rejectWithValue(error.response?.data || error.message);
//       }
//       }
    
//   );

  

//   export const createBlog = createAsyncThunk(
//     "product/create",
//     async (formData, { rejectWithValue }) => {
//       const res = await axiosInstance.post("/product/create", formData);
//       return res.data;
//     }
//   );
//   ////
//   export const DeleteProduct = createAsyncThunk(
//     "/delete",
//     async (id) => {
//       let res = await axiosInstance.post("product/remove", { id });
//       let resData = res?.data;
//       return resData;
//     },
//     []
//   );
  
//   export const showAllProducts = createAsyncThunk(
//     "product/list",
//     async (formData) => {
      
//     const res = await axiosInstance.post("product/list",formData);
//     const resData=await res?.data;
//     return resData;
      
//     }
//   );


//   ///
//   export const showAllBlog = createAsyncThunk(
//     "product/list",
//     async (formData) => {
      
//     const res = await axiosInstance.post("product/list",formData);
//     const resData=await res?.data;
//     return resData;
      
//     }
//   );
// ////

// export const edit_product= createAsyncThunk(
//   '/edit',async(id)=>{
//     const res=await axiosInstance.get(`/product/detail/${id}`);
//     const resData=await res?.data;
//     return resData;
//   })


// export const updateProduct = createAsyncThunk(
//   "product/update",
//   async (formData) => {
//     const res = await axiosInstance.post(`product/update`,formData); 
//    let resData=res?.data;
//    return resData;
//   }
// );

//   const productDetails = createSlice({
//     name: "crudKey",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//       builder
//         .addCase(createProduct.pending, (state) => {
//           state.upload_Status = "sending data";
//         })
//         .addCase(createProduct.fulfilled, (state, { payload }) => {
//           state.upload_Status = "success";
//         })
//         .addCase(createProduct.rejected, (state, { payload }) => {
//           state.upload_Status = "failed to send data";
//         })
//         // Show All products
//         .addCase(showAllProducts.pending, (state) => {
//             state.upload_Status = "loading data";
//         })
//         .addCase(showAllProducts.fulfilled, (state, { payload }) => {
//             state.upload_Status = "success";
//             state.Allproducts = payload?.data;
//         })
//         .addCase(showAllProducts.rejected, (state, { payload }) => {
//             state.upload_Status = "failed to load data";
//             state.error = payload;
//         })
//         .addCase(updateProduct.pending, (state) => {
//                   state.status = "loading";
//                 })
//         .addCase(updateProduct.fulfilled, (state, action) => {
//                   state.status = "idle";
//                 })
//         .addCase(updateProduct.rejected, (state, action) => {
//                   state.status = "idle";
                  
//                 })
//                 .addCase(edit_product.pending,(state,{payload})=>{
//                   state.upload_Status='idel'
//               })
//               .addCase(edit_product.fulfilled,(state,{payload})=>{
//                 state.upload_Status='idel';
//                 state.editStudent=payload?.data
//             })
//             .addCase(edit_product.rejected,(state,{payload})=>{
//               state.upload_Status='idel'
//           })

// //creteBlog
//           .addCase(createBlog.pending, (state) => {
//             state.upload_Status = "sending data";
//           })
//           .addCase(createBlog.fulfilled, (state, { payload }) => {
//             state.upload_Status = "success";
//           })
//           .addCase(createBlog.rejected, (state, { payload }) => {
//             state.upload_Status = "failed to send data";
//           })

//           //show allblog
//           .addCase(showAllBlog.pending, (state) => {
//             state.upload_Status = "loading data";
//         })
//         .addCase(showAllBlog.fulfilled, (state, { payload }) => {
//             state.upload_Status = "success";
//             state.showAllBlog = payload?.data;
//         })
//         .addCase(showAllBlog.rejected, (state, { payload }) => {
//             state.upload_Status = "failed to load data";
//             state.error = payload;
//         })
//     },
//   });
  
//    export default productDetails.reducer;
  




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState = {
  upload_Status: "idle",
  Allproducts: [{}],
  currentProduct: null,
  error: null,
  editStudent: [],
  Allblog: [{}],
  totalPages:"",
};

export const createProduct = createAsyncThunk(
  "product/create",
  async (formData, { rejectWithValue }) => {
    const res = await axiosInstance.post("/product/create", formData);
    return res.data;
  }
);

export const createBlog = createAsyncThunk(
  "blog/create", // Changed action type to "blog/create"
  async (formData, { rejectWithValue }) => {
    const res = await axiosInstance.post("/product/create", formData); // Assuming blog creation endpoint is different
    return res.data;
  }
);

export const DeleteProduct = createAsyncThunk(
  "product/delete", // Changed action type to "product/delete"
  async (id) => {
    let res = await axiosInstance.post("product/remove", { id });
    let resData = res?.data;
    return resData;
  }
);

export const showAllProducts = createAsyncThunk(
  "product/list",
  async (formData) => {
    const res = await axiosInstance.post("product/list", formData);
    const resData = await res?.data;
    return resData;
    
  }
);

export const edit_product = createAsyncThunk(
  "product/edit",
  async (id) => {
    const res = await axiosInstance.get(`/product/detail/${id}`);
    const resData = await res?.data;
    return resData;
  }
);

export const updateProduct = createAsyncThunk(
  "product/update",
  async (formData) => {
    const res = await axiosInstance.post("product/update", formData);
    let resData = res?.data;
    return resData;
  }
);





const productDetails = createSlice({
  name: "crudKey",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.upload_Status = "sending data";
      })
      .addCase(createProduct.fulfilled, (state, { payload }) => {
        state.upload_Status = "success";
      })
      .addCase(createProduct.rejected, (state, { payload }) => {
        state.upload_Status = "failed to send data";
      })
      .addCase(showAllProducts.pending, (state) => {
        state.upload_Status = "loading data";
      })
      .addCase(showAllProducts.fulfilled, (state, { payload }) => {
        state.upload_Status = "success";
        state.Allproducts = payload?.data;
        state.totalPages=payload?.totalPages;
      })
      .addCase(showAllProducts.rejected, (state, { payload }) => {
        state.upload_Status = "failed to load data";
        state.error = payload;
      })
      .addCase(updateProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(edit_product.pending, (state, { payload }) => {
        state.upload_Status = "idle";
      })
      .addCase(edit_product.fulfilled, (state, { payload }) => {
        state.upload_Status = "idle";
        state.editStudent = payload?.data;
      })
      .addCase(edit_product.rejected, (state, { payload }) => {
        state.upload_Status = "idle";
      })
      // createBlog
      .addCase(createBlog.pending, (state) => {
        state.upload_Status = "sending data";
      })
      .addCase(createBlog.fulfilled, (state, { payload }) => {
        state.upload_Status = "success";
      })
      .addCase(createBlog.rejected, (state, { payload }) => {
        state.upload_Status = "failed to send data";
      })
      
  },
});

export default productDetails.reducer;

  