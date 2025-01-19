import React from "react";
import styled from "styled-components";

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

const Footer = () => {
	return (
		<FooterContainer>
			<LeftContainer>
				<JobTitleText>freelance designer pigiste</JobTitleText>
				<FooterText>
					© 2025 Cassandra Giaccari. All rights reserved. Tous droits réservés.
				</FooterText>
			</LeftContainer>
			<RightContainer>
				<SocialMediaContainer>Contact</SocialMediaContainer>
				<SocialMediaContainer>linkedin</SocialMediaContainer>
				<SocialMediaContainer>instagram</SocialMediaContainer>
			</RightContainer>
		</FooterContainer>
	);
};

export default Footer;
