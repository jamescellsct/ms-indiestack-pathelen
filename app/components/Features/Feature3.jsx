const FeatureItem = () => (
	<div className="mt-8 md:mt-24 md:w-1/2 lg:w-1/3">
		<div className="w-full space-y-4">
			<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
				<img className="w-6" src="/assets/features/cart.svg" />
			</div>
			<h3 className="font-medium text-desktop-h4"> A simple heading </h3>
			<p className="font-normal font-dm-sans text-desktop-paragraph">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
		</div>
	</div>
);

const Feature3 = () => (
	<section className="bg-slate-light font-dm-sans">
		<div className="max-w-default py-12 md:py-[90px] mx-6 lg:m-auto">
			<div className="md:w-7/12 space-y-7">
				<h1 className="font-medium leading-snug text-mobile-h2 md:text-desktop-h2">
					Simplicity is key. Elevate your copy with a simple design.
				</h1>
				<p className="font-normal text-desktop-subheading text-slate-body">
					Here is a section with two features or points and a subheading.
				</p>
			</div>
			<section className="md:-mt-8 space-y-14">
				<div className="flex flex-wrap items-center w-full">
					<FeatureItem />
					<FeatureItem />
					<FeatureItem />
					<FeatureItem />
					<FeatureItem />
					<FeatureItem />
				</div>
			</section>
		</div>
	</section>
);

export default Feature3;
