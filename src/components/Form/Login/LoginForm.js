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

const StyledLoginForm = styled.form`
	max-width: 500px;
	margin: 0 auto;
	padding: 2em 0;
`;

const StyledCenterDiv = styled.div`
	text-align: center;
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
		<StyledLoginForm onSubmit={handleSubmit}>
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
			<StyledCenterDiv>
				<button>Submit</button>
			</StyledCenterDiv>
		</StyledLoginForm>
	);
};

export default LoginForm;
