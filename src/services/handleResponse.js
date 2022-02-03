export const handleResponse = (response) => {
	return response.text().then((text) => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401) {
				localStorage.removeItem("persist:root");
			}
		}
		return data;
	});
};
