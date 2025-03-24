import React, { useContext } from "react";
import styled from "styled-components";
import { PortableText } from "@portabletext/react";

import { AboutContext } from "../contexts/AboutContext";
import { ModalContext } from "../contexts/ModalContext";

const FooterContainer = styled.div`
	position: fixed;
	z-index: 100;
	width: 100%;
	bottom: 0;
	display: flex;
	flex-direction: column;
	min-height: 100px;
	font-size: 20px;

	justify-content: center;
	align-items: left;
	text-align: left;

	@media (max-width: 700px) {
		background-color: rgba(30, 28, 28, 1);
	}
`;

const FooterText = styled.div`
	color: white;
	padding-top: 20px;
	text-align: center;
	white-space: nowrap;
	font-size: 12px;

	@media (max-width: 700px) {
		text-align: revert;
	}

	@media (max-width: 420px) {
		white-space: normal;
	}
`;

const JobTitleText = styled.div`
	font-weight: 400;
	line-height: 33.6px;
	text-underline-position: from-font;
	text-decoration-skip-ink: none;
	color: rgba(255, 255, 255, 1);
	margin-left: 0;

	@media (max-width: 700px) {
		display: none;
	}
`;

const BottomContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-right: 5%;

	gap: 20px;
	align-items: center;
	margin-left: 5%;
	height: 20px;

	@media (max-width: 700px) {
		margin-left: 8%;
		height: 36px;
	}
`;

const TopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0 5%;
	box-sizing: border-box;

	@media (max-width: 700px) {
		flex-direction: column;
		align-items: flex-start;
		padding: 0 8%;
	}
`;
const SocialMediaLinksContainer = styled.div`
	display: flex;
	gap: 32px;
`;

const SocialMediaContainer = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 14px;
`;

const SocialMediaLink = styled.a`
	color: inherit;
	text-decoration: none;
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

const JobTitleComponent = {
	block: {
		normal: ({ children }) => (
			<p style={{ margin: 0, padding: 0 }}>{children}</p>
		),
	},
};

const Footer = () => {
	const { footerData } = useContext(AboutContext);
	const { language } = useContext(ModalContext);

	const { title, copyright, socialMediaLinks } = footerData;

	return (
		<FooterContainer>
			<TopContainer>
				<JobTitleText>
					<PortableText
						value={title[language]}
						components={JobTitleComponent}
					/>
				</JobTitleText>
				<SocialMediaLinksContainer>
					{socialMediaLinks[language].map((ele) => {
						return renderSocialMedia(ele);
					})}
				</SocialMediaLinksContainer>
			</TopContainer>
			<BottomContainer>
				<FooterText>{copyright[language]}</FooterText>
			</BottomContainer>
		</FooterContainer>
	);
};

export default Footer;
