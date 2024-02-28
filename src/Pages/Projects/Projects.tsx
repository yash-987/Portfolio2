
import Card from '../../Components/CardComponent/Card';
import Button from '../../Components/Button/Button';

// import Footer from '../../Components/Footer/Footer';

function Projects() {


	return (
		<div className="h-screen my-2 mt-3">
			<h1 className="text-4xl font-mono  pt-8">Projects</h1>

			<div>
				<p className="mt-12 flex items-start pl-20">
					Browse My Recent Projects
				</p>
				<div className="flex gap-3 mt-6">
					<Card
						img="https://via.placeholder.com/150"
						classname="py-4"
						button={
							<div className="flex gap-4">
								<Button type="submit" classname="bg-gray-600 px-3">
									Live Link
								</Button>
								<Button type="submit" classname="bg-blue-400 px-3">
									Github Link
								</Button>
							</div>
						}
					>
						Project 1
					</Card>

					<Card
						img="https://via.placeholder.com/150"
						classname="py-4"
						button={
							<div className="flex gap-4">
								<Button type="submit" classname="bg-black px-3">
									Live Link
								</Button>
								<Button type="submit" classname="bg-black px-3">
									Github Link
								</Button>
							</div>
						}
					>
						Project 2
					</Card>

					<Card
						img="https://via.placeholder.com/150"
						classname="py-4"
						button={
							<div className="flex gap-4">
								<Button type="submit" classname="bg-blue-400 px-3">
									Live Link
								</Button>
								<Button type="submit" classname="bg-blue-400 px-3">
									Github Link
								</Button>
							</div>
						}
					>
						Project 3
					</Card>
				</div>
			</div>
		</div>
	);
}

export default Projects;
