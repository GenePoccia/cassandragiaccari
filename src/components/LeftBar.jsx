import React from "react";
import styled from "styled-components";

import About from "./About";
import Services from "./Services";

const LeftBarContainer = styled.div`
	position: fixed;
	left: 2%;
	top: 50%;
	transform: translateY(-50%);
	z-index: 1000;
	background-color: transparent;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LeftBar = () => {
	return (
		<LeftBarContainer>
			<About />
			<Services />
		</LeftBarContainer>
	);
};

export default LeftBar;
