import React, { useContext } from "react";
import styled from "styled-components";

import { AboutContext } from "../../contexts/AboutContext";
import { ModalContext } from "../../contexts/ModalContext";

const ContactMeContainer = styled.div`
	@media (max-width: 1024px) {
		margin-right: 5%;
	}
`;

const ContactSpan = styled.span``;
const EmailLink = styled.a`
	color: inherit;
	text-decoration: underline;
`;

const renderCallout = (calloutObject) => {
	if (!calloutObject) return;

	const { text, textLink, href } = calloutObject;

	return (
		<ContactSpan>
			{text}{" "}
			<EmailLink
				href={`mailto:${href}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				{textLink}
			</EmailLink>
		</ContactSpan>
	);
};

const ContactMeCallout = () => {
	const { aboutMe } = useContext(AboutContext);
	const { language } = useContext(ModalContext);

	const calloutString = renderCallout(aboutMe?.contact?.[language]);
	return <ContactMeContainer>{calloutString}</ContactMeContainer>;
};

export default ContactMeCallout;
