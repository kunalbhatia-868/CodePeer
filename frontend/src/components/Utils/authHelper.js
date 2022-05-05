export const signIn = (user) => {
	return fetch(`user/token/obtain/`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((response) => response.json())
		.catch((error) => {
			console.log(error);
		});
};

export const authenticate = (data, next) => {
	if (typeof window !== "undefined") {
		localStorage.setItem("jwt", JSON.stringify(data));
		console.log(" Welcome ,You have been Logged In ! ");
		next();
	}
};

export const signOut = () => {
	if (typeof window !== "undefined") {
		localStorage.removeItem("jwt");
	}
};

export const isAuthenticated = () => {
	if (typeof window == "undefined") {
		return false;
	}
	if (localStorage.getItem("jwt")) {
		return JSON.parse(localStorage.getItem("jwt"));
	} else {
		return false;
	}
};
