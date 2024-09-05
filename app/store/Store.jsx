"use client"
import { configureStore } from '@reduxjs/toolkit';
import bouwSlice from './slice/Slice';

export default configureStore({
	reducer: {
		bouw: bouwSlice,
	},
});