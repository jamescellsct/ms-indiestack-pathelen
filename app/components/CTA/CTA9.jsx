import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';

const TryItFreeButton = () => (
	<button className="flex items-center justify-center w-full px-12 py-4 space-x-3 rounded-lg bg-slate-blue hover:brightness-125">
		<span className="text-white"> Try It Free </span>
		<ArrowRightIcon className="w-5 text-white" />
	</button>
);

const CTA9 = () => (
	<section className="bg-slate-light font-dm-sans">
		<div className="py-12 mx-6 md:py-[90px] md:m-auto max-w-default">
			<div className="px-6 py-12 md:py-16 md:px-16 bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-3xl">
				<div className="flex flex-col items-center justify-between md:flex-row">
					<h2 className="font-medium leading-tight text-center text-mobile-h2 text-slate-headline">
						Spin up a SaaS website in minutes.
					</h2>
					<div className="w-full mt-8 md:w-auto md:mt-0">
						<TryItFreeButton />
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default CTA9;
