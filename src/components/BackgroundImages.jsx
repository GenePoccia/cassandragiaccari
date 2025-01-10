import PageSection from "./PageSection";
import styled from "styled-components";

import image1 from "../assets/images/backgroundImages/tote.png";
import image2 from "../assets/images/backgroundImages/dynamite_app.png";
import image3 from "../assets/images/backgroundImages/dynamite_laptop.png";
import image4 from "../assets/images/backgroundImages/dynamite_phones.png";
import image5 from "../assets/images/backgroundImages/lucia.png";

const images = [image1, image2, image3, image4, image5];

const BackgroundContainer = styled.div``;

const Background = () => {
	return (
		<BackgroundContainer>
			{images.map((url, index) => (
				<PageSection
					key={index}
					url={url}
				/>
			))}
		</BackgroundContainer>
	);
};

export default Background;
