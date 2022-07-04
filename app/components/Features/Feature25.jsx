const Feature25 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px] px-6 md:px-0">
			<div className="m-auto max-w-default">
				<div className="justify-between md:flex">
					<div className="max-w-[362px]">
						<h2 className="font-medium leading-tigh t text-mobile-h2 text-slate-heading">
							Simplicity is key. Elevate your copy with a simple design.
						</h2>
						<p className="mt-8 text-desktop-subheading text-slate-body">
							Here is a section with two features or points and a subheading.
						</p>
					</div>
					<div className="md:flex md:ml-32">
						<div className="mt-8 md:mt-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
								<img src="/assets/features/instagram.svg" alt="Instagram" />
							</div>
							<h4 className="mt-4 text-xl font-medium">A simple heading </h4>
							<p className="mt-4 text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
							<a href="">
								<p className="mt-4 cursor-pointer text-desktop-paragraph text-slate-body hover:underline">
									Details
								</p>
							</a>
						</div>
						<div className="mt-8 md:mt-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
								<img src="/assets/features/messenger.svg" alt="Privacy" />
							</div>
							<h4 className="mt-4 text-xl font-medium">A simple heading </h4>
							<p className="mt-4 text-desktop-paragraph">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
							<a href="">
								<p className="mt-4 cursor-pointer text-desktop-paragraph text-slate-body hover:underline">
									Details
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature25;
