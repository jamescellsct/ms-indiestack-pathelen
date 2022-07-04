const Feature27 = () => {
	return (
		<section className="min-h-screen bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end font-dm-sans py-12 md:py-[180px] px-6 md:px-0">
			<div className="m-auto text-center max-w-default">
				<div className="max-w-[754px] m-auto">
					<h5 className="text-base font-bold uppercase text-slate-orange">
						Feels like magic
					</h5>
					<h2 className="font-medium text-mobile-h2 md:text-desktop-h2 max-w-[680px] m-auto leading-tight mt-8">
						Pre-made layouts to get you started even faster.
					</h2>
					<p className="text-[21px]  max-w-[754px] font-normal mt-8 text-slate-body">
						Save time with pre-made layouts and swap out only the sections you need.
					</p>
				</div>
				<div className="mt-12 md:mt-[80px]">
					<img src="/assets/features/feature27/feature27banner.svg" alt="Image" />
				</div>
				<div className="flex items-center justify-center mt-8">
					<button className="flex items-center justify-center w-full px-8 py-4 font-medium text-white rounded-lg md:w-auto text-desktop-paragraph bg-slate-blue hover:brightness-125 filter">
						See all layouts{' '}
						<span className="ml-2">
							<img src="/assets/features/rightarrow.svg" alt="Right Arrow" />
						</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Feature27;
