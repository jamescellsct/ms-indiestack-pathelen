const Feature23 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
			<div className="m-auto max-w-default">
				<h2 className="text-mobile-h2 md:text-desktop-h2 font-medium text-slate-headline max-w-[558px] leading-tight">
					Create the perfect website in seconds.
				</h2>
				<p className="text-desktop-subheading mt-8 text-slate-body max-w-[460px]">
					Here is a section with two features or points and a subheading.
				</p>
			</div>
			<div className="mt-[60px]">
				<div className="m-auto md:flex max-w-default">
					<div className="md:min-w-[362px]">
						<div className="bg-white rounded-3xl py-9 px-[30px]">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
								<img src="/assets/features/tiktok.svg" alt="Tiktok" />
							</div>
							<h4 className="mt-4 text-xl font-medium">A simple heading </h4>
							<p className="mt-4 text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className="md:min-w-[362px]">
						<div className="bg-white rounded-3xl mt-[30px] md:mt-0 md:ml-[30px] py-9 px-[30px]">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
								<img src="/assets/features/messenger.svg" alt="Messenger" />
							</div>
							<h4 className="mt-4 text-xl font-medium">A simple heading </h4>
							<p className="mt-4 text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className="md:min-w-[362px]">
						<div className="bg-white rounded-3xl mt-[30px] md:mt-0 md:ml-[30px] py-9 px-[30px]">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
								<img src="/assets/features/privacy.svg" alt="Privacy" />
							</div>
							<h4 className="mt-4 text-xl font-medium">A simple heading </h4>
							<p className="mt-4 text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature23;
