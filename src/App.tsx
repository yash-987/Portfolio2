import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
function App() {
	return (
		<>
			<div className="w-screen sm:w-full">
				<Header />
			</div>
			<Outlet />
			<div className="w-screen sm:w-full">
				{' '}
				<Footer />
			</div>
		</>
	);
}

export default App;
