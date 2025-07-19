import React, { useContext } from "react";
import styled from "styled-components";
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

const NameSpan = styled.span`
	font-weight: 600;
`;

const MobileHeader = () => {
	const { handleOpen, language, setModalLanguage } = useContext(ModalContext);

	const handleClick = (language) => (e) => {
		e.preventDefault();
		handleOpen();
		setModalLanguage(language);
	};

	return (
		<>
			<MobileModal />
			<HeaderContainer>
				<NameSpan>CG</NameSpan>
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
