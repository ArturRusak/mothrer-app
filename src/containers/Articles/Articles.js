import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getArticles } from '../../services/api';

import avatar from '../../assets/images/icons/avatar.svg';
import { ARTICLE } from '../../constants';

const StyledAvatar = styled.span`
	& img {
		max-width: 30px;
	}
`;

const StyledTitle = styled.h2`
	color: ${({ theme }) => theme.color.secondary};
`;

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

const Articles = () => {
	const [articlesList, setArticlesList] = useState([]);

	useEffect(() => {
		getArticles().then(({ data }) => setArticlesList(() => [...data.articles]));
	}, []);

	return (
		<section className="container">
			<h1>Articles</h1>
			{articlesList.map((article, index) => (
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
					<div>
						<p>
							<StyledAvatar>
								<img
									src={avatar}
									alt="Avatar SVG Vector"
									title="Avatar SVG Vector"
								/>
							</StyledAvatar>
							<b>{`${ARTICLE.AUTHOR}: `}</b>
							<a href="#">{`${article.author.username}`}</a>
						</p>
						{article.author.bio && <p>{article.author.bio.length}</p>}
					</div>
					<hr />
				</div>
			))}
		</section>
	);
};

export default Articles;
