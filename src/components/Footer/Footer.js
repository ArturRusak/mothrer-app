import React from 'react';
import styled from 'styled-components';

import { CONDUIT } from '../../constants';

const StyledDiv = styled.div`
	padding: 1em 0;
	text-align: center;
`;

const Footer = () => (
	<foorter>
		<div className="content">
			<StyledDiv>{CONDUIT.toUpperCase()}</StyledDiv>
		</div>
	</foorter>
);
export default Footer;
