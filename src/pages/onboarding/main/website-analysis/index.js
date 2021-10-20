import { useState } from "react";
import { EnterUrlSection } from "./enterUrl";
import { AnalysisSection } from "./analysis";

const createData = (vital, stat, setting, isError) => {
	return { vital, stat, setting, isError };
};

const rows = [
	createData("Page load time", ">4.5 Sec", "<3 Sec", true),
	createData("Bounce rate", "~45.64%", "<30%", true),
	createData("CDN Caching", "No", "Required", true),
	createData("Browser Caching", "Yes", "Required", false),
	createData("HTTP/2 Enabled", "No", "Required", true),
	createData("DDoS Attack Protection", "Yes", "Required", false),
];

export const WebsiteAnalysis = () => {
	const [isWebsiteEntered, setIsWebsiteEntered] = useState(false);

	return isWebsiteEntered ? <AnalysisSection rows={rows} /> : <EnterUrlSection handleFormSubmit={() => setIsWebsiteEntered(true)} />;
};
