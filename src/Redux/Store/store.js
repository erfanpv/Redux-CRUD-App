import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../UserReducer/UserReducer";


const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});

export default store;
