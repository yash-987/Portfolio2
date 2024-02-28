import './App.css';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {
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
