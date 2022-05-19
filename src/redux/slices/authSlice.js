import { createSlice } from "@reduxjs/toolkit";
import { logIN, signUp } from "../thunks/authThunk";

const initialState = {
	user: JSON.parse(localStorage.getItem("user")) || null,
	token: localStorage.getItem("token") || null,
	status: "idle",
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: (state) => {
			state.user = null;
			state.token = null;
			localStorage.removeItem("user");
			localStorage.removeItem("token");
		},
	},
	extraReducers: {
		[logIN.pending]: (state) => {
			state.status = "loading";
		},
		[logIN.fulfilled]: (state, action) => {
			state.status = "success";
			state.token = action.payload.data.encodedToken;
			state.user = action.payload.data.foundUser;
		},
		[logIN.rejected]: (state, action) => {
			state.status = "failed";
		},
		[signUp.pending]: (state) => {
			state.status = "loading";
		},
		[signUp.fulfilled]: (state, action) => {
			state.status = "success";
			state.token = action.payload.data.encodedToken;
			state.user = action.payload.data.foundUser;
		},
		[signUp.rejected]: (state, action) => {
			state.status = "failed";
		},
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
