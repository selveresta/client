import React, { useState } from "react";
import { Header } from "./components/Header";
import { FileGrid } from "./components/FileGrid";
import { Modal } from "./components/Modal";
import "./App.css";

export const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<div className='App bg-dark-blue text-white min-h-screen'>
			<Header openModal={openModal} />
			<FileGrid />
			<Modal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	);
};

