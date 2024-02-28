interface Props {}

function About(props: Props) {
	const {} = props;

	return (
		<div className="flex flex-col  sm:h-screen rounded-xl z-10 ">
			<div className="flex flex-col items-center sm:items-start mt-40 ml-8 gap-3 ">
				<h1 className=" text-2xl sm:text-5xl font-[cursive] sm:font-normal">
					About me{' '}
				</h1>
				<h2 className=" text-xl font-[cursive] sm:font-normal sm:text-3xl">
					A small introduction
				</h2>
				<p className="text-lg font-[cursive] sm:font-normal">
					I am a Self Taught Frontend Developer based in India. I develop
					resposive websites using Reactjs.
				</p>
			</div>
		</div>
	);
}

export default About;
