const HighlightText = () => (
	<div className="md:w-1/2 md:px-[102px] h-full">
		<div className="flex items-center h-full">
			<div>
				<h2 className="font-medium w-[279px] md:w-auto m-auto text-center text-mobile-h2 md:text-desktop-h2 text-slate-headline md:text-left">
					Highlight a key selling point
				</h2>
				<p className="pt-6 text-center text-desktop-paragraph md:text-left">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
				<div className="mt-8">
					<div className="relative flex items-center px-2 py-2 bg-white rounded-2xl">
						<div className="bg-[#F4E3B8] rounded-2xl w-[54px] h-[54px] p-[18px]">
							<img src="/assets/features/receipt.svg" className="w-5" />
						</div>
						<p className="pl-4 font-medium text-desktop-paragraph text-slate-headline">
							Replaces ExpenseMonkey
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
							Replaces Recurrrly
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
			</div>
		</div>
	</div>
);

const Feature13 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px]">
			<div className="mx-6 md:m-auto max-w-default rounded-3xl md:overflow-y-hidden">
				<div className="items-center justify-center h-full md:flex">
					<HighlightText />
					<div className="relative mt-8 md:w-1/2 md:mt-0">
						<img src="/assets/features/feature13banner.svg" alt="Banner" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature13;
