const FeatureTile = ({ title, subtitle, image }) => (
	<div className="text-center px-6 md:px-[98px] py-12 md:py-0">
		<div className="md:w-[362px] md:h-[362px] flex items-center justify-center bg-gradient-to-r from-feeling-moody-start rounded-full md:mt-[-60px] to-feeling-moody-end">
			<img className="z-10 w-full m-auto" src={image} alt="Platform 1" />
		</div>
		<h2 className="text-slate-headline text-mobile-h2 md:text-desktop-h2 mt-[60px] font-medium">
			{title}
		</h2>
		<p className="mt-6 slate-body text-desktop-paragraph">{subtitle}</p>
		<div className="mt-10 md:mb-16">
			<button className="w-full py-4 text-white rounded-lg bg-slate-blue text-desktop-paragraph filter hover:brightness-125">
				Primary
			</button>
		</div>
	</div>
);

const Feature33 = () => {
	return (
		<section>
			<div className="bg-slate-light font-dm-sans pt-[48px] pb-12 md:pt-[150px] md:pb-[90px] px-6 md:px-0">
				<div>
					<div className="m-auto max-w-default md:flex">
						<div className="md:mr-[15px] w-full bg-white rounded-3xl">
							<FeatureTile
								title={'Limitless Possibilities'}
								subtitle={
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi fames tincidunt ornare volutpat. Sit ac tortor eget eu, pellentesque feugiat elementum.'
								}
								image={'/assets/features/platform/platform3.svg'}
							/>
						</div>
						<div className="mt-[30px] md:mt-0 md:ml-[15px] w-full bg-white rounded-3xl">
							<FeatureTile
								title={'In a Limitless World'}
								subtitle={
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi fames tincidunt ornare volutpat. Sit ac tortor eget eu, pellentesque feugiat elementum.'
								}
								image={'/assets/features/platform/platform2.svg'}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature33;
