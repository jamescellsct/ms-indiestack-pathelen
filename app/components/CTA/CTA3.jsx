const PrimaryButton = () => (
	<div>
		<button className="w-full px-8 py-4 font-medium text-white rounded-lg font-dm-sans bg-slate-blue hover:opacity-90 text-desktop-paragraph md:w-auto">
			Download For Free
		</button>
	</div>
);

const GenerateImageSection = () => (
	<div>
		<img src="/assets/cta/combined-3-banner.svg" />
	</div>
);

const CTA3 = () => (
	<section>
		<div className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
			<div className="m-auto max-w-default">
				<div className="flex flex-col md:flex-row">
					<div className="relative w-full">
						<GenerateImageSection />
					</div>
					<div className="flex items-center w-full mt-[78px] md:mt-0">
						<div className="max-w-[362px] m-auto">
							<span className="px-6 py-2 rounded-full bg-slate-orange text-[15px] font-bold text-white uppercase">
								NEW!
							</span>
							<h3 className="mt-6 font-medium leading-snug text-mobile-h3 md:text-mobile-h2 ">
								This SaaS template gets you up and running in no time.
							</h3>
							<div className="mt-8 md:mt-12">
								<PrimaryButton />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default CTA3;
