import React, { useContext } from "react";
import styled from "styled-components";
import { PortableText } from "@portabletext/react";
import { AboutContext } from "../../contexts/AboutContext";
import { ModalContext } from "../../contexts/ModalContext";
import { myPortableTextComponents } from "../reusable/DisplaySummaryParagraph";
import ContactMeCallout from "./ContactMeCallout";
import SocialMediaLinks from "./SocialMediaLinks";

const DescriptionContainer = styled.div`
	min-width: 20%;
	max-width: 25%;
	line-height: 19.6px;

	@media (max-width: 1024px) {
		max-width: none;
	}
`;

const DescriptionHeader = styled.div`
	font-weight: 600;
	margin-bottom: 10%;
	font-size: 20px;

	@media (max-width: 1024px) {
		margin-bottom: 5%;
	}
`;

const PortableTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	font-size: 14px;

	@media (max-width: 1260px) {
		max-width: none;
	}
`;

const Description = () => {
	const { aboutMe } = useContext(AboutContext);
	const { language } = useContext(ModalContext);

	return (
		<DescriptionContainer>
			<DescriptionHeader>{aboutMe?.header[language]}</DescriptionHeader>
			<PortableTextContainer>
				<PortableText
					value={aboutMe?.description?.[language]}
					components={myPortableTextComponents}
				/>
			</PortableTextContainer>
			<ContactMeCallout />
			<SocialMediaLinks />
		</DescriptionContainer>
	);
};

export default Description;
