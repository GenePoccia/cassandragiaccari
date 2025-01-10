import React from "react";
import styled from "styled-components";

const LeftBarContainer = styled.div`
	position: fixed; /* Fixes the position relative to the viewport */
	left: 2%; /* Aligns to the left side of the screen */
	top: 50%; /* Vertically centers the container */
	transform: translateY(-50%); /* Adjusts the element to be exactly centered */
	z-index: 1000; /* Ensures it stays above other content */
	background-color: transparent; /* No background */
	display: flex; /* Enables flexbox for alignment */
	flex-direction: column; /* Stacks items vertically */
	align-items: center; /* Centers text horizontally */
`;

const LeftBarText = styled.div`
	font-size: 30px;
	color: white; /* Text color */
	padding-top: 20px;
	text-align: center;
	font-family: "Helvetica Neue", Arial, sans-serif; /* Font style */
`;

const LeftBar = () => {
	return (
		<LeftBarContainer>
			<LeftBarText>About</LeftBarText>
		</LeftBarContainer>
	);
};

export default LeftBar;
