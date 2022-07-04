import ArrowRight from '@heroicons/react/solid/ArrowRightIcon';

const Feature1 = () => (
	<section className="bg-slate-light font-dm-sans">
		<div className="pt-[88px] pb-12 lg:pt-[130px] lg:pb-[90px] mx-6 lg:mx-auto max-w-default">
			<div className="flex flex-col lg:flex-row">
				<div className="w-full">
					<div className="bg-gradient-to-r lg:w-[558px] lg:h-[558px] flex items-center justify-center from-feeling-moody-start to-feeling-moody-end rounded-3xl">
						<img
							className="mb-[-40px] mt-[-40px]"
							src="/assets/features/common/invoice-detail-mockup.svg"
							alt=""
						/>
					</div>
				</div>
				<div>
					<div className="flex w-full lg:justify-end">
						<div className="lg:w-[460px]">
							<h2 className="font-medium leading-tight text-mobile-h2 lg:text-desktop-h2 text-slate-headline mt-[88px] lg:mt-0">
								Plug & play template to get you up and running fast.
							</h2>

							<div
								id={'item-container'}
								className="flex flex-col justify-between mt-12"
							>
								<div className="flex items-center">
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
										<img src="/assets/features/chart.svg" alt="Chart Icon" />
									</div>
									<p className="ml-4 max-w-[250px] md:max-w-default text-desktop-paragraph text-slate-body">
										Explain your value prop as easily as possible.
									</p>
								</div>
								<div className="flex items-center w-full mt-6">
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
										<img src="/assets/features/toggle.svg" alt="Switch Icon" />
									</div>
									<p className="ml-4 max-w-[250px] md:max-w-default text-desktop-paragraph text-slate-body">
										Communicate your most important features.
									</p>
								</div>
								<div className="flex items-center mt-6">
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
										<img src="/assets/features/quote.svg" alt="Quote Icon" />
									</div>
									<p className="ml-4 text-desktop-paragraph text-slate-body">
										Close with killer testimonials.
									</p>
								</div>
							</div>
							<div className="mt-[60px]">
								<button className="flex items-center justify-center w-full px-8 py-4 font-medium text-center text-white rounded-lg lg:w-auto bg-slate-blue filter hover:brightness-125">
									<p>Primary</p>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Feature1;
