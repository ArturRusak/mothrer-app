import React, { useReducer } from 'react';
import { StyledInput } from '../../Styled';
import styled from 'styled-components';

import { signUp } from '../../../services/api';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin-bottom: 1em;
`;

// TODO: move to reducers
const reducer = (state, { type, payload }) => {
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
		case 'userName':
			return {
				...state,
				userName: payload,
			};
		default:
			return state;
	}
};

const RegistrationForm = () => {
	const initialState = {
		email: '',
		emailError: [],
		password: '',
		passwordError: [],
		userName: '',
		userNameError: [],
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleSubmit = (event) => {
		event.preventDefault();

		signUp({
			user: {
				...state,
			},
		})
			.then((res) => {
				console.log(res);
			})
			.catch(({ response }) => {
				const { errors } = response.data;

				const objKeys = Object.keys(errors);

				objKeys.map((key) => {
					if (errors[key].length) {
						// TODO: add Error handling
					}
				});
			});
	};

	const handleOnchange = (event) => {
		const { value, name } = event.target;
		dispatch({ type: name, payload: value });
	};

	console.log(state, 'STATE');

	return (
		<form onSubmit={handleSubmit}>
			<StyledDiv>
				<label htmlFor="user-name">User Name:</label>
				<StyledInput
					id="user-name"
					name="userName"
					onChange={handleOnchange}
					placeholder="User name"
					type="text"
					value={state.userName}
				/>
			</StyledDiv>
			<StyledDiv>
				<label htmlFor="email">Email:</label>
				<StyledInput
					id="email"
					name="email"
					onChange={handleOnchange}
					placeholder="Email"
					type="text"
					value={state.email}
				/>
			</StyledDiv>
			<StyledDiv>
				<label htmlFor="password">Password:</label>
				<StyledInput
					id="password"
					name="password"
					onChange={handleOnchange}
					placeholder="password"
					type="password"
					value={state.password}
				/>
			</StyledDiv>
			<button>Sign up</button>
		</form>
	);
};

export default RegistrationForm;
