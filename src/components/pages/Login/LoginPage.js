import React from 'react';
import Banner from '../../Banner';
import { LoginForm } from '../../Form';

const LoginPage = () => (
	<>
		<Banner />
		<section className="container">
			<LoginForm />
		</section>
	</>
);

export default LoginPage;
