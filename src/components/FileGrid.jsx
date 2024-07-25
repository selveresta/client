import React, { useState, useEffect } from "react";
import { FileItem } from "./FileItem";
import axios from "axios";

export const FileGrid = () => {
	const [files, setFiles] = useState([]);

	useEffect(() => {
		fetchFiles();
	}, []);

	const fetchFiles = async () => {
		const response = await axios.get("http://localhost:3000/files/list");
		setFiles(response.data);
	};

	const downloadFile = async (fileId) => {
		const response = await axios({
			url: `http://localhost:3000/files/${fileId}/download`,
			method: "GET",
			responseType: "blob", // Important
		});
		const url = window.URL.createObjectURL(new Blob([response.data]));
		const link = document.createElement("a");
		link.href = url;
		link.setAttribute("download", "file"); //or any other extension
		document.body.appendChild(link);
		link.click();
	};

	return (
		<div className='p-4'>
			<h1 className='text-3xl mb-4'>Test</h1>
			<div className='grid grid-cols-4 gap-4'>
				{files.map((file, index) => (
					<FileItem key={index} file={file} />
				))}
			</div>
			<div className='flex justify-center mt-4'>
				<button className='px-3 py-1 bg-gray-800 text-white rounded-l-full'>{"<"}</button>
				{[...Array(5)].map((_, i) => (
					<button key={i} className='px-3 py-1 bg-gray-800 text-white'>
						{i + 1}
					</button>
				))}
				<button className='px-3 py-1 bg-gray-800 text-white rounded-r-full'>{">"}</button>
			</div>
		</div>
	);
};
