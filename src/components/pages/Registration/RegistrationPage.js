import React from 'react';
import Banner from '../../Banner';
import { RegistrationForm } from '../../Form';

const RegistrationPage = () => (
	<>
		<Banner />
		<section className="container">
			<RegistrationForm />
		</section>
	</>
);

export default RegistrationPage;
