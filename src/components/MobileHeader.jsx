import React, { useContext } from "react";
import styled from "styled-components";
import { AboutContext } from "../contexts/AboutContext";
import { ModalContext } from "../contexts/ModalContext";
import FullScreenModal from "./ModalComponents/FullScreenModal";

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
			<FullScreenModal />
			<HeaderContainer>
				<div>CG</div>
				<div>HM</div>
			</HeaderContainer>
		</>
	);
};

export default MobileHeader;
