const CookieBanner = () => (
	<div>
		<div className="flex px-4 py-3 bg-white rounded-full space-x-7 md:min-w-[460px]">
			<img src="/assets/footers/cookie.svg" />
			<p className="text-sm font-normal text-slate-body">
				By using our website you agree to our <u>cookie</u> policy.
			</p>
		</div>
	</div>
);

const Footer3 = () => (
	<footer className="bg-slate-light font-dm-sans">
		<div className="max-w-default py-12 md:py-[90px] mx-6 md:m-auto">
			<div>
				<div className="md:space-x-12 md:flex text-slate-headline">
					<div className="w-full">
						<div className="md:my-0">
							<img className="h-8" src="/assets/footers/saaslogo.svg" />
						</div>
					</div>
					<div className="w-full mt-[42px] md:mt-0">
						<div>
							<p className="text-base font-medium uppercase">Why SaaS Blocks?</p>
							<ul className="mt-6 space-y-4">
								<a href="">
									<li className="mt-4 text-sm font-normal">Highly flexible</li>
								</a>
								<a href="">
									<li className="mt-4 text-sm font-normal">Copy & paste</li>
								</a>
								<a href="">
									<li className="mt-4 text-sm font-normal">
										Any layout imaginable
									</li>
								</a>
								<a href="">
									<li className="mt-4 text-sm font-normal">Get started faster</li>
								</a>
								<a href="">
									<li className="mt-4 text-sm font-normal">
										Focus on what matters
									</li>
								</a>
							</ul>
						</div>
					</div>
					<div className="w-full  mt-[42px] md:mt-0">
						<div>
							<p className="text-base font-medium uppercase">Benefits</p>
							<ul className="mt-6 space-y-4">
								<a href="">
									<li className="mt-4 text-sm font-normal">
										Made specifically for SaaS
									</li>
								</a>
								<a href="">
									<li className="mt-4 text-sm font-normal">
										Bigger variety of blocks
									</li>
								</a>
								<a href="">
									<li className="mt-4 text-sm font-normal">
										Continously expanded
									</li>
								</a>
								<a href="">
									<li className="mt-4 text-sm font-normal">
										Webflow coming soon
									</li>
								</a>
								<a href="">
									<li className="mt-4 text-sm font-normal">HTML coming soon</li>
								</a>
							</ul>
						</div>
					</div>
					<div className="w-full mt-[42px] md:mt-0">
						<div>
							<p className="text-base font-medium uppercase">Company</p>
							<ul className="mt-6 space-y-4">
								<a href="">
									<li className="mt-4 text-sm font-normal">About</li>
								</a>
								<a href="">
									<li className="mt-4 text-sm font-normal">Contact</li>
								</a>
								<a href="">
									<li className="mt-4 text-sm font-normal">Privacy</li>
								</a>
								<a href="">
									<li className="mt-4 text-sm font-normal">Terms</li>
								</a>
								<a href="">
									<li className="mt-4 text-sm font-normal">Contact</li>
								</a>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="space-y-6 mt-[60px] md:space-x-6 md:flex md:space-y-0">
				<div className="flex items-center space-x-6">
					<p className="text-[13px]">© SaaS Blocks</p>
					<p className="text-[13px]">Terms</p>
					<p className="text-[13px]">Privacy</p>
				</div>
				<CookieBanner />
			</div>
		</div>
	</footer>
);

export default Footer3;
