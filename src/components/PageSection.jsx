import styled from "styled-components";

const EmptySectionWithBackgroundImage = styled.div`
	width: 100%; /* Full width */
	min-height: 500px;
	height: 100vh; /* Full viewport height */
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-image: ${(props) => `url(${props.url})`};
`;

const PageSection = ({ url }) => {
	return <EmptySectionWithBackgroundImage url={url} />;
};

export default PageSection;
