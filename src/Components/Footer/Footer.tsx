


function Footer() {


	return (
		<div className="  bg-black rounded-lg text-white shadow-gray-300 pb-2 shadow-xl flex justify-around items-center">
			<div>
				<h1 className="text-xl font-[cursive]">Let's Connect</h1>
			</div>
			<div className="flex flex-col gap-1 mt-2">
				<p className="text-lg ">Contact Me </p>
				<input
					type="text"
					className="px-2 py-1 border-2 border-gray-600 rounded-lg  "
					placeholder="example@gmail.com"
				/>
			</div>
			<div className="flex gap-2">
				<p> Github Icon</p>
				<p>LinkedIn Icon</p>
				<p>Instagram Icon</p>
				<p>Repo Added</p>
			</div>
		</div>
	);
}

export default Footer;
