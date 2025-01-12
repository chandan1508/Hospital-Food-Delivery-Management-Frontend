// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: { isLoggedIn: false, role: "", email: "", name: "" },
//   reducers: {
//     login(state) {
//       state.isLoggedIn = true;
//     },
//     logout(state) {
//       state.isLoggedIn = false;
//     },
//     changeRole(state, action) {
//       const role = action.payload;
//       state.role = role;
//     },
//     changeEmail(state, action) {
//       const email = action.payload;
//       state.email = email;
//     },
//     changeName(state, action) {
//       const name = action.payload;
//       state.name = name;
//     },
//   },
// });

// export const authActions = authSlice.actions;
// export default authSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, role: "", email: "", name: "" },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    changeRole(state, action) {
      state.role = action.payload;
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changeName(state, action) {
      state.name = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
