import DownloadIcon from '@heroicons/react/outline/DownloadIcon';

const PrimaryButton = () => (
	<div>
		<button className="flex items-center justify-center w-full px-12 py-4 m-auto space-x-2 font-medium text-white transition-all duration-300 rounded-lg text-desktop-paragraph font-dm-sans bg-slate-blue filter hover:brightness-150 md:w-auto">
			<span>Download for free</span>
			<DownloadIcon className="w-5" />
		</button>
	</div>
);

const CTA6 = () => (
	<section>
		<div className="bg-cover bg-cta6 font-dm-sans">
			<div className="bg-[#12141A] bg-opacity-90 py-12 md:py-[90px] px-6 md:px-0">
				<div className="m-auto max-w-default">
					<div className="m-auto max-w-[558px] text-center">
						<span className="px-6 py-2 rounded-full bg-slate-orange text-[15px] font-bold text-white uppercase">
							NEW!
						</span>
						<h2 className="mt-8 font-medium leading-snug text-white md:mt-12 text-mobile-h2 md:text-desktop-h2">
							This SaaS template gets you up and running in no time.
						</h2>
						<div className="mt-8 md:mt-12">
							<PrimaryButton />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default CTA6;
