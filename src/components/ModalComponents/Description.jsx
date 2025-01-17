import React, { useContext } from "react";
import styled from "styled-components";
import { PortableText } from "@portabletext/react";
import { AboutContext } from "../../contexts/AboutContext";
import { ModalContext } from "../../contexts/ModalContext";
import { myPortableTextComponents } from "../reusable/DisplaySummaryParagraph";

const DescriptionContainer = styled.div``;
const DescriptionHeader = styled.div``;

const PortableTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	max-width: 45%;

	@media (max-width: 1260px) {
		max-width: none;
	}
`;

const Description = () => {
	const { aboutMe } = useContext(AboutContext);
	const { language } = useContext(ModalContext);

	console.log(aboutMe);
	return (
		<DescriptionContainer>
			<DescriptionHeader>{aboutMe?.header[language]}</DescriptionHeader>
			<PortableTextContainer>
				<PortableText
					value={aboutMe?.description?.[language]}
					components={myPortableTextComponents}
				/>
			</PortableTextContainer>
		</DescriptionContainer>
	);
};

export default Description;
