import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { THEME } from '../constants';

const commonStyles = {
	contentWidth: '1140px',
	color: {
		wrong: 'red',
		success: '#60be6e',
	},
};

const lightTheme = {
	...commonStyles,
	body: '#E2E2E2',
	text: '#363537',
	color: {
		...commonStyles.color,
		primary: '#7e45f2',
		secondary: '#603493',
	},
	toggleBorder: '#FFF',
	gradient: 'linear-gradient(#39598A, #79D7ED)',
};

const darkTheme = {
	...commonStyles,
	body: '#363537',
	text: '#FAFAFA',
	color: {
		...commonStyles.color,
		primary: '#8c8c8c',
		secondary: '#c9bbd7',
	},
	toggleBorder: '#6B8096',
	gradient: 'linear-gradient(#091236, #1E215D)',
};

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  
  a {
  	color: ${({ theme }) => theme.color.secondary};
  }
  
  #root {
  	width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  	font-size: 1rem;
  }
  
  header, footer, .main {
  	flex-shrink: 0;
  }
  
  .main {
  	flex: 1;
  }
  
  .container {
		width: 100%;
		max-width: 1140px;
		margin: 0 auto;
  }
  
	button {
		padding: 0.25rem 0.35rem;
  	color: ${({ theme }) => theme.color.text};
  	background-color: #ffffff;
  	border-radius: 0.2rem;
  	border: 0.1rem ${({ theme }) => theme.color.primary} solid;
  }
  `;

const StyledButton = styled.button`
	z-index: 9;
	top: 1rem;
	right: 1rem;
	position: absolute;
`;

const Theme = ({ children }) => {
	const [theme, setTheme] = useState(THEME.DARK);

	const toggleTheme = () => {
		setTheme((currentTheme) =>
			currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
		);
	};

	return (
		<ThemeProvider theme={theme === THEME.LIGHT ? darkTheme : lightTheme}>
			<GlobalStyles />
			<StyledButton type="button" onClick={toggleTheme}>
				{theme === THEME.LIGHT
					? THEME.TOGGLE_BUTTON_LIGHT
					: THEME.TOGGLE_BUTTON_DARK}
			</StyledButton>
			{children}
		</ThemeProvider>
	);
};

Theme.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Theme;
