"use client";
import React, { useContext, useEffect, useState } from "react";
import { AboutContext } from "../contexts/AboutContext";

import styled from "styled-components";

import Background from "../components/BackgroundComponents/BackgroundImages";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoaderWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgb(15, 23, 42);
`;

const Loader = styled.span`
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

function LandingPage() {
	const { fetchAboutMeData } = useContext(AboutContext);
	const [loaded, setLoaded] = useState(false);

	console.log(process.env.NEXT_PUBLIC_VERCEL_ENV);
	useEffect(() => {
		fetchAboutMeData().then((resp) => setLoaded(resp));
	}, []);

	return !loaded ? (
		<LoaderWrapper>
			<Loader />
		</LoaderWrapper>
	) : (
		<>
			<Header />
			<Background />
			<Footer />
		</>
	);
}

export default LandingPage;
