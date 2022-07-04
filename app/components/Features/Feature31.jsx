const Feature31 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
			<div className="m-auto max-w-default">
				<div className="flex flex-col items-center md:flex-row">
					<div id="left" className="h-full">
						<div className="flex flex-col justify-between h-full">
							<div className="flex">
								<p className="font-bold text-[26px] text-[#19313C] opacity-20 mr-4">
									01
								</p>
								<div className="max-w-[300px] ml-4">
									<p className="text-xl font-bold">A simple heading</p>
									<p className="mt-4 text-base font-normal text-slate-body">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</div>
							</div>
							<div className="flex md:mt-[158px] mt-[44px]">
								<p className="font-bold text-[26px] text-[#19313C] opacity-20 mr-4">
									02
								</p>
								<div className="max-w-[300px] ml-4">
									<p className="font-bold text-[20px]">A simple heading</p>
									<p className="mt-4 text-base font-normal text-slate-body">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="ml-[30px] mr-[30px] mt-[81px] md:mt-[0px]" id="center">
						<div className="w-[284px] h-[284px] md:w-[362px] md:h-[362px] bg-gradient-to-r from-feeling-moody-start rounded-full to-feeling-moody-end flex items-center justify-center">
							<img
								className="z-10 w-full h-full mt-10"
								src={'/assets/features/platform/platform2.svg'}
								alt="Platform 1"
							/>
						</div>
					</div>
					<div id="right">
						<div className="flex flex-col justify-between h-full">
							<div className="flex mt-[44px] md:mt-0">
								<p className="font-bold text-[26px] text-[#19313C] opacity-20 mr-4">
									03
								</p>
								<div className="max-w-[300px] ml-4">
									<p className="font-bold text-[20px]">A simple heading</p>
									<p className="mt-4 text-base font-normal text-slate-body">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</div>
							</div>
							<div className="flex mt-[44px] md:mt-[158px]">
								<p className="font-bold text-[26px] text-[#19313C] opacity-20 mr-4">
									04
								</p>
								<div className="max-w-[300px] ml-4">
									<p className="font-bold text-[20px]">A simple heading</p>
									<p className="mt-4 text-base font-normal text-slate-body">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature31;
