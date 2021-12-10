import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import forumReducer from './forumSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    forum: forumReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
