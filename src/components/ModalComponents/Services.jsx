import React, { useContext } from "react";
import styled from "styled-components";

import { AboutContext } from "../../contexts/AboutContext";
import { ModalContext } from "../../contexts/ModalContext";

const ServicesContainer = styled.div`
	min-width: 20%;
	max-width: 25%;

	@media (max-width: 1024px) {
		max-width: none;
	}
`;
const ServicesHeader = styled.div`
	font-weight: 600;
	margin-bottom: 10%;
	font-size: 20px;

	@media (max-width: 1024px) {
		margin-top: 5%;
		margin-bottom: 5%;
	}
`;
const IndividualSericeContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 14px;
`;
const Service = styled.span`
	padding-bottom: 3%;
`;

const Services = () => {
	const { services } = useContext(AboutContext);
	const { language } = useContext(ModalContext);

	const servicesList = services?.services[language];

	return (
		<ServicesContainer>
			<ServicesHeader>{services?.header[language]}</ServicesHeader>
			<IndividualSericeContainer>
				{servicesList?.map((ele, index) => (
					<Service key={`service_${index}`}>{ele}</Service>
				))}
			</IndividualSericeContainer>
		</ServicesContainer>
	);
};

export default Services;
