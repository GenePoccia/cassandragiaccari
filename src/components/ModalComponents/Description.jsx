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
`;
const DescriptionHeader = styled.div`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 10%;
`;

const PortableTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

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
