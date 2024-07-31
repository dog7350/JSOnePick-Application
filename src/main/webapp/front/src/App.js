import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AP from './pages/router/AdminPages';
import BP from './pages/router/BoardPages';
import CP from './pages/router/CommonPages';
import DP from './pages/router/DescriptionPages';
import NotFound from './pages/common/NotFound';

function App() {
	return (
		<Routes>
			
			//<Route path="/admin" element={<AP />}></Route>
			
			//<Route path="/board" element={<BP />}></Route>
			
			//<Route path="/cs" element={<DP />}></Route>
			
			//<Route path="/tm" element={<DP />}></Route>
			
			//<Route path="/contract" element={<DP />}></Route>
		
			<Route path="/" element={<DP.MainPage />}></Route>
			
			<Route path="*" element={<NotFound />}></Route>
			
		</Routes>
	);
}

export default App;