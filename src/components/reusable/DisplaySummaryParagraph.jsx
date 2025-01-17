export const myPortableTextComponents = {
	types: {
		image: ({ value }) => <img src={value.imageUrl} />,
		callToAction: ({ value, isInline }) =>
			isInline ? (
				<a href={value.url}>{value.text}</a>
			) : (
				<div className="callToAction">{value.text}</div>
			),
		block: ({ value }) => (
			<p
				className="custom-paragraph"
				style={{
					margin: "0",
					whiteSpace: "normal", // Allow text to wrap responsively
					wordWrap: "break-word", // Break long words to fit container
					overflowWrap: "break-word",
				}}
			>
				{value.children.map((child, index) => {
					if (child._type === "span") {
						// Clean up line breaks and extra spaces
						const cleanText = child.text
							.replace(/\n/g, " ") // Replace line breaks with spaces
							.replace(/\s+/g, " ") // Collapse extra spaces
							.trim();

						return (
							<span
								key={index}
								style={{
									fontWeight: child.marks?.includes("strong")
										? "bold"
										: "normal",
								}}
							>
								{cleanText}
							</span>
						);
					}
					return null; // Return null for unsupported child types
				})}
			</p>
		),
	},

	marks: {
		link: ({ children, value }) => {
			const rel = !value.href.startsWith("/")
				? "noreferrer noopener"
				: undefined;
			return (
				<a
					href={value.href}
					rel={rel}
				>
					{children}
				</a>
			);
		},
	},
};
