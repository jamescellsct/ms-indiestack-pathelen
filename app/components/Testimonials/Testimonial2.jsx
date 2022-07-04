const Testimonial2 = () => (
	<section className="py-12 md:py-[90px] bg-slate-light">
		<div className="text-center">
			<section className="max-w-[720px] mx-6 md:m-auto">
				<h5 className="text-base font-bold tracking-wider uppercase text-slate-orange font-dm-sans">
					We Love Our Customers
				</h5>
				<h2 className="mt-4 md:mt-[18px] font-medium text-mobile-h2 md:text-desktop-h2 font-dm-sans">
					And they seem to love us
				</h2>
			</section>
			<section className="mx-6 mt-8 md:mt-[55px]">
				<div className="items-center justify-center md:max-w-default md:m-auto md:flex space-y-[30px] md:space-y-0 md:space-x-[30px]">
					<div className="relative rounded-2xl md:rounded-3xl min-h-[475px] w-full bg-cover bg-person1">
						<div className="min-h-[475px] m-auto relative rounded-2xl md:rounded-3xl w-full bg-gradient-to-t from-slate-headline via-transparent to-transparent mix-blend-hard-light flex items-center justify-center group cursor-pointer">
							<img
								className="transition-all duration-300 w-11 h-11 group-hover:w-14 group-hover:h-14"
								src="/assets/testimonials/playbutton.png"
							/>{' '}
							<div className="absolute text-left left-4 bottom-4">
								<p className="px-4 py-4 text-white font-dm-sans">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
								</p>
							</div>
						</div>
					</div>
					<div className="relative rounded-2xl md:rounded-3xl min-h-[475px] w-full bg-cover bg-person2">
						<div className="min-h-[475px] relative rounded-2xl md:rounded-3xl w-full bg-gradient-to-t from-slate-headline via-transparent to-transparent mix-blend-hard-light flex items-center justify-center group cursor-pointer">
							<img
								className="transition-all duration-300 w-11 h-11 group-hover:w-14 group-hover:h-14"
								src="/assets/testimonials/playbutton.png"
							/>{' '}
							<div className="absolute text-left left-4 bottom-4">
								<p className="px-4 py-4 text-white font-dm-sans">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
								</p>
							</div>
						</div>
					</div>
					<div className="relative rounded-2xl md:rounded-3xl min-h-[475px] w-full bg-cover bg-person3">
						<div className="min-h-[475px] relative rounded-2xl md:rounded-3xl w-full bg-gradient-to-t from-slate-headline via-transparent to-transparent mix-blend-hard-light flex items-center justify-center group cursor-pointer">
							<img
								className="transition-all duration-300 w-11 h-11 group-hover:w-14 group-hover:h-14"
								src="/assets/testimonials/playbutton.png"
							/>{' '}
							<div className="absolute text-left left-4 bottom-4">
								<p className="px-4 py-4 text-white font-dm-sans">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</section>
);

export default Testimonial2;
