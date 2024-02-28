import React from 'react';

interface Props {}

function About(props: Props) {
	const {} = props;

	return (
		<div className="flex flex-col  rounded-xl z-10 h-screen">
			<div className="flex flex-col items-start mt-40 ml-8 gap-3 ">
				<h1 className="text-5xl">About me </h1>
				<h2 className="text-3xl">A small introduction</h2>
				<p className="text-xl flex items-start ">
					I am a Self Taught Frontend Developer based in India. I develop
					resposive websites using Reactjs.
				</p>
			</div>
		</div>
	);
}

export default About;
