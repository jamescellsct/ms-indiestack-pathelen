const FeatureRow = ({ icon }) => (
	<div className="max-w-[362px] mt-3 md:mt-0 min-w-[362px] pt-[18px] md:pt-[60px]">
		<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
			<img src={icon} alt="Icon" />
		</div>
		<h2 className="pt-4 text-xl font-medium"> A simple heading </h2>
		<p className="pt-4 text-desktop-paragraph">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nec cursus turpis arcu amet
			enim, massa ac.
		</p>
	</div>
);

const Feature15 = () => {
	return (
		<section className="bg-slate-light font-dm-sans pt-[30px] pb-12 md:pb-[90px]">
			<div className="max-w-[754px] m-auto">
				<div className="flex flex-wrap justify-between mx-6 md:mx-0">
					<FeatureRow icon={'/assets/features/metric.svg'} />
					<FeatureRow icon={'/assets/features/virtualassistant.svg'} />
					<FeatureRow icon={'/assets/features/appleoutline.svg'} />
					<FeatureRow icon={'/assets/features/toggle.svg'} />
				</div>
			</div>
		</section>
	);
};

export default Feature15;
