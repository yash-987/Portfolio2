interface Props {
	children: React.ReactNode;
	img: string;
	classname?: string;
	button: React.ReactNode;
}

function Card(props: Props) {
	const { img, classname, children, button } = props;

	return (
		<div
			className={` rounded-xl mx-auto blur-sm flex flex-col h-[24rem] items-center  shadow-xl px-2 bg-white ${classname}  `}
		>
			<div className=" h-[16rem] mt-4 w-[14rem]  rounded-lg flex items-center justify-center">
				<img className=" rounded-lg h-full  " src={img} alt="" />
			</div>
			<p className="text-lg my-2">{children}</p>
			{button && <div>{button}</div>}
		</div>
	);
}

export default Card;
