import React from 'react';

interface Props {}

function Skills(props: Props) {
	const {} = props;

	return (
		<div className=" h-[41rem]  rounded-xl mt-10  pt-28 text-xl ">
			<div className="flex flex-col items-start mx-8 gap-5">
				<h1 className="text-4xl font-semibold">Skills</h1>
				<ul className="flex gap-4 items-baseline text-2xl  ">
					<p className="text-3xl font-semibold">Languages :</p>
					<li>JavaScript,</li>
					<li>TypeScript</li>
				</ul>
				<ul className="flex gap-4 items-baseline text-2xl">
					<p className="text-3xl font-semibold">FrontEnd Technologies :</p>
					<li>HTML,</li>
					<li>CSS,</li>
					<li>Sass,</li>
					<li>Tailwind CSS,</li>
					<li>React Js</li>
				</ul>
				<ul className="flex gap-4 items-baseline text-2xl">
					<p className="text-3xl font-semibold">Version Control :</p>
					<li>Git,</li>
					<li>Github</li>
				</ul>
			</div>
		</div>
	);
}

export default Skills;
