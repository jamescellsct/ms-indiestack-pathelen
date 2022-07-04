const Testimonial5 = () => (
	<section className="py-12 md:py-[90px] bg-slate-light font-dm-sans">
		<div className="text-center">
			<section className="max-w-[720px] mx-6 md:m-auto space-y-4">
				<h5 className="text-base font-bold tracking-wider uppercase text-slate-orange font-dm-sans">
					We Love Our Customers
				</h5>
				<h2 className="font-medium text-mobile-h2 md:text-desktop-h2 font-dm-sans">
					And they seem to love us
				</h2>
			</section>
			<section className="mx-6 mt-8 md:mt-[55px]">
				<div className="max-w-[754px] m-auto bg-white rounded-2xl">
					<div className="flex px-6 py-12 md:px-24 md:py-[76px]">
						<div className="space-y-6">
							<div>
								<div className="relative flex items-center justify-center">
									<img
										className="w-16 h-16"
										src="/assets/testimonials/author1.png"
									/>
								</div>
								<p className="text-left text-slate-body opacity-10 text-[72px] leading-[0px] font-dm-sans italic">
									"
								</p>
							</div>
							<p className="font-dm-sans text-slate-body text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit,
								a volutpat enim, massa id. Vestibulum faucibus.
							</p>
							<p className="text-sm tracking-wider opacity-50 font-dm-sans text-slate-body">
								Cameron Williamson, CEO, Stripe
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</section>
);

export default Testimonial5;
