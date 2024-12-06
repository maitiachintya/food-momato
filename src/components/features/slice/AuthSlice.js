// AuthSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { auth_Url } from "../../../api/Url_Api";

const API_URL = auth_Url;  
export const registerUser = createAsyncThunk("users/registerUser", async (user) => {
    const response = await axios.post(API_URL, user);
    return response.data;
});

export const loginUser = createAsyncThunk("users/loginUser", async (credentials) => {
    const response = await axios.get(API_URL);
    const users = response.data;

    const user = users.find(
        (u) =>
            u.email === credentials.email &&
            u.password === credentials.password &&
            (!credentials.phone || u.phone === credentials.phone) // Phone is optional
    );

    if (!user) {
        throw new Error("Invalid email, password, or phone number");
    }

    return user;
});

const userSlice = createSlice({
    name: "users",
    initialState: {
        user: null,
        users: [],
        loading: false,
        error: null,
    },
    reducers: {
        logoutUser: (state) => {
            state.user = null; // Clears user data from the state
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Registration error occurred";
        });

        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Login error occurred";
        });
    },
});

export const { logoutUser } = userSlice.actions; 
export default userSlice.reducer; 
