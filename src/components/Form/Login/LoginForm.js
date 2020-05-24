import React, { useReducer } from 'react';
import { StyledInput } from '../../Styled';
import styled from 'styled-components';

import { loginReducer } from '../../../reducers';
import { logIn } from '../../../services/api';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin-bottom: 1em;
`;

const LoginForm = () => {
	const initialState = {
		email: '',
		password: '',
	};
	const [state, dispatch] = useReducer(loginReducer, initialState);

	const handleSubmit = (event) => {
		event.preventDefault();

		logIn({
			user: {
				...state,
			},
		})
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
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
				<label htmlFor="password">Name:</label>
				<StyledInput
					id="password"
					name="password"
					onChange={handleOnchange}
					placeholder="password"
					type="password"
					value={state.password}
				/>
			</StyledDiv>
			<button>Submit</button>
		</form>
	);
};

export default LoginForm;
