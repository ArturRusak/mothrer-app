import { useState, useEffect } from 'react';

const useQuery = (queryCallback) => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		queryCallback()
			.then(({ data }) => {
				setData(data);
			})
			.catch((error) => {
				setError(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return {
		data: { ...data },
		error,
		isLoading,
	};
};

export { useQuery };
