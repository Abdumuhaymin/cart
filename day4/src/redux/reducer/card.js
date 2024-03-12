import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/store";
const initialState = loadState("products") || {
  products: [],
  count: 0,
  
};
export const cartReducer = createSlice({
  name: "name",
  initialState,
  reducers: {
    add: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (!product) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: 1,
              userPrice: action.payload.price,
            },
          ],
        };
      }
    },
    toggleProdact: (state, action) => {
      if (action.payload.type === "increment") {
        const newProduct = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: item.price*(item.userCount + 1).toFixed(2),
            };
          }
          return item;
        });
        return { ...state, products: newProduct };
      }
    },
    toggleProdact2: (state, action) => {
      if (action.payload.type === "decrement") {
        const newProduct = state.products.map((item) => {
          if (item.id === action.payload.id && item.userCount >1) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: item.price*(item.userCount - 1).toFixed(2),
            };
          }
          return item;
        });
        return { ...state, products: newProduct };
      }
    },
    deleteItem:(state,action)=>{
      return {...state,products:state.products.filter((item)=> item.id !== action.payload.id)}
    }
  },
});

export default cartReducer.reducer;
export const { add, toggleProdact,toggleProdact2,deleteItem } = cartReducer.actions;
