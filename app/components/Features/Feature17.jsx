const Feature17 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
			<div className="m-auto max-w-default bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end md:h-[600px] rounded-3xl">
				<div className="flex flex-col h-full md:flex-row">
					<div className="flex  md:ml-[113px] w-full">
						<div className="max-w-[363px] m-auto px-6 md:px-0 mt-12 md:mt-auto">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
								<img src="/assets/features/virtualassistant.svg" alt="" />
							</div>
							<div>
								<h2 className="mt-6 font-medium leading-snug text-mobile-h2 md:text-desktop-h2 text-slate-headline">
									Showcase your mobile designs and functions.
								</h2>
								<p className="mt-6 font-normal text-desktop-paragraph text-slate-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</div>
							<div>
								<button className="flex items-center w-full px-8 py-4 mt-8 text-base font-medium text-white rounded-lg md:mt-6 bg-slate-blue md:text-desktop-paragraph md:w-auto text-desktop-paragraph filter hover:brightness-125">
									Get it in the apple store
									<span className="ml-2">
										<img
											className="w-4 -mt-1"
											src="/assets/cta/Apple.svg"
											alt="Apple"
										/>
									</span>
								</button>
							</div>
						</div>
					</div>
					<div className="flex items-end justify-start w-full px-6 md:px-0">
						<div className="mt-12 md:ml-10 md:mt-0">
							<img
								className="md:h-[529px]"
								src="/assets/features/blankphone.svg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature17;
