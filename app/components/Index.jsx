// "use client";
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { orderFood, setStateSelector } from '../store/slice/Slice.jsx';

// function Index({ name }) {
// 	const [orders, setOrders] = useState('');

// 	// Using useSelector hook we obtain the redux store value 
// 	const { food } = useSelector(setStateSelector);

// 	const dispatch = useDispatch();

// 	// Using the useDispatch hook to send payload back to redux 
// 	const addOrder = () => dispatch(orderFood(orders));

// 	return (
// 		<div>
			
// 		</div>
// 	);
// }

// export default Index;