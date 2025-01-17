"use client";
import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [language, setLanguage] = useState("en");

	const handleOpen = () => {
		console.log("Opening Modal");
		setIsOpen(true);
	};
	const handleClose = () => {
		console.log("Closing Modal");
		setIsOpen(false);
	};
	const setModalLanguage = (language) => {
		setLanguage(language);
	};

	const value = {
		isOpen,
		setIsOpen,
		handleClose,
		handleOpen,
		setModalLanguage,
		language,
	};

	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
};
