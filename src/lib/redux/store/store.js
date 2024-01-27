import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../reducer/rootReducer";

export const store = configureStore({
  reducer: Reducer,
});
