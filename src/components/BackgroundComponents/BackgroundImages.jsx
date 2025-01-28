import React, { useContext } from "react";
import styled from "styled-components";
import { AboutContext } from "../../contexts/AboutContext";

import { urlFor } from "../../sanity/client";

const BackgroundContainer = styled.div``;

const EmptySectionWithBackgroundImage = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	img {
		width: 100%;
		height: auto;
	}
`;

const PageSection = ({ url }) => {
	return (
		<EmptySectionWithBackgroundImage>
			<img
				src={url}
				alt="Background"
			/>
		</EmptySectionWithBackgroundImage>
	);
};

const Background = () => {
	const { backgroundImages } = useContext(AboutContext);

	return (
		<BackgroundContainer>
			{backgroundImages.map((image, index) => {
				return (
					<PageSection
						key={index}
						url={urlFor(image?.image?.asset).url()}
						caption={image?.caption}
					/>
				);
			})}
		</BackgroundContainer>
	);
};

export default Background;
