import { createSlice } from '@reduxjs/toolkit';
import  createId  from './createId';

export const carSlice = createSlice({
    name: 'cars',
    initialState: [
        {
            id: 1,
            make: 'Honda',
            model: 'Civic',
            year: '2008',
            isRunning: false,
        },
        {
            id: 2,
            make: 'Tesla',
            model: 'Y',
            year: '2021',
            isRunning: false,
        },
    ],
    reducers: {
        add: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes.
            // Also, no return statement is required from these functions.
            const newCarId = createId(state);
            const newCar = { ...action.payload, id: newCarId };
            state.push(newCar);
        },
        start: (state, action) => {
            console.log(action);
            state.filter(c => c.id === action.payload.id)[0].isRunning = true;
        },
        stop: (state, action) => {
            state.filter(c => c.id === action.payload.id)[0].isRunning = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { add, start, stop } = carSlice.actions;

export default carSlice.reducer;