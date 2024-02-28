import { useState } from 'react';

import './App.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<Header />
			</div>
			<Home />
			<div>
				<Footer />
			</div>
		</>
	);
}

export default App;
