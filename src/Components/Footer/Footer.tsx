function Footer() {
	return (
		<div className="h-52 mt-3 sm:mt-0 sm:h-full bg-gray-600 sm:bg-black rounded-lg text-white shadow-gray-300 sm:pb-2 shadow-xl flex flex-col justify-center sm:flex-row sm:justify-around items-center">
			<div>
				<h1 className="text-xl font-[cursive]">Let's Connect</h1>
			</div>
			<div className="flex flex-col gap-1 mt-2">
				<p className="text-lg ">Contact Me </p>
				<input
					type="text"
					className="px-2 py-1 border-2 border-gray-600 rounded-lg text-black "
					placeholder="KYU hila dala na?"
				/>
			</div>
			<div className="flex sm:gap-2 sm:mt-0 mt-4">
				<p>Github Icon</p>
				<p>LinkedIn Icon</p>
				<p>Instagram Icon</p>
				<p>Repo Added</p>
			</div>
		</div>
	);
}

export default Footer;
