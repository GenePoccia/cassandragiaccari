import React, { useContext } from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { ModalContext } from "../../contexts/ModalContext";

import Description from "./Description";
import Services from "./Services";
import Experience from "./Experience";

import CloseButtonSVG from "../../assets/closebutton.svg";

const style = {
	position: "absolute",
	top: 0,
	left: 0,
	zIndex: "101",
	width: "100vw",
	height: "100vh",
	bgcolor: "rgba(30, 28, 28, 1)",
	display: "flex",

	gap: "5%",
	padding: "20px",
	boxShadow: 24,
};

const CloseButton = styled.button`
	background: none;
	border: none;
	color: black;
	font-size: 16px;
	cursor: pointer;
	outline: none;
	&:focus {
		outline: none;
	}
	&:hover {
		color: red;
	}
`;

const FullScreenModal = () => {
	const { isOpen, handleClose } = useContext(ModalContext);

	return (
		<div>
			<Modal
				open={isOpen}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Description />
					<Services />
					<Experience />
					<Box>
						<CloseButton
							onClick={(e) => {
								e.stopPropagation();
								handleClose();
							}}
						>
							<img
								src={CloseButtonSVG}
								alt="Close button"
							/>
						</CloseButton>
					</Box>
				</Box>
			</Modal>
		</div>
	);
};

export default FullScreenModal;
