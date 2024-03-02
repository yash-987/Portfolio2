import Card from '../../Components/CardComponent/Card';
import Button from '../../Components/Button/Button';

// import Footer from '../../Components/Footer/Footer';

function Projects() {
	return (
		<div className="  sm:pb-4 mt-10 sm:border-2 border-white sm:mb-2  rounded-xl sm:shadow-white sm:shadow-lg">
			<h1 className="text-4xl font-mono pl-10 pt-8">Projects</h1>

			<div>
				<p className=" mt-4 pl-28 sm:mt-12  flex items-start sm:pl-20">
					Browse My Recent Projects (kya matlab ek bhi project nhi banaya abhi
					tak )
				</p>
				<div className="flex flex-col pl-10 sm:flex-row sm:gap-3 sm:mt-6">
					<Card
						img="https://imgs.search.brave.com/OS7SmsIdX9rZo0hDWEZcGG97YfOqaH-Ua1CMRwtfEek/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZhLzEw/LzMxL2ZhMTAzMWY5/ZjRlYzY3YmQ3NGRl/MjY4NzI2MzU2ZThk/LmpwZw"
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
