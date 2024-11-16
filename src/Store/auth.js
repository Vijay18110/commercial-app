import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: {}, isStateChange: false, userdata: [] },
  reducers: {
    onAddToken: (state, action) => {
      state.token = action.payload;
    },

    onGetAllUser: (state, action) => {
      state.userdata = action.payload;
    },

    onAuthChange: (state, action) => {
      state.isStateChange = !state.isStateChange;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
