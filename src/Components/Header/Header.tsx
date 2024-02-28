
import { useNavigate } from 'react-router-dom';

function Header() {
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
		<header className="sm:w-full  border-b-1 rounded-lg border-black sm:border-none sm:shadow-none shadow-black shadow-sm w-screen py-2 ">
			<nav className="flex justify-around items-center sm:items-baseline ">
				<div className="text-5xl  sm:mr-20  sm:text-4xl font-semibold">Yash</div>
				<div className=''>
					<select className='  text-xl w-20 sm:hidden ' name="" id="">
						{navItems.map(item => (
							<option className='cursor-pointer'  key={item.name} value="">{item.name}</option>
						))}
					</select>

					<ul className="hidden sm:flex gap-7 text-xl text-gray-700 font-sans  ">
						{navItems.map((item) => (
							<li
								className="sm:hover:text-black hover:border-b-2 border-blue-800"
								key={item.name}
							>
								<button
									className="cursor-pointer  "
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
