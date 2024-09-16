// const CartReducer =(state,action) =>{

//     switch(action.type){
//         case "Add":
//              return [...state, action.product]

//         case "Remove":

//         case "Increase":

//         case "Decrease":

//         default :
//       return   state;

//     }


// }

// export default CartReducer;


// const CartReducer = (state, action) => {
//     switch (action.type) {
//       case "Add":
//         return [...state, action.product];
  
//       case "Remove":
//         // Assuming action.product is the product to be removed
//         return state.filter(product => product.id !== action.product.id);
  
//       case "Increase":
//         // Assuming action.product is the product to increase the quantity of
//         // return state.map(product =>
//         //   product.id === action.product.id
//         //     ? { ...product, quantity: product.quantity + 1 }
//         //     : product
//         // );
//        const IndexI =state.findIndex(p=> p.id === action.id)
//        state[IndexI].quantity +=1
//        return[...state]

  
//       case "Decrease":
//         // Assuming action.product is the product to decrease the quantity of
//         // return state.map(product =>
//         //   product.id === action.product.id
//         //     ? { ...product, quantity: Math.max(0, product.quantity - 1) }
//         //     : product
//         // );
//         const IndexD =state.findIndex(p=> p.id === action.id)
//         state[IndexD].quantity -=1
//         return[...state]




//       default:
//         return state; // Ensure a valid state is returned in the default case
//     }
//   };
  
//   export default CartReducer;




/** */

// const CartReducer = (state, action) => {
//   switch (action.type) {
//     case "Add":
//       return [...state, action.product];

//     case "Remove":
//       return state.filter(product => product.id !== action.product.id);

//     case "Increase": {
//       const IndexI = state.findIndex(p => p.id === action.id);
//       const updatedProduct = {
//         ...state[IndexI],
//         quantity: state[IndexI].quantity + 1
//       };
//       const updatedState = [...state];
//       updatedState[IndexI] = updatedProduct;
//       return updatedState;
//     }
    
//     case "Decrease": {
//       const IndexD = state.findIndex(p => p.id === action.id);
//       const updatedProduct = {
//         ...state[IndexD],
//         quantity: state[IndexD].quantity - 1
//       };
//       const updatedState = [...state];
//       updatedState[IndexD] = updatedProduct;
//       return updatedState;
//     }

//     default:
//       return state;
//   }
// };

// export default CartReducer;

  /** */



  //  const CartReducer =(state,action) =>{

  //       switch(action.type){
  //           case "Add":
  //                return [...state, action.product]
    
  //           case "Remove":
    
  //           case "Increase":
  //           const IndexI =state.findIndex(p=>p.id === action.id)
  //           state[IndexI].quantity += 1
  //           return [...state]

    
  //           case "Decrease":
  //             const IndexD =state.findIndex(p=>p.id === action.id)
  //           state[IndexD].quantity -= 1
  //           return [...state]
    
  //           default :
  //         return   state;
    
  //       }
    
    
  //   }
    
  //   export default CartReducer;
    

  //new 

  // const CartReducer = (state, action) => {
  //   switch (action.type) {
  //     case "Add":
  //       return [...state, action.product];
  
  //     case "Remove":
  //       return state.filter(product => product.id !== action.id);
  
  //     case "Increase":
  //       return state.map(product =>
  //         product.id === action.id
  //           ? { ...product, quantity: product.quantity + 1 }
  //           : product
  //       );
  
  //     case "Decrease":
  //       return state.map(product =>
  //         product.id === action.id && product.quantity > 1
  //           ? { ...product, quantity: product.quantity - 1 }
  //           : product
  //       );
  
  //     default:
  //       return state;
  //   }
  // };
  
  // export default CartReducer;
  

  // brand new  

  const CartReducer = (state, action) => {
    switch (action.type) {
      case "Add":
        return [...state, { ...action.product, quantity: 1 }]; // Initialize quantity as 1
  
      case "Remove":
        return state.filter(product => product.id !== action.id);
  
      case "Increase":
        return state.map(product =>
          product.id === action.id
            ? { ...product, quantity: (product.quantity || 0) + 1 }
            : product
        );
  
      case "Decrease":
        return state.map(product =>
          product.id === action.id && (product.quantity || 0) > 1
            ? { ...product, quantity: (product.quantity || 0) - 1 }
            : product
        );
  
      default:
        return state; // Ensure a valid state is returned
    }
  };
  
  export default CartReducer;
  