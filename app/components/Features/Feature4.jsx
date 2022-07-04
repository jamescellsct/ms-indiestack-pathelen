const FeatureItem = ({ className }) => (
	<div className={`md:w-1/2 ${className}`}>
		<div className="w-full space-y-4">
			<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
				<img className="w-6" src="/assets/features/cart.svg" />
			</div>
			<h3 className="font-bold text-desktop-h4"> A simple heading </h3>
			<p className="font-normal font-dm-sans text-desktop-paragraph">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
		</div>
	</div>
);

const Feature4 = () => (
	<section className="bg-slate-light font-dm-sans">
		<div className="max-w-default py-12 md:py-[90px] mx-6 lg:m-auto">
			<div className="w-full">
				<div className="md:w-7/12 space-y-7">
					<h1 className="font-medium leading-snug text-mobile-h2 md:text-desktop-h2 text-slate-headline">
						Simplicity is key. Elevate your copy with a simple design.
					</h1>
					<p className="font-normal text-desktop-subheading text-slate-body">
						Here is a section with two features or points and a subheading.
					</p>
				</div>
			</div>
			<div className="items-center justify-center mt-0 md:flex md:mt-[80px]">
				<div className="flex flex-wrap items-center md:w-1/2">
					<FeatureItem className="mt-8 md:mt-0" />
					<FeatureItem className="mt-8 md:mt-0" />
					<FeatureItem className="mt-8 md:mt-20" />
					<FeatureItem className="mt-8 md:mt-20" />
				</div>
				<div className="flex items-center justify-center m-auto mt-24 md:mt-0 bg-gradient-to-r">
					<div className="h-[320px] w-[320px] md:w-[460px] justify-center md:h-[460px] flex items-center bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-3xl">
						<img
							className="md:h-[600px]"
							src="/assets/features/common/invoice-detail-mockup.svg"
							alt="Banner"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Feature4;
