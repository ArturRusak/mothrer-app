import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import avatar from '../../assets/images/icons/avatar.svg';
import { ARTICLE } from '../../constants';

const StyledTag = styled.a`
	padding: 0 0.5em;
	margin-right: 0.5em;
	border-radius: 1.5em;
	border: 1px solid ${({ theme }) => theme.color.secondary};
`;

const StyledTagContainer = styled.div`
	text-align: right;

	${StyledTag}:last-child {
		margin-right: 0;
	}
`;

const StyledAvatar = styled.span`
	& img {
		width: 30px;
		margin-left: 1em;
	}
`;

const StyledTitle = styled.h2`
	color: ${({ theme }) => theme.color.secondary};
`;

const StlyedAuthorContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	justify-content: flex-start;
`;

export default function Article({ article, index }) {
	return (
		<div key={`${index}-article`}>
			<StyledTitle>{article.title}</StyledTitle>
			<p>{article.body}</p>
			{article.tagList.length > 0 && (
				<StyledTagContainer>
					{article.tagList.map((tag, index) => (
						<StyledTag key={`${index}-tag`}>{tag}</StyledTag>
					))}
				</StyledTagContainer>
			)}
			<StlyedAuthorContainer>
				<StyledAvatar>
					<img src={avatar} alt="Avatar SVG Vector" title="Avatar SVG Vector" />
				</StyledAvatar>
				<p>
					<b>{`${ARTICLE.AUTHOR}: `}</b>
					<a href="#">{`${article.author.username}`}</a>
				</p>
				{article.author.bio && <p>{article.author.bio.length}</p>}
			</StlyedAuthorContainer>
			<hr />
		</div>
	);
}

Article.propTypes = {
	article: PropTypes.object,
	index: PropTypes.number,
};
