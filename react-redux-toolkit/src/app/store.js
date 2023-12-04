import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from './userSlice'
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userReducer: userReducer,
    theme: themeReducer
  },
});
