import React from 'react';
import Routes from './pages';
import Theme from './Theme';
import Header from './Header';
import Footer from './Footer';

function App() {
	return (
		<Theme>
			<Header />
			<Routes />
			<Footer />
		</Theme>
	);
}

export default App;
