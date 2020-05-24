const loginReducer = (state, { type, payload }) => {
	console.log(state);
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
		default:
			return state;
	}
};

export default loginReducer;
