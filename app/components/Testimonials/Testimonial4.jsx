const Testimonial4 = () => (
	<section className="py-12 md:py-[90px] bg-slate-light">
		<div className="text-center">
			<section className="max-w-[720px] mx-6 md:m-auto">
				<h5 className="text-base font-bold tracking-wider uppercase text-slate-orange font-dm-sans">
					We Love Our Customers
				</h5>
				<h2 className="font-medium text-mobile-h2 md:text-desktop-h2 mt-4 md:mt-[18px] font-dm-sans">
					And they seem to love us
				</h2>
			</section>
			<section className="mt-8 md:mt-[55px] mx-6">
				<div className="items-center justify-center max-w-[754px] m-auto lg:flex space-y-[30px] lg:space-y-0 lg:space-x-[30px]">
					<div className="relative px-[52px] py-[75px] bg-white rounded-3xl">
						<p className="absolute top-6 left-8 text-left text-slate-body opacity-10 text-[72px] leading-none font-dm-sans italic">
							"
						</p>
						<div>
							<div>
								<div className="relative flex items-center justify-center">
									<img
										className="w-16 h-16"
										src="/assets/testimonials/author1.png"
									/>
								</div>
							</div>
							<p className="mt-6 font-dm-sans text-slate-body text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit,
								a volutpat enim, massa id. Vestibulum faucibus.
							</p>
							<p className="mt-6 text-sm opacity-50 font-dm-sans text-slate-body">
								Cameron Williamson, CEO, Stripe
							</p>
						</div>
					</div>
					<div className="relative px-[52px] py-[75px] bg-white rounded-3xl">
						<p className="absolute top-6 left-8 text-left text-slate-body opacity-10 text-[72px] leading-none font-dm-sans italic">
							"
						</p>
						<div>
							<div>
								<div className="relative flex items-center justify-center">
									<img
										className="w-16 h-16"
										src="/assets/testimonials/author2.png"
									/>
								</div>
							</div>
							<p className="mt-6 font-dm-sans text-slate-body text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit,
								a volutpat enim, massa id. Vestibulum faucibus.
							</p>
							<p className="mt-6 text-sm opacity-50 font-dm-sans text-slate-body">
								Cameron Williamson, CEO, Stripe
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</section>
);

export default Testimonial4;
