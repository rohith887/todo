import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./Slices/TodoSlice";

const Store = configureStore({
    reducer:{
        todo:TodoSlice
    }
});

export default Store;