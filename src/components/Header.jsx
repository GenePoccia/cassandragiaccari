import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
	position: sticky;
	top: 0; /* Stick to the top */
	background-color: #333; /* Background color */
	color: white; /* Text color */
	padding: 20px;
	text-align: center;
	z-index: 1000; /* Make sure it's above other content */
`;

const Header = () => {
	return <HeaderContainer />;
};

export default Header;
