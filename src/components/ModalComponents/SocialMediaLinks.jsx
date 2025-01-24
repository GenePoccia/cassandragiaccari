import React, { useContext } from "react";
import styled from "styled-components";

import { AboutContext } from "../../contexts/AboutContext";
import { ModalContext } from "../../contexts/ModalContext";

const SocialMediaContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding-top: 4%;
	font-size: 14px;
`;

const SocialMediaLinkContainer = styled.div`
	padding-right: 2%;
`;

const SocialMediaLink = styled.a`
	color: inherit;
	text-decoration: underline;
	padding-right: 2%;
`;

const PipeContainer = styled.span`
	padding-left: 5%;
`;

const renderSocialMedia = (socialMedia, isLast) => {
	return (
		<SocialMediaLinkContainer key={socialMedia?.name}>
			<SocialMediaLink
				href={socialMedia?.url}
				target="_blank"
				rel="noopener noreferrer"
			>
				{socialMedia?.name}
			</SocialMediaLink>
			{!isLast && <PipeContainer>|</PipeContainer>}
		</SocialMediaLinkContainer>
	);
};

const SocialMediaLinks = () => {
	const { aboutMe } = useContext(AboutContext);
	const { language } = useContext(ModalContext);

	const socialMediaLinks = aboutMe?.socialMediaLinks?.[language] || [];

	return (
		<SocialMediaContainer>
			{socialMediaLinks.map((ele, index) =>
				renderSocialMedia(ele, index === socialMediaLinks.length - 1)
			)}
		</SocialMediaContainer>
	);
};

export default SocialMediaLinks;
