import React, { useContext } from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { ModalContext } from "../../../contexts/ModalContext";

import Description from "../Description";
import Services from "../Services";
import Experience from "../Experience";

import CloseButtonSVG from "../../../assets/closebutton.svg";

const style = {
	position: "absolute",
	top: 0,
	left: 0,
	zIndex: "101",
	width: "100vw",
	height: "100vh",
	bgcolor: "rgba(30, 28, 28, 1)",
	gap: "5%",
	boxShadow: 24,

	overflowY: "auto", // Allow vertical scrolling for smaller breakpoints
};

const CloseButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	position: sticky;
	top: 0;
	background-color: rgba(30, 28, 28, 1);
	z-index: 102;
	padding: 32px 32px 5px 32px;
`;

const CloseButton = styled.button`
	background: none;
	border: none;
	color: black;

	cursor: pointer;
	outline: none;
	&:focus {
		outline: none;
	}
	&:hover {
		color: red;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 3%;
	gap: 5%;
	padding-bottom: 60px;

	@media (max-width: 700px) {
		padding-top: 40px;
		padding-left: 40px;
		padding-right: 40px;
		padding-bottom: 25%;
	}
`;

const FullScreenModal = () => {
	const { isOpen, handleClose } = useContext(ModalContext);

	return (
		<Modal
			open={isOpen}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<CloseButtonContainer>
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
				</CloseButtonContainer>
				<ContentContainer>
					<Description />
					<Services />
					<Experience />
				</ContentContainer>
			</Box>
		</Modal>
	);
};

export default FullScreenModal;
