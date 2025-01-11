import React, { useState } from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "50%",
	bgcolor: "background.paper",
	border: "none",
	boxShadow: 24,
	p: 4,
};

const AboutText = styled.div`
	font-size: 30px;
	color: white;
	padding-top: 20px;
	text-align: center;
	font-family: "Helvetica Neue", Arial, sans-serif;

	&:hover {
		cursor: pointer;
	}
`;

const CloseButton = styled.button`
	background: none; 
	border: none; 
	color: black; 
	font-size: 16px; 
	cursor: pointer; 
	outline: none; 
	&:focus {
		outline: none; 

	&:hover {
		color: red; 
	}
`;

const About = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<AboutText onClick={handleOpen}>About</AboutText>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
						<CloseButton onClick={handleClose}>x</CloseButton>
					</Box>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
					>
						<strong>
							<u>About</u>
						</strong>
					</Typography>
					<Typography
						id="modal-modal-description"
						sx={{ mt: 2 }}
						component="div"
					>
						<p>
							<strong>Cassandra Giaccari (She/Her)</strong> is a Montreal-based
							interdisciplinary designer whose expertise in graphic design,
							branding, web design, product design, and user experience have
							driven her passion for creating meaningful work across diverse
							industries.
						</p>
						<p>
							Cassandra helps her clients set themselves apart through creative
							solutions and interactive experiences that blend both strategic
							thinking and innovative storytelling.
						</p>
						<p>
							For any inquiries and to request a portfolio, feel free to get in
							touch via email.
						</p>
					</Typography>
				</Box>
			</Modal>
		</>
	);
};

export default About;
