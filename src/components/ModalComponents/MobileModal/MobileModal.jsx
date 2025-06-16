import React, { useContext } from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { ModalContext } from "../../../contexts/ModalContext";
import { AboutContext } from "../../../contexts/AboutContext";
import { PortableText } from "@portabletext/react";

import CloseButtonSVG from "../../../assets/closebutton.svg";
import SocialMediaLinks from "../SocialMediaLinks";

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
	position: sticky;
	top: 0;
	background-color: rgba(30, 28, 28, 1);
	z-index: 102;
	padding: 32px 32px 16px 32px;
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

const AboutSection = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px 0px;

	border-bottom: 1px solid white;
`;
const AboutButton = styled.button`
	all: unset;
	cursor: pointer;

	padding: 16px 16px 16px 0px;
`;

const JobTitleComponent = {
	block: {
		normal: ({ children }) => (
			<p style={{ margin: 0, padding: 0, width: "20%", fontSize: "44px" }}>
				{children}
			</p>
		),
	},
};

const MobileModal = () => {
	const { isOpen, handleClose, language } = useContext(ModalContext);
	const { headerData, footerData } = useContext(AboutContext);

	return (
		<Modal
			open={isOpen}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<HeaderContainer>
					<TitleContainer>{headerData?.name?.[language]}</TitleContainer>
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
				</HeaderContainer>
				<ContentContainer>
					<PortableText
						value={footerData?.title[language]}
						components={JobTitleComponent}
					/>
					<AboutSection>
						<AboutButton>
							{headerData?.about?.en} <> -&gt; </>{" "}
						</AboutButton>
						<AboutButton>
							{headerData?.about?.fr} <> -&gt; </>{" "}
						</AboutButton>
					</AboutSection>
					todo: contact/linkedin/instagram
				</ContentContainer>
			</Box>
		</Modal>
	);
};

export default MobileModal;
