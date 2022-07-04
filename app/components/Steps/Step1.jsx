const StepTile = ({ image, text, description }) => (
	<div className="bg-white rounded-3xl h-[262px] text-center py-[50px] px-8 w-full hover:shadow-sm transition-all duration-300">
		<div>
			<img className="w-12 h-12 m-auto" src={image} alt={text} />
			<div className="mb-3 mt-11">
				<span className="px-[14px] py-[5px] text-sm font-medium text-white rounded-full bg-slate-orange">
					{text}
				</span>
			</div>
			<p className="mt-3 font-normal text-desktop-paragraph text-slate-body">{description}</p>
		</div>
	</div>
);

const Step1 = () => (
	<section className="bg-slate-light">
		<div className="py-12 px-6 md:px-0 md:py-[90px] max-w-default m-auto font-dm-sans">
			<div className="text-center max-w-[589px] m-auto">
				<h5 className="text-base font-bold uppercase text-slate-orange">
					Start in seconds
				</h5>
				<h2 className="mt-[18px] font-medium text-mobile-h2 md:text-desktop-h2 text-slate-body">
					Get started in four easy steps
				</h2>
			</div>
			<div className="mt-[60px] space-y-[30px] md:space-y-0 md:space-x-[30px] md:flex">
				<StepTile
					image={'/assets/steps/mouse.svg'}
					text={'Step 1'}
					description={'Easy one click sign-up'}
				/>
				<StepTile
					image={'/assets/steps/gridview.svg'}
					text={'Step 2'}
					description={'Choose a high quality template'}
				/>
				<StepTile
					image={'/assets/steps/algorithm.svg'}
					text={'Step 3'}
					description={'Access our API'}
				/>
				<StepTile
					image={'/assets/steps/components.svg'}
					text={'Step 4'}
					description={'Generate finished templates'}
				/>
			</div>
		</div>
	</section>
);

export default Step1;
