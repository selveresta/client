import React, { useState } from "react";
import axios from "axios";

export const Modal = ({ isOpen, onClose }) => {
	const [file, setFile] = useState(null);
	const [description, setDescription] = useState("");

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!file) {
			alert("Please select a file to upload.");
			return;
		}

		const formData = new FormData();
		formData.append("file", file);
		formData.append("description", description);

		try {
			await axios.post("http://localhost:3000/files/upload", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			alert("File uploaded successfully");
			onClose();
		} catch (error) {
			console.error("Error uploading file:", error);
			alert("Failed to upload file");
		}
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
			<div className='bg-white p-4 rounded-lg w-1/3'>
				<h2 className='text-2xl mb-4'>Upload File</h2>
				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label className='block mb-2'>File</label>
						<input type='file' onChange={handleFileChange} className='w-full p-2 border rounded' />
					</div>
					<div className='mb-4'>
						<label className='block mb-2'>Description</label>
						<input type='text' value={description} onChange={handleDescriptionChange} className='w-full p-2 border rounded' />
					</div>
					<div className='flex justify-end'>
						<button type='button' onClick={onClose} className='px-4 py-2 bg-gray-600 text-white rounded mr-2'>
							Cancel
						</button>
						<button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded'>
							Upload
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
