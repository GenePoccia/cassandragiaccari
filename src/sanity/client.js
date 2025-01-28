import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const getDataset = () => {
	if (process.env.VERCEL_ENV === "production") {
		return "production"; // Use production dataset
	}
	if (
		process.env.VERCEL_ENV === "preview" &&
		process.env.VERCEL_GIT_COMMIT_REF === "staging"
	) {
		return "staging"; // Use staging dataset
	}
	return "production"; // Default fallback
};

// Create the Sanity client with dynamic dataset
const client = createClient({
	projectId: process.env.PROJECT_ID || "9fwjdsz6",
	dataset: getDataset(),
	apiVersion: "2024-01-01",
	useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client;
