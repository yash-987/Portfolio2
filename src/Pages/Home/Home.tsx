import Intro from '../../Components/Intro/Intro';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Projects from '../Projects/Projects';

function Home() {
	return (
		<div>
			<div>
				<Intro />
			</div>
			<div>
				<About />
			</div>
			<div>
				<Skills />
			</div>
			<div>
				
			<Projects />
			  </div>
		</div>
	);
}

export default Home;
