import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../contexts/ModalContext";
import FullScreenModal from "./ModalComponents/FullScreenModal";

const HeaderContainer = styled.div`
	position: fixed;
	z-index: 100;
	width: 100%;
	top: 0;
	display: flex;
	flex-direction: row;
	gap: 30%;
	justify-content: center;
	align-items: center;

	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0.4) 0%,
		rgba(0, 0, 0, 0) 100%
	);

	height: 90px;
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
	const { handleOpen, setModalLanguage } = useContext(ModalContext);

	const handleClick = (language) => (e) => {
		e.preventDefault();
		handleOpen();
		setModalLanguage(language);
	};

	return (
		<>
			<FullScreenModal />
			<HeaderContainer>
				<HeaderTopText onClick={handleClick("en")}>about</HeaderTopText>
				<HeaderTopText>Cassandra Giaccari</HeaderTopText>
				<HeaderTopText onClick={handleClick("fr")}>à propos</HeaderTopText>
			</HeaderContainer>
		</>
	);
};

export default Header;
