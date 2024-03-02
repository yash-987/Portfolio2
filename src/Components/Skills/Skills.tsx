function Skills() {
	return (
		<div className=" mt-40 border=white sm:border-2 sm:shadow-lg sm:shadow-white sm:h-[41rem]  rounded-xl sm:mt-10  sm:pt-28 sm:text-xl ">
			<div className="flex flex-col gap-2 space-x-2 items-center sm:items-start sm:mx-8 sm:gap-5">
				<h1 className=" text-xl  sm:text-4xl font-semibold">Skills</h1>
				<ul className="flex gap-2 sm:gap-4 items-baseline sm:text-2xl  ">
					<p className=" text-lg sm:text-3xl font-medium sm:font-semibold">
						Languages :
					</p>
					<li>JavaScript,</li>
					<li>TypeScript</li>
				</ul>
				<ul className="flex gap-2 sm:gap-4 justify-center sm:text-2xl">
					<p className="text-lg sm:text-3xl font-medium sm:font-semibold">
						FrontEnd Technologies :
					</p>
					<li className="ml-10">HTML,</li>
					<li>CSS,</li>
					<li>Sass,</li>
					<br></br>
					<li>Tailwind CSS,</li>
					<li>React Js</li>
				</ul>
				<ul className="flex gap-2 sm:gap-4 items-baseline sm:text-2xl">
					<p className="text-lg sm:text-3xl font-medium sm:font-semibold">
						Version Control :
					</p>
					<li>Git,</li>
					<li>Github</li>
				</ul>
			</div>
		</div>
	);
}

export default Skills;
