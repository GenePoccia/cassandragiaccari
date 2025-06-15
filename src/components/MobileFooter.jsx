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
	flex-direction: column;
	min-height: 46px;
	font-size: 10px;

	justify-content: center;
	align-items: center;
	text-align: center;

	@media (max-width: 700px) {
		background-color: rgba(30, 28, 28, 1);
	}
`;

const FooterText = styled.div`
	color: white;
`;

const MobileFooter = () => {
	const { footerData } = useContext(AboutContext);
	const { language } = useContext(ModalContext);

	const { title, copyright, socialMediaLinks } = footerData;

	return (
		<FooterContainer>
			<FooterText>{copyright[language]}</FooterText>
		</FooterContainer>
	);
};

export default MobileFooter;
