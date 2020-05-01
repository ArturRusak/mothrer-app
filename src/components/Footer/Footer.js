import React from 'react';
import styled from 'styled-components';

import { CONDUIT } from '../../constants';

const StyledDiv = styled.div`
	padding: 1em 0;
	text-align: center;
`;

const Footer = () => (
	<footer>
		<div className="content">
			<StyledDiv>{CONDUIT.toUpperCase()}</StyledDiv>
		</div>
	</footer>
);
export default Footer;
