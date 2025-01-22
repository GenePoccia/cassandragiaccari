import styled from "styled-components";

const EmptySectionWithBackgroundImage = styled.div`
	width: 100%;
	min-height: 500px;
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: ${(props) => `url(${props.url})`};
`;

const BackgroundContainer = styled.div`
	position: relative;
	margin-top: -60px;
	padding-top: 60px;
`;

const PageSection = ({ url }) => {
	return (
		<BackgroundContainer>
			<EmptySectionWithBackgroundImage url={url} />;
		</BackgroundContainer>
	);
};

export default PageSection;
