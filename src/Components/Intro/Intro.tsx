import React from 'react';
import Button from '../Button/Button';

function Intro() {
	return (
		<div className=" h-screen  space-y-4 items-center sm:w-full w-screen sm:pl-2 sm:rounded-lg  sm:pb-60 md:flex flex-col sm:items-start  sm:space-y-4 sm:justify-start md:mt-4 ">
			<div className=" flex flex-col items-center sm:items-start justify-center space-y-1  pt-28 ">
				<p className="text-3xl">Hello, I'm</p>
				<h1 className="w-max text-7xl font-bold font-[cursive]  text-center ">
					Yash
				</h1>
				<h2 className="text-5xl font-semibold font-[cursive]">
					Frontend developer
				</h2>
			</div>
			<div className="">
				<Button type="submit" classname="bg-black">
					Contact Me
				</Button>
			</div>
		</div>
	);
}

export default Intro;
