import React, { useContext } from "react";
import styled from "styled-components";

import { AboutContext } from "../contexts/AboutContext";
import { ModalContext } from "../contexts/ModalContext";

const FooterContainer = styled.div`
	position: fixed;
	z-index: 100;
	width: 100%;
	bottom: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.4) 100%
	);

	height: 110px;
`;

const FooterText = styled.div`
	font-size: 12px;
	color: white;
	padding-top: 20px;
	text-align: center;
`;

const JobTitleText = styled.div`
	font-size: 24px;
	font-weight: 400;
	line-height: 33.6px;
	text-align: left;
	text-underline-position: from-font;
	text-decoration-skip-ink: none;
	color: rgba(255, 255, 255, 1);
`;

const LeftContainer = styled.div`
	margin-left: 5%;
`;
const RightContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-right: 8%;
`;

const SocialMediaContainer = styled.div`
	margin: 10%;
`;

const SocialMediaLink = styled.a`
	color: inherit;
	text-decoration: none;
	padding-right: 2%;
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

const Footer = () => {
	const { footerData } = useContext(AboutContext);
	const { language } = useContext(ModalContext);

	const { title, copyright, socialMediaLinks } = footerData;

	console.log(socialMediaLinks[language].map((ele) => console.log(ele)));
	return (
		<FooterContainer>
			<LeftContainer>
				<JobTitleText>{title[language]}</JobTitleText>
				<FooterText>{copyright[language]}</FooterText>
			</LeftContainer>
			<RightContainer>
				{socialMediaLinks[language].map((ele) => {
					return renderSocialMedia(ele);
				})}
			</RightContainer>
		</FooterContainer>
	);
};

export default Footer;
