import DownloadIcon from '@heroicons/react/outline/DownloadIcon';

const PrimaryButton = () => (
	<div>
		<button className="flex items-center justify-center w-full px-12 py-4 m-auto space-x-2 font-medium text-white transition-all duration-300 rounded-lg text-desktop-paragraph font-dm-sans bg-slate-blue filter hover:brightness-150 md:w-auto">
			<span>Download for free</span>
			<DownloadIcon className="w-5" />
		</button>
	</div>
);

const CTA5 = () => (
	<section className="py-12 md:py-[90px] bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end px-6 md:px-0 font-dm-sans">
		<div className="text-center max-w-default md:justify-center md:flex md:m-auto">
			<div>
				<div className="m-auto max-w-[558px]">
					<span className="px-6 py-2 rounded-full bg-slate-orange text-[15px] font-bold text-white uppercase">
						NEW!
					</span>
					<h2 className="mt-8 font-medium leading-snug md:mt-12 text-mobile-h2 md:text-desktop-h2 text-slate-headline">
						This SaaS template gets you up and running in no time.
					</h2>
					<div className="mt-8 md:mt-12">
						<PrimaryButton />
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default CTA5;
