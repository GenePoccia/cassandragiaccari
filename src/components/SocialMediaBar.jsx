import React from "react";
import styled from "styled-components";

import { ReactComponent as InstagramIcon } from "../assets/images/socialMediaImages/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../assets/images/socialMediaImages/linkedin.svg";
import { instagramLink, linkedinLink } from "../assets/constants";

const SocialMediaContainer = styled.div`
	position: sticky; /* Makes it stick at the top while scrolling */
	top: 85%; /* Sticks to the very top of the viewport */
	z-index: 1000; /* Ensures it stays above other content */
	background-color: transparent; /* Ensures no background */
	display: flex; /* Enables flexbox for alignment */
	flex-direction: row; /* Aligns items horizontally */
	justify-content: center;
	gap: 20px; /* Adds space between the icons */
	height: 0;
`;

const SocialMediaLink = styled.a`
	display: inline-block; /* Makes the icon act as a clickable block */
	cursor: pointer; /* Changes the cursor to indicate it's clickable */
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.1); /* Slightly enlarges the icon on hover */
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
