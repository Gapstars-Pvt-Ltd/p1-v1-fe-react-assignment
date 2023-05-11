import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AddTicketsFormValues } from '../forms/AddTicketsForm';
import {showMessage} from '../utils/Commons'

export const retrieveTickets = createAsyncThunk(
    "tickets/retrieve",
    async () => {
        const response = await axios.get(`http://localhost:5000/tickets`);
        const data = await response.data;
        return data;
    }
);

export const addTicket = createAsyncThunk(
    "ticket/addTicket",
    async (ticket: AddTicketsFormValues) => {
        const reqPayload = { ticket: ticket }
        try {
            const response = await axios.post(`http://localhost:5000/tickets`, reqPayload);
            showMessage("success")
            return response.data
        } catch (error) {
            console.log(error)
            showMessage("failed")
            return null;
        }
    })


export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: {
        list: {
            status: "",
            values: []
        },
        save: {
            isSaving: false,
        }
    },
    reducers: {
        resetForm: (state, payload) => {
            // Update state to reset ticket add form
        }
    },
    extraReducers: {
        [retrieveTickets.fulfilled.type]: (state, action) => {
            state.list.status = "success"
            state.list.values = action.payload.data
        },
        [addTicket.fulfilled.type]: (state, action) => {
            state.save.isSaving = false
        },
    },
});

// Action creators are generated for each case reducer function
export const { resetForm } = ticketsSlice.actions;

export default ticketsSlice.reducer;
