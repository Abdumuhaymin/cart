import { configureStore } from "@reduxjs/toolkit";
import cart  from "./reducer/card";
import { saveState } from "../config/store";
 export const store = configureStore({
  reducer: {
   cart,
  },
});

store.subscribe(()=>{ 
  saveState("products",store.getState().cart)
})