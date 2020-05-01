import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { NAVIGATION } from '../../constants';

const StyledUl = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const StyledLi = styled.li`
	list-style: none;
`;

const Navigation = () => (
	<nav>
		<StyledUl>
			{NAVIGATION.ITEMS.PUBLIC.map((item, index) => (
				<StyledLi key={`nav-item-${index}`}>
					<Link to={item.url}>{item.title}</Link>
				</StyledLi>
			))}
		</StyledUl>
	</nav>
);

export default Navigation;
