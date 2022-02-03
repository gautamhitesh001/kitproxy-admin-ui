export const regEx = {
	whitelistedString: /\w*(-\w*)*(.html)*([/,.,*])*/g,
	// whitelistedString: /\w*(-\w*)*(.html)*/g
};

// const ext = ["html", "css", "jpg"];

export const getDataArray = (str) => {
	const arr = str.split("|");
	// .map((e) => e.match(regex.whitelistedString))
	// .map((e) => e[1]);

	return arr;
};

export const getDataString = (arr) => {
	const new_str = arr.join("|");
	return new_str;
};
