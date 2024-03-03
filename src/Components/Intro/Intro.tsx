import { Link } from 'react-router-dom';
function Intro() {
	return (
		<div className=" space-y-8 items-center sm:w-full w-screen sm:pl-2 sm:rounded-xl  sm:shadow-white sm:shadow-lg sm:border-2 border-white  sm:pb-60 md:mt-4 sm:mb-10 ">
			<div className="flex flex-col sm:flex-row gap-10 sm:items-center justify-between w-full mt-36">
				<div className="w-40   bg-blue-300 h-40 rounded-full mx-auto sm:mx flex justify-center items-center">
					<h1>Img aaegi bro isme </h1>
				</div>
				<div className=" flex flex-col items-center sm:items-start space-y-2 sm:mr-2  ">
					<p className="text-3xl">Hello, I'm</p>
					<h1 className="w-max text-7xl font-bold font-[cursive]  text-center ">
						Yash
					</h1>
					<h2 className="text-5xl font-semibold font-[cursive]">
						Frontend developer
					</h2>

					<div className="pt-4  ">
						<Link to="/contact" className="bg-black  py-2 px-4 rounded-full">
							Contact Me
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;
