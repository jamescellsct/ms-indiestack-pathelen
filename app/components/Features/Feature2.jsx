import ArrowRight from '@heroicons/react/solid/ArrowRightIcon';

const Feature2 = () => (
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
								Simplicity is key. Elevate your copy with a simple design
							</h2>
							<p className="mt-4 font-normal text-slate-body text-desktop-subheading">
								Here is a section with two features or points and a subheading.
							</p>
							<div
								id={'item-container'}
								className="flex flex-col justify-between mt-12 lg:flex-row"
							>
								<div className="lg:w-[185px]">
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
										<img src="/assets/features/cart.svg" alt="" />
									</div>
									<h4 className="mt-4 text-xl font-medium text-slate-headline">
										A simple heading
									</h4>
									<p className="mt-4 text-slate-body text-desktop-paragraph">
										The point of a landing page is to make the case for your
										product.
									</p>
								</div>
								<div className="lg:w-[185px] mt-8 lg:mt-0">
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
										<img src="/assets/features/metric.svg" alt="" />
									</div>
									<h4 className="mt-4 text-xl font-medium text-slate-headline">
										A simple heading
									</h4>
									<p className="mt-4 text-slate-body text-desktop-paragraph">
										The point of a landing page is to make the case for your
										product.
									</p>
								</div>
							</div>
							<div className="mt-[60px]">
								<button className="flex items-center justify-center w-full px-8 py-4 font-medium text-center text-white rounded-lg lg:w-auto bg-slate-blue filter hover:brightness-125">
									<p>Primary</p>
									<ArrowRight className="w-5 h-4 ml-3 text-white" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Feature2;
