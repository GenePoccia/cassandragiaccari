import React from "react";
import styled from "styled-components";

import { ReactComponent as InstagramIcon } from "../assets/images/socialMediaImages/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../assets/images/socialMediaImages/linkedin.svg";
import { instagramLink, linkedinLink } from "../assets/constants";

const SocialMediaContainer = styled.div`
	position: sticky;
	top: 85%;
	z-index: 1000;
	background-color: transparent;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 20px;
	height: 0;
`;

const SocialMediaLink = styled.a`
	display: inline-block;
	cursor: pointer;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.1);
	}
`;

const SocialMedia = () => {
	return (
		<SocialMediaContainer>
			<SocialMediaLink
				href={instagramLink}
				target="_blank"
				rel="noopener noreferrer"
			>
				<InstagramIcon />
			</SocialMediaLink>
			<SocialMediaLink
				href={linkedinLink}
				target="_blank"
				rel="noopener noreferrer"
			>
				<LinkedInIcon />
			</SocialMediaLink>
		</SocialMediaContainer>
	);
};

export default SocialMedia;
