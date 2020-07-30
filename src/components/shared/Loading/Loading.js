import React from 'react';
import styled from 'styled-components';
import { StyledSpinner } from '../../Styled';

const StyledLoading = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 3em 0;
`;

export default function Loading() {
	return (
		<StyledLoading>
			<StyledSpinner />
			<div>
				<h3>Loading...</h3>
			</div>
		</StyledLoading>
	);
}
