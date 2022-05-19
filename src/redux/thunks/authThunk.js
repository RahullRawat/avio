import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logIN = createAsyncThunk(
	"auth/login",
	async (userData, { rejectWithValue }) => {
		try {
			const response = await axios.post("/api/auth/login", userData);
			const data = { data: response.data, status: response.status };
			return data;
		} catch (error) {
			return rejectWithValue({
				status: error.response.status,
				data: error.response.data,
			});
		}
	}
);

export const signUp = createAsyncThunk(
	"auth/signup",
	async (userData, { rejectWithValue }) => {
		try {
			const response = await axios.post("/api/auth/signup", userData);
			const data = { data: response.data, status: response.status };
			return data;
		} catch (error) {
			return rejectWithValue({
				status: error.response.status,
				data: error.response.data,
			});
		}
	}
);
