const PrimaryButton = () => (
	<div>
		<button className="w-full px-8 py-4 font-medium text-white rounded-lg font-dm-sans bg-slate-blue hover:opacity-90 text-desktop-paragraph md:w-auto">
			Download For Free
		</button>
	</div>
);

const GenerateImage = ({ src }) => (
	<div className="flex justify-center">
		<img
			src={src}
			className="absolute top-0 filter brightness-[500] md:ml-[66px] md:mt-[-52px]"
		/>
		<img src={src} className="relative" />
	</div>
);

const CTA2 = () => (
	<section className="md:pt-[142px] py-[48px] md:pb-[90px] bg-slate-light px-6 md:px-0 font-dm-sans">
		<div className="max-w-default md:justify-center md:flex md:items-start md:m-auto">
			<div className="w-full md:flex md:items-center md:justify-center">
				<div className="md:mt-12">
					<span className="px-6 py-2 rounded-full bg-slate-orange text-[15px] font-bold text-white uppercase">
						NEW!
					</span>
					<h3 className="mt-6 font-medium leading-snug text-mobile-h3 md:text-mobile-h2 max-w-[362px]">
						This SaaS template gets you up and running in no time.
					</h3>
					<div className="mt-8 md:mt-12">
						<PrimaryButton />
					</div>
				</div>
			</div>
			<div className="relative w-full mt-12 md:mt-0">
				<GenerateImage src="/assets/cta/cta-image.svg" />
			</div>
		</div>
	</section>
);

export default CTA2;
