const Feature24 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
			<div className="m-auto bg-white max-w-default rounded-3xl">
				<div className="py-12 md:py-[60px] px-6 md:px-16 md:flex justify-between">
					<div className="max-w-[320px]">
						<h2 className="font-medium text-mobile-h2 md:text-desktop-h2 text-slate-headline">
							Swift Company
						</h2>
						<p className="text-desktop-paragraph mt-[18px] font-normal text-slate-body">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
							egestas semper massa, nullam neque sem bibendum ultrices. Scelerisque
							arcu a nec vitae eu elit.
						</p>
						<div className="flex items-center mt-10 space-x-3">
							<a className="font-normal cursor-pointer text-desktop-paragraph text-slate-body hover:underline">
								Read full cast study
							</a>
							<span>
								<img src="/assets/features/arrowright.svg" alt="" />
							</span>
						</div>
					</div>
					<div className="max-w-[589px] mt-12 md:mt-0">
						<img
							className="md:min-h-[350px]"
							src="/assets/features/graph.svg"
							alt="Graph"
						/>
						<div className="mt-10 md:flex md:mt-12">
							<div>
								<h4 className="font-bold text-xl text-[#33C1AE]">+240% ROI</h4>
								<p className="mt-4 text-desktop-paragraph">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
								</p>
							</div>
							<div className="mt-[30px] md:mt-0">
								<h4 className="font-bold text-xl text-[#33C1AE]">-8% Churn</h4>
								<p className="mt-4 text-desktop-paragraph">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature24;
