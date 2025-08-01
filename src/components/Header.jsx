import React, { useContext } from "react";
import styled from "styled-components";
import { AboutContext } from "../contexts/AboutContext";
import { ModalContext } from "../contexts/ModalContext";
import DesktopModal from "./ModalComponents/DesktopModal/DesktopModal";

const HeaderContainer = styled.div`
	position: fixed;
	z-index: 100;
	width: 100%;
	top: 0;
	display: flex;
	flex-direction: row;
	gap: 20%;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;

	@media (max-width: 700px) {
		width: 85%;
		gap: 0;
		font-size: 16px;
		padding: 0 8%;
	}
`;

const HeaderTopText = styled.div`
	color: white;
	padding-top: 40px;
	text-align: center;
	white-space: nowrap;

	@media (max-width: 450px) {
		padding-top: 20px;
	}

	${({ indentLeft }) => (indentLeft ? "margin-left: 5%;" : "")}
	${({ indentRight }) => (indentRight ? "margin-right: 5%;" : "")}

	font-weight: ${({ bold }) => (bold ? "bold" : "normal")};

	@media (max-width: 700px) {
		${({ indentLeft }) => (indentLeft ? "margin-left: 2%;" : "")}
		${({ indentRight }) => (indentRight ? "margin-right: 2%;" : "")}
	}

	&:hover {
		${({ hoverable }) => (hoverable ? "cursor: pointer;" : "")}
	}
`;

const Header = () => {
	const { handleOpen, language, setModalLanguage } = useContext(ModalContext);
	const { headerData } = useContext(AboutContext);

	const handleClick = (language) => (e) => {
		e.preventDefault();
		handleOpen();
		setModalLanguage(language);
	};

	return (
		<>
			<DesktopModal />
			<HeaderContainer>
				<HeaderTopText
					indentLeft={true}
					hoverable={true}
					onClick={handleClick("en")}
				>
					{headerData?.about?.en}
				</HeaderTopText>
				<HeaderTopText bold={true}>
					{headerData?.name?.[language]}
				</HeaderTopText>
				<HeaderTopText
					indentRight={true}
					hoverable={true}
					onClick={handleClick("fr")}
				>
					{headerData?.about?.fr}
				</HeaderTopText>
			</HeaderContainer>
		</>
	);
};

export default Header;
