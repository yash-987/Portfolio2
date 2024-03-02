import React from 'react';
interface Props {
	children: React.ReactNode;
	classname: string;
	type: 'button' | 'submit' | 'reset' | undefined;
}

function Button(props: Props) {
	const { children, classname = '', type } = props;

	return (
		<button
			type={type}
			className={`px-4 py-2 rounded-full text-white    ${classname}  `}
		>
			{children}
		</button>
	);
}

export default Button;
