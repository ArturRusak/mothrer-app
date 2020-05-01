import React, { useState, useEffect } from 'react';
import { getArticles } from '../../services/api';

const Articles = () => {
	const [articlesList, setArticlesList] = useState([]);

	useEffect(() => {
		getArticles().then(({ data }) => setArticlesList(() => [...data.articles]));
	}, []);

	return (
		<section className="container">
			<h2>Articles</h2>
			{articlesList.map((article, index) => (
				<div key={`${index}-article`}>
					<h3>{article.title}</h3>
					<p>{article.body}</p>
					<span>{article.author.username}</span>
					<hr />
				</div>
			))}
		</section>
	);
};

export default Articles;
