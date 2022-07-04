const TextPanel = ({ icon, title, subtitle }) => (
	<div className="max-w-[328px] mt-[40px] md:mt-[70px]">
		<div className="flex flex-col items-center justify-center text-center md:text-left md:items-start md:flex-row">
			<div className="md:mt-[-12px] flex-shrink-0 w-12 h-12 p-3 mr-4 rounded-full bg-slate-orange">
				<img src={icon} alt={title} />
			</div>
			<div>
				<h4 className="mt-4 font-medium text-desktop-h4 md:mt-0">{title}</h4>
				<p className="mt-4 text-desktop-paragraph text-slate-body">{subtitle}</p>
			</div>
		</div>
	</div>
);

const Feature26 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
			<div className="m-auto bg-white max-w-default rounded-3xl pb-12 md:pb-[90px] pt-[20px]">
				<div className="md:flex md:justify-center">
					<div className="flex flex-col items-center justify-center w-full px-3 md:px-0">
						<TextPanel
							icon={'/assets/features/Play.svg'}
							title={'A simple heading'}
							subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<TextPanel
							icon={'/assets/features/Verified.svg'}
							title={'A simple heading'}
							subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<TextPanel
							icon={'/assets/features/3D.svg'}
							title={'A simple heading'}
							subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
					</div>
					<div className="flex flex-col items-center w-full md:items-start">
						<img
							className="mt-16 md:mt-[-88px] w-[228px] md:w-[356px]"
							src="/assets/features/platform/platform2.svg"
							alt="Platform 2"
						/>
						<div className="hidden md:block">
							<span className="px-6 py-2 text-white rounded-full bg-slate-orange font-bold text-[15px]">
								NEW!
							</span>
						</div>
						<div className="max-w-[362px] mt-4 px-6 md:px-0">
							<h2 className="font-medium text-mobile-h2 md:text-desktop-h2 text-slate-headline">
								Simplicity is key
							</h2>
							<p className="mt-5 text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum.
							</p>
							<button className="w-full px-8 py-4 mt-8 font-medium text-white rounded-lg bg-slate-blue text-desktop-paragraph md:w-auto filter hover:brightness-125">
								Primary Button
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature26;
