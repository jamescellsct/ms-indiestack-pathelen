const TestimonialCard = ({ image }) => (
	<div className="w-full transition-all duration-300 bg-white rounded-2xl md:rounded-3xl hover:shadow-sm">
		<div className="p-5">
			<div className="flex justify-center max-w-[362px]">
				<img className="w-[50px] h-[50px] mr-[7px]" src={image} />
				<div className="text-left ml-[7px]">
					<p className="text-base leading-snug font-dm-sans text-slate-body">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit, a
						volutpat enim, massa id. Vestibulum faucibus.
					</p>
					<p className="text-sm mt-[6px] opacity-50 font-dm-sans text-slate-body">
						Cameron Williamson, CEO, Stripe
					</p>
				</div>
			</div>
		</div>
	</div>
);

const Testimonial3 = () => (
	<section className="py-12 md:py-[90px] bg-slate-light mb-6">
		<div className="text-center">
			<section className="max-w-[720px] md:m-auto mx-6">
				<h5 className="text-base font-bold tracking-wider uppercase text-slate-orange font-dm-sans">
					We Love Our Customers
				</h5>
				<h2 className="font-medium mt-4 md:mt-[18px] text-mobile-h2 md:text-desktop-h2 font-dm-sans">
					And they seem to love us
				</h2>
			</section>
			<section className="mt-8 md:mt-[55px]">
				<div className="mx-6 space-y-6 md:m-auto max-w-default">
					<div className="md:flex space-y-[30px] lg:space-y-0 lg:space-x-[30px]">
						<TestimonialCard image={'/assets/testimonials/author1.png'} />
						<TestimonialCard image={'/assets/testimonials/author2.png'} />
						<TestimonialCard image={'/assets/testimonials/author3.png'} />
					</div>
					<div className="md:flex space-y-7 lg:space-y-0 lg:space-x-7">
						<TestimonialCard image={'/assets/testimonials/author4.png'} />
						<TestimonialCard image={'/assets/testimonials/author5.png'} />
						<TestimonialCard image={'/assets/testimonials/author6.png'} />
					</div>
				</div>
			</section>
		</div>
	</section>
);

export default Testimonial3;
