import React, { useReducer } from 'react';
import { StyledInput } from '../../Styled';
import styled from 'styled-components';

import { registrationReducer } from '../../../reducers';
import { signUp } from '../../../services/api';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin-bottom: 1em;
`;

const initialState = {
	email: '',
	emailErrors: [],
	password: '',
	passwordErrors: [],
	userName: '',
	userNameErrors: [],
};

const RegistrationForm = () => {
	const [state, dispatch] = useReducer(registrationReducer, initialState);

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

				dispatch({ type: 'errors', payload: errors });
			});
	};

	const handleOnchange = (event) => {
		const { value, name } = event.target;
		dispatch({ type: name, payload: value });
	};

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
				{state.userNameErrors.length > 0 &&
					state.userNameErrors.map((item, index) => (
						<span key={`${index}-error`}>{item}</span>
					))}
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
				{state.emailErrors.length > 0 &&
					state.emailErrors.map((item, index) => (
						<span key={`${index}-error`}>{item}</span>
					))}
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
				{state.passwordErrors.length > 0 &&
					state.passwordErrors.map((item, index) => (
						<span key={`${index}-error`}>{item}</span>
					))}
			</StyledDiv>
			<button>Sign up</button>
		</form>
	);
};

export default RegistrationForm;
