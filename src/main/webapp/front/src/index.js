import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './utils/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import Header from './layouts/Header';
import App from './App';
import Footer from './layouts/Footer';

const header = ReactDOM.createRoot(document.getElementById('headerContainer'));
header.render(
	<React.StrictMode>
		<Header />
	</React.StrictMode>
);

const main = ReactDOM.createRoot(document.getElementById('mainContainer'));
main.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

const footer = ReactDOM.createRoot(document.getElementById('footerContainer'));
footer.render(
	<React.StrictMode>
		<Footer />
	</React.StrictMode>
);

reportWebVitals();