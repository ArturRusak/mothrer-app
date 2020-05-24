const registrationReducer = (state, { type, payload }) => {
	console.log(state);
	const { password, username, email } = payload;
	switch (type) {
		case 'email':
			return {
				...state,
				email: payload,
			};
		case 'password':
			return {
				...state,
				password: payload,
			};
		case 'userName':
			return {
				...state,
				userName: payload,
			};
		case 'errors':
			return {
				...state,
				emailErrors: email,
				userNameErrors: username,
				passwordErrors: password,
			};
		default:
			return state;
	}
};

export default registrationReducer;
