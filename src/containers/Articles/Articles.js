import React from 'react';

import Article from '../../components/Article';
import { Loading } from '../../components/shared/Loading';

import { useQuery } from '../../hooks';
import { getArticles } from '../../services/api';

const Articles = () => {
	const { data, error, isLoading } = useQuery(getArticles);
	const { articles } = data;

	const renderArticles = () => {
		return articles.map((article, index) => {
			const articleNumber = index + 1;
			return (
				<>
					<h1>Articles</h1>
					<Article
						key={`${index}-article`}
						article={article}
						number={articleNumber}
					/>
				</>
			);
		});
	};

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return <h2>Warning! Error!</h2>;
	}

	return articles && articles.length ? renderArticles() : null;
};

export default Articles;
