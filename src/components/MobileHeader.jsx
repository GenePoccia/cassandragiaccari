import React, { useContext } from "react";
import styled from "styled-components";
import { AboutContext } from "../contexts/AboutContext";
import { ModalContext } from "../contexts/ModalContext";
import HamburgerSVG from "../assets/hamburger_menu.svg";
import MobileModal from "./ModalComponents/MobileModal/MobileModal";

const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	z-index: 100;

	width: 100%;
	padding: 24px 24px 0px 24px;
	box-sizing: border-box;

	font-size: 20px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 20%;
`;

const HamburgerMenuContainer = styled.button`
	all: unset;
	cursor: pointer;
`;

const MobileHeader = () => {
	const { handleOpen, language, setModalLanguage } = useContext(ModalContext);
	const { headerData } = useContext(AboutContext);

	const handleClick = (language) => (e) => {
		e.preventDefault();
		handleOpen();
		setModalLanguage(language);
	};

	return (
		<>
			<MobileModal />
			<HeaderContainer>
				<span>CG</span>
				<HamburgerMenuContainer onClick={handleClick(language)}>
					<img
						src={HamburgerSVG}
						alt="Hamburger Menu"
					/>
				</HamburgerMenuContainer>
			</HeaderContainer>
		</>
	);
};

export default MobileHeader;
