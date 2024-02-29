import Button from '../Button/Button';

function Intro() {
	return (
		<div className=" space-y-8 items-center sm:w-full w-screen sm:pl-2 sm:rounded-lg  sm:pb-60 md:mt-4 ">
			<div className="flex flex-col sm:flex-row gap-10 sm:items-center justify-between w-full mt-36">
				<div className="w-40   bg-blue-300 h-40 rounded-full mx-auto sm:mx flex justify-center items-center">
					<h1>Img aaegi bro isme </h1>
				</div>
				<div className=" flex flex-col items-center sm:items-start justify-center space-y-1  ">
					<p className="text-3xl">Hello, I'm</p>
					<h1 className="w-max text-7xl font-bold font-[cursive]  text-center ">
						Yash
					</h1>
					<h2 className="text-5xl font-semibold font-[cursive]">
						Frontend developer
					</h2>

					<div className="pt-4 sm:pt-4">
						<Button type="submit" classname="bg-black">
							Contact Me
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;
