import React, { useContext } from "react";
import styled from "styled-components";
import { AboutContext } from "../../contexts/AboutContext";

import { urlFor } from "../../sanity/client";

const BackgroundContainer = styled.div``;

const EmptySectionWithBackgroundImage = styled.div`
	width: 100%;
	min-height: 500px;
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: ${(props) => `url(${props.url})`};
`;

const PageSection = ({ url }) => {
	return <EmptySectionWithBackgroundImage url={url} />;
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
