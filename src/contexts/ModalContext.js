"use client";
import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [language, setLanguage] = useState("en");
	const [view, setView] = useState("main");

	const handleOpen = () => {
		setIsOpen(true);
	};
	const handleClose = () => {
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
		setLanguage,
		language,

		// Mobile Modal
		view,
		setView,
	};

	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
};
