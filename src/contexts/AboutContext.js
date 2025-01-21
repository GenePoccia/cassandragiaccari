"use client";
import React, { createContext, useState } from "react";
import client from "../sanity/client";
import {
	ABOUT_QUERY,
	SERVICES_QUERY,
	EXPERIENCE_QUERY,
	BACKGROUND_IMAGES_QUERY,
	FOOTER_QUERY,
	HEADER_QUERY,
} from "../lib/queries";
import QUERY_OPTIONS from "../lib/queryOptions";

export const AboutContext = createContext();

export const AboutContextProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState([]);
	const [services, setServices] = useState([]);
	const [experience, setExperience] = useState([]);
	const [backgroundImages, setBackgroundImages] = useState([]);
	const [footerData, setFooterData] = useState([]);
	const [headerData, setHeaderData] = useState([]);

	const fetchAboutMeData = async () => {
		const aboutMeResult = await client.fetch(ABOUT_QUERY, {}, QUERY_OPTIONS);
		const servicesResult = await client.fetch(
			SERVICES_QUERY,
			{},
			QUERY_OPTIONS
		);
		const experienceResult = await client.fetch(
			EXPERIENCE_QUERY,
			{},
			QUERY_OPTIONS
		);
		const backgroundImagesResult = await client.fetch(
			BACKGROUND_IMAGES_QUERY,
			{},
			QUERY_OPTIONS
		);
		const footerResults = await client.fetch(FOOTER_QUERY, {}, QUERY_OPTIONS);
		const headerResults = await client.fetch(HEADER_QUERY, {}, QUERY_OPTIONS);

		setAboutMe(aboutMeResult[0]);
		setServices(servicesResult[0]);
		setExperience(experienceResult[0]);
		setBackgroundImages(backgroundImagesResult[0].images);
		setFooterData(footerResults[0]);
		setHeaderData(headerResults[0]);
		return true;
	};

	const value = {
		aboutMe,
		services,
		experience,
		backgroundImages,
		footerData,
		headerData,
		fetchAboutMeData,
	};

	return (
		<AboutContext.Provider value={value}>{children}</AboutContext.Provider>
	);
};
