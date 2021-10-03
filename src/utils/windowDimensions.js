import { useEffect, useState } from "react";

const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window;
	const isDesktopView = width >= 1200;
	return {
		width,
		height,
		isDesktopView,
	};
};

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}
