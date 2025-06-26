import React, { useContext } from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";

import { ModalContext } from "../../../contexts/ModalContext";
import { AboutContext } from "../../../contexts/AboutContext";

import CloseButtonSVG from "../../../assets/closebutton.svg";
import LeftArrowSVG from "../../../assets/left_arrow.svg";

import Description from "../Description";
import Services from "../Services";
import Experience from "../Experience";

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

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0;
	background-color: rgba(30, 28, 28, 1);
	z-index: 102;
	padding: 16px 32px 16px 32px;
	border-bottom: 1px solid white;
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

	@media (max-width: 1024px) {
		flex-direction: column;
		padding: 60px;
	}

	@media (max-width: 700px) {
		padding-top: 40px;
		padding-left: 40px;
		padding-right: 40px;
		padding-bottom: 25%;
	}
`;

const TitleContainer = styled.span``;

const BackButton = styled.button`
	all: unset;
	display: flex;
	align-items: center;
`;

const SecondaryModal = () => {
	const { handleClose, language, setView } = useContext(ModalContext);
	const { headerData } = useContext(AboutContext);
	const handleBack = () => {
		setView("main");
	};
	return (
		<Box sx={style}>
			<HeaderContainer>
				<BackButton onClick={handleBack}>
					<img
						src={LeftArrowSVG}
						alt="Left Arrow"
					/>
				</BackButton>
				<TitleContainer>{headerData?.name?.[language]}</TitleContainer>
				<CloseButton
					onClick={(e) => {
						e.stopPropagation();
						handleClose();
						handleBack();
					}}
				>
					<img
						src={CloseButtonSVG}
						alt="Close button"
					/>
				</CloseButton>
			</HeaderContainer>
			<ContentContainer>
				<Description />
				<Services />
				<Experience />
			</ContentContainer>
		</Box>
	);
};

export default SecondaryModal;
