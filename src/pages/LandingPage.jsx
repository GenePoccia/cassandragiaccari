import React from "react";

import Background from "../components/BackgroundImages";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import Footer from "../components/Footer";
import SocialMedia from "../components/SocialMediaBar";

function LandingPage() {
	return (
		<>
			<Header />
			<LeftBar />
			<SocialMedia />
			<Background />
			<Footer />
		</>
	);
}

export default LandingPage;
