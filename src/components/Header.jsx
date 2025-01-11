import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
	position: sticky;
	top: 0;
	z-index: 1000;
	background-color: transparent;
	display: flex;
	flex-direction: column;
	height: 0;
`;

const HeaderTopText = styled.div`
	font-size: 30px;
	color: white;
	padding-top: 20px;
	text-align: center;
	font-family: "Helvetica Neue", Arial, sans-serif;
	margin-top: 25px;
`;

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderTopText>Cassandra Giaccari</HeaderTopText>
		</HeaderContainer>
	);
};

export default Header;
