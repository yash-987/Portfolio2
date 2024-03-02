import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Input from '../InputBox/Input';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
function Footer() {
	return (
		<div className=" mt-3 w-11/12 sm:mt-0 sm:h-full bg-gray-600 sm:bg-black rounded-lg text-white shadow-gray-300 sm:pb-2 shadow-xl flex flex-col sm:w-full items-start 																														   ">
			<div className="ml-4 sm:mx-auto  ">
				<h1 className="text-xl sm:text-2xl font-[cursive] mt-2">
					Let's Connect :
				</h1>
			</div>
			<div className="mt-2 sm:mt-4 flex gap-2  sm:w-full sm:justify-between sm:mx-6 ">
				<Input
					label="Your Name :"
					type="text"
					placeholder="Enter Your Name Here"
					required
					classname="text-black px-4 text-sm sm:text-lg py-2 sm:py-1 mt-1 w-44  sm:w-96  sm:flex "
					onChange={(e) => e.target.value}
					id="username"
					error={false}
				/>
				<Input
					label="Your Email :"
					type="email"
					placeholder="Enter Your Email Here"
					required
					classname="text-black px-4  text-sm sm:text-lg mt-1 w-44 sm:py-1 py-2 sm:w-96 sm:mr-10	 sm:flex "
					onChange={(e) => e.target.value}
					id="email"
					error={false}
				/>
			</div>
			<div className="flex flex-col mt-2 ml-2 sm:w-full sm:ml-6 items-start">
				<label className="ml-2" htmlFor="message">
					Your Message :
				</label>
				<Input
					type="text"
					placeholder="Enter Your Message"
					required
					classname="text-black   mt-2 text-start pl-2 pt-1 pr-44 sm:pr-96 w-auto pb-36 flex "
					onChange={(e) => e.target.value}
					id="message"
					error={false}
				/>
				<Button
					type="submit"
					classname="text-white mt-3 ml-1 bg-blue-600 rounded-lg shadow-md active:scale-95 border-b-2 border-blue-400 shadow-white"
				>
					Send Message
				</Button>
			</div>
			<p className="mt-2 sm:mt-4 sm:ml-6 text-2xl mx-4">Follow Me On:</p>

			<div className="flex justify-around w-full sm:gap-2 sm:mt-2 my-4  text-4xl">
				<Link className="" to="https://github.com/yash-987">
					<FaGithub />
				</Link>
				<Link to="/">
					<FaLinkedin />
				</Link>
				<Link to="https://www.instagram.com/ayoitsyash/">
					<FaInstagram />
				</Link>
			</div>
		</div>
	);
}

export default Footer;
