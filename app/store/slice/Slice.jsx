"use client"
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	mobileOpen: false,
	bgImage: '/images/img1.avif'
};

const bouwSlice = createSlice({

	// An unique name of a slice 
	name: 'bouw',

	// Initial state value of the reducer
	initialState,

	// Reducer methods 
	reducers: {

		mobMode: (state) => {
			state.mobileOpen = !state.mobileOpen;
		},
		setBgImage: (state, { payload }) => { 
			state.bgImage = payload; 
		},

	},
});

// Action creators for each reducer method 
export const { mobMode, setBgImage }
	= bouwSlice.actions;

export const setStateSelector = ((state) => state.bouw);
export default bouwSlice.reducer;