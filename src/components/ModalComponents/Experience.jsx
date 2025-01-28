import React, { useContext } from "react";
import styled from "styled-components";

import { AboutContext } from "../../contexts/AboutContext";
import { ModalContext } from "../../contexts/ModalContext";

const ExperiencesContainer = styled.div`
	min-width: 20%;
	max-width: 25%;
	line-height: 19.6px;

	@media (max-width: 1024px) {
		max-width: none;
	}
`;
const ExperiencesHeader = styled.div`
	font-weight: 600;
	margin-bottom: 10%;

	@media (max-width: 1024px) {
		margin-bottom: 5%;
	}
`;
const IndividualExperienceContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 14px;
`;
const ExperienceSummary = styled.div`
	padding-bottom: 3%;
`;
const CompanyName = styled.span``;
const Role = styled.span``;

const renderRoles = (roles) => {
	return (
		<Role>
			{roles?.map((role) => {
				return <div>{role}</div>;
			})}
		</Role>
	);
};
const renderExperience = ({ ele, index }) => {
	return (
		<ExperienceSummary key={`ExperienceSummary_${index}`}>
			<CompanyName>{ele?.company}</CompanyName>
			{renderRoles(ele?.roles)}
		</ExperienceSummary>
	);
};

const Experience = () => {
	const { experience } = useContext(AboutContext);
	const { language } = useContext(ModalContext);

	const experiencesList = experience?.experience[language];

	return (
		<ExperiencesContainer>
			<ExperiencesHeader>{experience?.header[language]}</ExperiencesHeader>
			<IndividualExperienceContainer>
				{experiencesList?.map((ele, index) => renderExperience({ ele, index }))}
			</IndividualExperienceContainer>
		</ExperiencesContainer>
	);
};

export default Experience;
