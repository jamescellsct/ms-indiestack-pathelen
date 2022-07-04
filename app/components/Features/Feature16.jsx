const Feature16 = () => {
	return (
		<section className="bg-slate-light font-dm-sans px-6 md:px-0 py-12 md:py-[90px]">
			<div className="m-auto bg-white max-w-default md:bg-gradient-to-r md:from-feeling-moody-start md:to-feeling-moody-end rounded-3xl">
				<div className="flex flex-col items-center justify-center md:flex-row">
					<div className="w-full px-6 pt-10 m-auto md:px-0 md:pt-0">
						<div className="max-w-[363px] m-auto">
							<div>
								<span className="px-6 py-2 rounded-full bg-slate-orange text-white uppercase font-bold text-[13px] md:text-[15px]">
									Customer Showcase
								</span>
							</div>
							<div className="mt-8">
								<h4 className="font-medium text-mobile-h2 text-slate-headline md:text-desktop-h2">
									Stripe
								</h4>
							</div>
							<div className="mt-6">
								<p className="leading-snug text-slate-body text-desktop-paragraph">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
									enim mi purus, turpis interdum elementum. In magna.
								</p>
							</div>
							<div>
								<button className="flex items-center px-8 py-4 mt-8 font-medium text-white rounded-lg bg-slate-blue text-desktop-paragraph group filter hover:brightness-125">
									See customer story
									<span className="ml-2">
										<img
											src="/assets/features/rightarrow.svg"
											alt="Right Arrow"
										/>
									</span>
								</button>
							</div>
						</div>
					</div>
					<div className="flex justify-end w-full overflow-hidden rounded-lg">
						<img className="" src="/assets/features/feature16banner.svg" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature16;
