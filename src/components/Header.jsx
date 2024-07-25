// src/components/Header.js
import React, { useState } from "react";

export const Header = ({ openModal }) => {
	return (
		<div className='w-full flex items-center p-4 bg-dark-blue'>
			<input type='text' placeholder='Search for...' className='w-1/2 p-2 rounded-l-full bg-light-blue placeholder-gray-400' />
			<button className='px-4 py-2 bg-red-600 text-white rounded-r-full ml-2'>Search</button>
			<button onClick={openModal} className='ml-auto px-4 py-2 bg-blue-600 text-white rounded-full'>
				+
			</button>
		</div>
	);
};
