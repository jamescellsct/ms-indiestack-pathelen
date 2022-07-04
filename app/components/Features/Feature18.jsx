const FeatureBlock = ({ img, heading, description }) => (
	<div className="ml-6 mr-6 md:ml-[0px] md:w-1/3 mt-[30px] md:mr-[30px]">
		<div className="text-center p-9 md:min-w-[362px] rounded-3xl bg-white">
			<div className="w-12 h-12 p-3 m-auto rounded-full bg-slate-orange">
				<img src={img} alt="" />
			</div>
			<h5 className="mt-4 text-xl font-medium"> {heading}</h5>
			<p className="mt-4 font-normal text-desktop-paragraph"> {description}</p>
		</div>
	</div>
);

const Feature18 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px]">
			<div className="m-auto max-w-default">
				<h2 className="mx-6 font-medium text-center text-mobile-h2 md:text-desktop-h2 md:mx-0">
					How to use this template
				</h2>
				<div className="mt-6">
					<div className="md:flex">
						<FeatureBlock
							img={'/assets/features/cart.svg'}
							heading={'1. A simple heading '}
							description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<FeatureBlock
							img={'/assets/features/cart.svg'}
							heading={'1. A simple heading '}
							description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<FeatureBlock
							img={'/assets/features/cart.svg'}
							heading={'1. A simple heading '}
							description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
					</div>
					<div className="md:flex">
						<FeatureBlock
							img={'/assets/features/cart.svg'}
							heading={'1. A simple heading '}
							description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<FeatureBlock
							img={'/assets/features/cart.svg'}
							heading={'1. A simple heading '}
							description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<FeatureBlock
							img={'/assets/features/cart.svg'}
							heading={'1. A simple heading '}
							description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature18;
