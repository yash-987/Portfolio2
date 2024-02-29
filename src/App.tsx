import './App.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
function App() {
	return (
		<>
			<div>
				<Header />
			</div>
			<Outlet />
			<div>
				 <Footer/>
			</div>
		</>
	);
}

export default App;
