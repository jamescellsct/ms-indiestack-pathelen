const TestimonialCard = ({ image }) => (
	<div className="w-full transition-all duration-300 bg-white rounded-2xl md:rounded-3xl hover:shadow-sm max-w-[362px]">
		<div className="p-5">
			<div className="flex justify-center max-w-[362px]">
				<img className="w-[50px] h-[50px] mr-[7px]" src={image} />
				<div className="space-y-2 text-left ml-[7px]">
					<p className="text-base leading-normal text-slate-body">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, elit, a
						volutpat enim.
					</p>
					<p className="text-sm opacity-50 text-slate-body">
						Cameron Williamson, CEO, Stripe
					</p>
				</div>
			</div>
		</div>
	</div>
);

const VideoTemplate = ({ background }) => (
	<div
		className={`relative rounded-2xl md:rounded-3xl min-h-[475px] w-full bg-cover ${background}`}
	>
		<div className="min-h-[475px] relative rounded-2xl md:rounded-3xl w-full bg-gradient-to-t from-black via-transparent to-transparent mix-blend-hard-light flex items-center justify-center group cursor-pointer">
			<img
				className="transition-all duration-300 w-11 h-11 group-hover:w-14 group-hover:h-14"
				src="/assets/testimonials/playbutton.png"
			/>{' '}
			<div className="absolute text-left left-4 bottom-4">
				<p className="px-4 py-4 text-white ">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
				</p>
			</div>
		</div>
	</div>
);

const Testimonial1 = () => (
	<section className="py-12 md:py-[90px] bg-slate-light font-dm-sans">
		<div className="text-center">
			<section className="mx-6 space-y-4 md:mx-0">
				<h5 className="text-base font-bold tracking-wider uppercase text-slate-orange ">
					We Love Our Customers
				</h5>
				<h2 className="font-medium text-mobile-h2 md:text-desktop-h2 ">
					And they seem to love us
				</h2>
			</section>
			<section className="mx-6 md:mx-0 mt-[75px]">
				<div className="items-center justify-center max-w-6xl m-auto md:flex space-y-7 md:space-y-0 md:space-x-7 ">
					<div id={'left'} className="md:w-1/3 space-y-7">
						<TestimonialCard image={'/assets/testimonials/author1.png'} />
						<VideoTemplate background={'bg-person1'} />
						<TestimonialCard image={'/assets/testimonials/author2.png'} />
					</div>
					<div id={'center'} className="md:w-1/3 space-y-7">
						<VideoTemplate background={'bg-person2'} />
						<TestimonialCard image={'/assets/testimonials/author1.png'} />
						<VideoTemplate background={'bg-person3'} />
					</div>
					<div id={'right'} className="md:w-1/3 space-y-7">
						<TestimonialCard image={'/assets/testimonials/author1.png'} />
						<VideoTemplate background={'bg-person1'} />
						<TestimonialCard image={'/assets/testimonials/author2.png'} />
					</div>
				</div>
			</section>
		</div>
	</section>
);

export default Testimonial1;
