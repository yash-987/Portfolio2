
interface Props {
	children: string;
	classname: string;
	type: string;

}

function Button(props: Props) {
	const { children, classname = '', } = props;

	return (
		<button
			type='submit'
			className={`px-4 py-2 rounded-full text-white    ${classname}  `} 
		>
			{children}
		</button>
	);
}

export default Button;
