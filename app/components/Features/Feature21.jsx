import ArrowRight from '@heroicons/react/solid/ArrowRightIcon';

/**
 *
 * @returns Left Side Section With Text
 */

const HighlightText = () => (
	<div className="md:w-1/2 md:px-[102px] h-full">
		<div className="flex items-center h-full">
			<div>
				<h2 className="font-medium text-mobile-h2 md:text-desktop-h2 text-slate-headline">
					{' '}
					Highlight a key selling point{' '}
				</h2>
				<p className="pt-6 text-desktop-paragraph">
					{' '}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
				</p>
				<div className="mt-8">
					<div className="relative flex items-center px-2 py-2 bg-white rounded-2xl">
						<div className="bg-[#F4E3B8] rounded-2xl w-[54px] h-[54px] p-[18px]">
							<img src="/assets/features/receipt.svg" className="w-5" />
						</div>
						<p className="pl-4 font-medium text-desktop-paragraph text-slate-headline">
							{' '}
							Replaces ExpenseMonkey{' '}
						</p>
						<div className="pl-7">
							<img
								className="absolute w-5 top-3 right-3"
								src="/assets/features/greentick.svg"
								alt="Green Tick"
							/>
						</div>
					</div>
				</div>
				<div className="mt-3">
					<div className="relative flex items-center px-2 py-2 bg-white rounded-2xl">
						<div className="bg-[#FBE7E2] rounded-2xl w-[54px] h-[54px] p-[18px]">
							<img src="/assets/features/reload.svg" className="w-5" />
						</div>
						<p className="pl-4 font-medium text-desktop-paragraph text-slate-headline">
							{' '}
							Replaces Recurrrly{' '}
						</p>
						<div className="pl-7">
							<img
								className="absolute w-5 top-3 right-3"
								src="/assets/features/greentick.svg"
								alt="Green Tick"
							/>
						</div>
					</div>
				</div>
				<div className="mt-8">
					<a href="">
						<div className="flex">
							<p className="text-desktop-paragraph text-slate-body hover:underline">
								Learn about this feature
							</p>
							<ArrowRight className="w-4 ml-4" />
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
);

const Feature21 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px]">
			<div className="m-auto mx-6 max-w-default rounded-3xl md:mx-auto">
				<div className="items-center justify-center h-full md:flex">
					<HighlightText />
					<div className="md:w-1/2 mt-9 md:mt-0">
						<div className="md:my-[32px] md:mx-[28px]">
							<div className="bg-gradient-to-r from-feeling-moody-start flex justify-center items-center to-feeling-moody-end m-auto h-[326px] w-[326px] md:h-[516px] md:w-[516px] rounded-full p-[42px]">
								<img
									src="/assets/features/common/invoice-detail-mockup.svg"
									alt="Mockup"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature21;
