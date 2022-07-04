const PrimaryButton = () => (
	<div className="pt-12">
		<button className="px-12 py-4 font-medium text-white rounded-lg text-desktop-paragraph font-dm-sans bg-slate-blue hover:opacity-90">
			Download for free
		</button>
	</div>
);

const CTA1 = () => (
	<section className="py-16 md:py-[90px] bg-slate-light px-6 md:px-0">
		<div className="max-w-6xl px-6 py-16 text-center md:py-24 md:m-auto bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-3xl">
			<div className="max-w-xl m-auto">
				<h5 className="text-base font-bold uppercase font-dm-sans text-slate-orange">
					Call to action section
				</h5>
				<h2 className="mt-[18px] font-medium leading-snug text-mobile-h2 md:text-desktop-h2 font-dm-sans">
					Bring more attention to a feature with a wide layout.
				</h2>
				<p className="font-dm-sans text-slate-body text-desktop-paragraph mt-[14px]">
					Once you’ve communicated your value proposition, shed some light on critical
					features loved by your customers.
				</p>
			</div>
			<PrimaryButton />
		</div>
	</section>
);

export default CTA1;
