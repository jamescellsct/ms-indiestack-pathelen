const Feature14 = () => {
	return (
		<section className="bg-slate-light pb-12 pt-12 md:pt-[133px] md:pb-[90px] font-dm-sans">
			<div className="bg-white max-w-[1330px] mx-6 md:m-auto rounded-3xl">
				<div className="flex flex-col md:flex-row justify-between md:px-[92px] px-6">
					<div className="max-w-[558px] my-12 md:my-[113px]">
						<h5 className="text-base font-bold uppercase text-slate-orange">
							A feature section
						</h5>
						<h2 className="mt-[18px] text-mobile-h2 md:text-desktop-h2 font-medium leading-tight">
							Bring more attention to a feature with a wide layout.
						</h2>
						<p className="mt-[14px] text-desktop-paragraph">
							Once you’ve communicated your value proposition, shed some light on
							critical features loved by your customers.
						</p>
						<button className="w-full px-8 py-4 mt-10 font-medium text-white rounded-lg bg-slate-blue text-desktop-paragraph filter hover:brightness-125 md:w-auto">
							Action Button
						</button>
					</div>
					<div className="">
						<div className="bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end w-[279px] h-[279px] md:w-[460px] md:h-[460px] rounded-full m-auto flex justify-center md:mt-[-43px] mb-12 md:mb-0">
							<img
								className="h-[270px] md:h-[500px]"
								src="/assets/features/common/invoice-detail-mockup.svg"
								alt="mockup"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature14;
