import { ChangeEvent, FC } from 'react';

interface Props {
	label?: string;
	type: 'text' | 'number' | 'email' | 'password';
	classname: string;
	placeholder: string;
	required: boolean;
	disabled?: boolean;
	error: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	id: string;
}

const Input: FC<Props> = ({
	label,
	type,
	classname,
	placeholder,
	required,
	disabled,
	error,
	id,
	onChange,
}) => {
	return (
		<div className=" sm:flex sm:flex-col ">
			<label className="text-start" htmlFor={label}>
				{label}
			</label>
			<input
				type={type}
				className={` border-2 border-gray-600 rounded-lg ${classname}`}
				placeholder={placeholder}
				id={id}
				required={required}
				disabled={disabled}
				onChange={onChange}
			/>
			{error && (
				<p className={`text-red-600 text-md ${classname}`}>
					Input field cannot be empty
				</p>
			)}
		</div>
	);
};

export default Input;
