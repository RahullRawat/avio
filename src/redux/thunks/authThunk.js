import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logIN = createAsyncThunk(
	"auth/login",
	async (userData, { rejectWithValue }) => {
		try {
			const response = await axios.post("/api/auth/login", userData);
			console.log("thunk", response);
			const data = { data: response.data, status: response.status };
			return data;
		} catch (error) {
			return rejectWithValue({ status: error.response.status });
		}
	}
);

export const signUp = createAsyncThunk(
	"auth/signup",
	async (userData, { rejectWithValue }) => {
		try {
			const response = await axios.post("/api/auth/signup", userData);
			console.log(response);
			const data = { data: response.data, status: response.status };
			return data;
		} catch (error) {
			return rejectWithValue({ status: error.response.status });
		}
	}
);
