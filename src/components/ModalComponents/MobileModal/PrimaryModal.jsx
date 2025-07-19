import React, { useContext } from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";

import { ModalContext } from "../../../contexts/ModalContext";
import { AboutContext } from "../../../contexts/AboutContext";
import { PortableText } from "@portabletext/react";

import CloseButtonSVG from "../../../assets/closebutton.svg";
import RightArrowSVG from "../../../assets/right_arrow.svg";

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
	gap: 5%;

	padding-top: 24px;
	padding-left: 40px;
	padding-right: 40px;
	padding-bottom: 25%;

	@media (max-width: 1024px) {
		flex-direction: column;
		padding: 24px 40px 60px 40px;
	}
`;

const TitleContainer = styled.span`
	font-size: 20px;
	font-weight: 600;
`;

const AboutSection = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px 0px;
	font-size: 20px;
	border-bottom: 1px solid white;
`;
const AboutButton = styled.button`
	all: unset;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	gap: 8px;
	padding: 6px 6px 6px 0px;
`;

const JobTitleComponent = {
	block: {
		normal: ({ children }) => (
			<p style={{ margin: 0, padding: 0, width: "20%", fontSize: "44px" }}>
				{children}
			</p>
		),
	},
	marks: {
		strong: ({ children }) => (
			<strong style={{ fontWeight: 600 }}>{children}</strong>
		),
	},
};
const SocialMediaLinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 24px;
	gap: 24px;
`;

const SocialMediaContainer = styled.div`
	display: flex;
	font-size: 14px;
`;

const SocialMediaLink = styled.a`
	color: inherit;
	text-decoration: none;
`;

const ArrowContainer = styled.div``;

const PortableTextContainer = styled.div`
	padding-bottom: 32px;
	border-bottom: 1px solid white;
`;

const renderSocialMedia = (socialMedia) => {
	return (
		<SocialMediaContainer key={socialMedia?.name}>
			<SocialMediaLink
				href={socialMedia?.url}
				target="_blank"
				rel="noopener noreferrer"
			>
				{socialMedia?.name}
			</SocialMediaLink>
		</SocialMediaContainer>
	);
};

const PrimaryModal = () => {
	const { handleClose, language, setView, setLanguage } =
		useContext(ModalContext);
	const { headerData, footerData } = useContext(AboutContext);

	const handleClick = (language) => {
		setView("about");
		setLanguage(language);
	};

	return (
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
				<PortableTextContainer>
					<PortableText
						value={footerData?.title[language]}
						components={JobTitleComponent}
					/>
				</PortableTextContainer>
				<AboutSection>
					<AboutButton onClick={() => handleClick("en")}>
						{headerData?.about?.en}
						<ArrowContainer>
							<img
								src={RightArrowSVG}
								alt="Right Arrow"
							/>
						</ArrowContainer>
					</AboutButton>
					<AboutButton onClick={() => handleClick("fr")}>
						{headerData?.about?.fr}
						<ArrowContainer>
							<img
								src={RightArrowSVG}
								alt="Right Arrow"
							/>
						</ArrowContainer>
					</AboutButton>
				</AboutSection>
				<SocialMediaLinksContainer>
					{footerData?.socialMediaLinks[language].map((ele) => {
						return renderSocialMedia(ele);
					})}
				</SocialMediaLinksContainer>
			</ContentContainer>
		</Box>
	);
};

export default PrimaryModal;
