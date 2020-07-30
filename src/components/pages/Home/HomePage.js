import React from 'react';
import Banner from '../../Banner';

import Articles from '../../../containers/Articles';

const HomePage = () => (
	<>
		<Banner />
		<section className="container">
			<Articles />
		</section>
	</>
);

export default HomePage;
