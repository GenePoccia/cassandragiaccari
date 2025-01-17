import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
	position: fixed;
	z-index: 100;
	width: 100%;
	bottom: 10%;
	display: flex;
	flex-direction: row;
	gap: 2%;
	justify-content: center;
	align-items: center;

	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.4) 100%
	);

	height: 130px;
`;

const FooterTopText = styled.div`
	font-size: 24px;
	color: white;
	padding-top: 20px;
	text-align: center;
	font-family: "Helvetica Neue", Arial, sans-serif;
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

const Footer = () => {
	return (
		<FooterContainer>
			<JobTitleText>freelance designer pigiste</JobTitleText>
			<FooterTopText>
				© 2025 Cassandra Giaccari. All rights reserved. Tous droits réservés.
			</FooterTopText>
			<FooterTopText>Contact</FooterTopText>
		</FooterContainer>
	);
};

export default Footer;
