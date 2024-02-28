import Card from '../../Components/CardComponent/Card';
import Button from '../../Components/Button/Button';

// import Footer from '../../Components/Footer/Footer';

function Projects() {
	return (
		<div className=" mt-36 sm:pb-4 sm:my-2 sm:mt-3">
			<h1 className="text-4xl font-mono pl-10 pt-8">Projects</h1>

			<div>
				<p className=" mt-4 pl-28 sm:mt-12  flex items-start sm:pl-20">
					Browse My Recent Projects (kya matlab ek bhi project nhi banaya abhi tak )
				</p>
				<div className="flex flex-col pl-10 sm:flex-row sm:gap-3 sm:mt-6">
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
