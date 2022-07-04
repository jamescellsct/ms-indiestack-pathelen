const InputWithButton = () => (
	<div className="flex justify-between max-w-md px-2 py-2 m-auto border-opacity-10 border-[#19313C] border-2 rounded-lg focus-within:border-slate-blue transition-all duration-300">
		<input
			className="w-1/2 text-[18px] bg-transparent px-4 outline-none md:w-8/12 focus:outline-non font-dm-sans"
			type="email"
			placeholder="Email"
		></input>
		<button className="w-1/2 px-6 py-3 text-white transition-all duration-300 rounded-lg outline-none filter hover:brightness-125 focus:outline-none md:w-4/12 bg-slate-blue font-dm-sans">
			Get Started
		</button>
	</div>
);

const PrimaryButton = () => (
	<div>
		<button className="flex items-center justify-center w-full px-12 py-4 m-auto space-x-2 font-medium text-white transition-all duration-300 rounded-lg text-desktop-paragraph font-dm-sans bg-slate-blue filter hover:brightness-150 md:w-auto">
			<span>Get Started</span>
		</button>
	</div>
);

const CTA7 = () => (
	<section className="py-12 md:py-[90px] bg-slate-light px-6 md:px-0 font-dm-sans">
		<div className="text-center max-w-default md:justify-center md:flex md:m-auto">
			<div>
				<div className="m-auto max-w-[558px]">
					<span className="px-6 py-2 rounded-full bg-slate-orange text-[15px] font-bold text-white uppercase">
						NEW!
					</span>
					<h2 className="mt-8 font-medium leading-snug md:mt-12 text-mobile-h2 md:text-desktop-h2 text-slate-headline">
						This SaaS template gets you up and running in no time.
					</h2>
					<div className="hidden mt-8 md:mt-12 md:block">
						<InputWithButton />
					</div>
					<div className="mt-8 md:mt-12 md:hidden">
						<input
							className="w-full py-4 pl-6 bg-transparent border-2 rounded-lg border-slate-border text-desktop-paragraph"
							type="email"
							placeholder="Enter your email"
						></input>
						<div className="mt-2">
							<PrimaryButton />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default CTA7;
