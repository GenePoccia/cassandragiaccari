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

	@media (max-width: 700px) {
		padding-bottom: ${(props) => (props.$isLastImage ? "100px" : "0")};
	}
`;

const PageSection = ({ url, isLastImage }) => {
	return (
		<EmptySectionWithBackgroundImage $isLastImage={isLastImage}>
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
						isLastImage={index === backgroundImages.length - 1}
					/>
				);
			})}
		</BackgroundContainer>
	);
};

export default Background;
