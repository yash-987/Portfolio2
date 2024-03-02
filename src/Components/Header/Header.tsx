import { useState } from 'react';

import { CgMenu } from 'react-icons/cg';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

function Header() {
	const [Open, setOpen] = useState(false);
	const navigate = useNavigate();

	const navItems = [
		{
			name: 'Home',
			url: '/',
			active: true,
		},
		{
			name: 'About Me',
			url: '/about',
			active: true,
		},
		{
			name: 'Skills',
			url: '/skills',
		},
		{
			name: 'Projects',
			url: '/projects',
		},
		{
			name: 'Contact Me',
			url: '/contact',
		},
	];

	return (
		<header className="sm:w-full   border-b-1 rounded-lg border-black sm:border-none sm:shadow-lg bg-slate-500  sm:shadow-white  shadow-black shadow-sm w-11/12 sm:h-16 sm:mb-2 py-2 ">
			<nav className="flex justify-around items-center sm:items-baseline ">
				<div className="text-5xl mr-8 sm:mr-20  sm:text-4xl font-semibold">
					Yash
				</div>

				<div className="">
					<div className="sm:hidden">
						<button onClick={() => setOpen(!Open)}>
							{Open ? (
								<RxCross1 className="text-3xl text-white" />
							) : (
								<CgMenu className="text-3xl text-white" />
							)}
						</button>
						{/* <ul className={`gap-7 text-xl ${Open?'visible':'hidden'}`}>
						{navItems.map((item) => (
							<li
								className="text-white hover:border-b-2 border-white"
								key={item.name}
							>
								<button
									className=" "
									onClick={() => {
										navigate(item.url);
									}}
								>
									{item.name}
								</button>
							</li>
						))}
					</ul> */}
						{Open ? (
							<ul>
								{navItems.map((item) => (
									<li
										className="text-white hover:border-b-2 border-white"
										key={item.name}
									>
										<button
											className=" "
											onClick={() => {
												navigate(item.url);
											}}
										>
											{item.name}
										</button>
									</li>
								))}
							</ul>
						) : (
							''
						)}
					</div>

					{/* <select className="  text-xl w-20 sm:hidden " name="" id="">
						{navItems.map((item) => (
							<option className="cursor-pointer" key={item.name} value="">
								{item.name}
							</option>
						))}
					</select> */}

					<ul className="hidden sm:flex gap-7 text-xl  sm:visible ">
						{navItems.map((item) => (
							<li
								className="text-white hover:border-b-2 border-white"
								key={item.name}
							>
								<button
									className=" "
									onClick={() => {
										navigate(item.url);
									}}
								>
									{item.name}
								</button>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;
