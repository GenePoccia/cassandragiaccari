import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
	position: sticky; /* Makes it stick at the top while scrolling */
	top: 0; /* Sticks to the very top of the viewport */
	z-index: 1000; /* Ensures it stays above other content */
	background-color: transparent; /* Ensures no background */
	display: flex; /* Enables flexbox for alignment */
	flex-direction: column; /* Stacks items vertically */
	height: 0;
`;

const HeaderTopText = styled.div`
	font-size: 30px;
	color: white; /* Text color */
	padding-top: 20px;
	text-align: center;
	font-family: "Helvetica Neue", Arial, sans-serif; /* Font style */
	margin-top: 25px; /* Adds spacing from the top */
`;

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderTopText>Cassandra Giaccari</HeaderTopText>
		</HeaderContainer>
	);
};

export default Header;
