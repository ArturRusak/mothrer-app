import React from 'react';
import styled from 'styled-components';

import { CONDUIT, SLOGAN } from '../../constants';

const StyledBanner = styled.section`
	padding: 2em;
	background: ${({ theme }) => theme.color.primary};
`;

const SyledBannerTitle = styled.h2`
	margin-bottom: 0.5em;
	font-size: 2.35em;
	font-weight: bold;
	text-align: center;
`;

const StyledSlogan = styled.p`
	font-size: 1.2em;
	text-align: center;
`;

const Banner = () => (
	<StyledBanner>
    <div className="container">
      <SyledBannerTitle>{CONDUIT.toUpperCase()}</SyledBannerTitle>
      <StyledSlogan>{SLOGAN}</StyledSlogan>
    </div>
	</StyledBanner>
);

export default Banner;
