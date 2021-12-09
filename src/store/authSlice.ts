import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    session: {
      id: 0,
      email: '',
      username: '',
      password: '',
    },
  },
  reducers: {
    saveSession: (
      state,
      action: PayloadAction<{
        id: number;
        email: string;
        username: string;
        password: string;
      }>,
    ) => {
      state.session = action.payload;
    },
  },
});

export const { saveSession } = authSlice.actions;

export default authSlice.reducer;
