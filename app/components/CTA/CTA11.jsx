const AppStoreButton = () => (
	<button className="flex items-center justify-between px-6 py-3 space-x-3 text-base font-medium text-white transition-all duration-300 rounded-lg outline-none bg-slate-blue font-dm-sans focus:outline-none filter hover:brightness-125">
		<span>Download in App Store</span>
		<img className="w-4" src="/assets/cta/Apple.svg" />
	</button>
);

const PlayStoreButton = () => (
	<button className="flex items-center justify-between px-6 py-3 space-x-3 text-base font-medium text-white transition-all duration-300 rounded-lg outline-none bg-slate-blue font-dm-sans focus:outline-none filter hover:brightness-125">
		<span>Download in Google Play</span>
		<img className="w-4" src="/assets/cta/GooglePlay.svg" />
	</button>
);

const CTA11 = () => (
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
					<div className="flex flex-col mt-8 space-y-3 md:space-y-0 md:space-x-4 md:flex-row md:mt-12">
						<AppStoreButton />
						<PlayStoreButton />
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default CTA11;
