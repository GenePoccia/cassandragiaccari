import React, { useContext } from "react";

import Modal from "@mui/material/Modal";

import { ModalContext } from "../../../contexts/ModalContext";

import PrimaryModal from "./PrimaryModal";
import SecondaryModal from "./SecondaryModal";

const MobileModal = () => {
	const { isOpen, view } = useContext(ModalContext);

	return (
		<Modal
			open={isOpen}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			{view === "main" ? <PrimaryModal /> : <SecondaryModal />}
		</Modal>
	);
};

export default MobileModal;
