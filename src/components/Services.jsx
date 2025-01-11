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
	maxWidth: "250px",
	bgcolor: "background.paper",
	border: "none",
	boxShadow: 24,
	p: 4,
};

const ServicesText = styled.div`
	font-size: 30px;
	color: white; /* Text color */
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

const Services = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<ServicesText onClick={handleOpen}>Services</ServicesText>
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
							<u>Services</u>
						</strong>
					</Typography>
					<Typography
						id="modal-modal-description"
						sx={{ mt: 2 }}
					>
						<span>Creative Direction</span>
						<br />
						<span>Digital Strategy</span>
						<br />
						<span>Branding and Visual Identity</span>
						<br />
						<span>Art Direction</span>
						<br />
						<span>Graphic Design</span>
						<br />
						<span>Web Design</span>
						<br />
						<span>App Design</span>
						<br />
						<span>Email Design</span>
						<br />
						<span>Promotional Design</span>
						<br />
						<span>Product Design</span>
						<br />
						<span>User Experience (UX) Design</span>
						<br />
						<span>User Interface (UI) Design</span>
						<br />
						<span>Information Architecture (IA)</span>
						<br />
						<span>Omni-Channel Experience</span>
						<br />
						<span>A/B Testing</span>
						<br />
						<span>User Testing</span>
						<br />
					</Typography>
				</Box>
			</Modal>
		</>
	);
};

export default Services;
