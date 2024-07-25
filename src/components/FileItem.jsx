import React from "react";

export const FileItem = ({ file }) => {
	return (
		<div className='bg-purple-700 text-white p-4 rounded-lg hover:bg-purple-800 transition-all'>
			<div className='flex justify-center mb-2'>
				<img src='file-icon.png' alt='File Icon' className='w-16 h-16' />
			</div>
			<h2 className='text-xl mb-2'>{file.name}</h2>
			<p>Size: {file.size}</p>
			<p>ID: {file.id}</p>
			<p>Download count: {file.downloadCount}</p>
			<p>File extension: {file.extension}</p>
			<p>Description: {file.description}</p>
			<button className='w-full mt-4 py-2 bg-red-600 rounded-full'>Open</button>
		</div>
	);
};
