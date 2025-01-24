import React, { useContext } from "react";
import styled from "styled-components";
import { AboutContext } from "../contexts/AboutContext";
import { ModalContext } from "../contexts/ModalContext";
import FullScreenModal from "./ModalComponents/FullScreenModal";

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

	@media (max-width: 700px) {
		font-size: 16px;
		gap: 15%;
	}

	height: 90px;
`;

const HeaderTopText = styled.div`
	color: white;
	padding-top: 20px;
	text-align: center;
	margin-top: 25px;
	white-space: nowrap;

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
			<FullScreenModal />
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
