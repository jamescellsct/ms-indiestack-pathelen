import { useState } from 'react';
import CheckMark from '@heroicons/react/solid/CheckIcon';

const CaseStudiesOne = () => {
	const [selectedPlan, setSelectedPlan] = useState({
		name: 'starter',
	});
	return (
		<section className="bg-slate-light font-dm-sans">
			<div className="md:m-auto max-w-default py-12 md:py-[90px] mx-6">
				<div className="text-center">
					<h5 className="text-base font-bold uppercase text-slate-orange">
						PATHELEN® WOUND CARE TREATMENT (PWCT) case reports
					</h5>
					<div className="mt-[18px]">
						<h2 className="font-medium text-slate-headline text-mobile-h2 lg:text-desktop-h2">
							Patient File: Ano. Nykolay A.
						</h2>
					</div>
					<div className="mt-[60px]">
						<div className="flex flex-col justify-center md:flex-row">
							<SingleTabs
								selectedPlan={selectedPlan}
								setSelectedPlan={setSelectedPlan}
							/>
							<MainPanel selectedPlan={selectedPlan} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const DetailsTab = ({ selectedPlan, setSelectedPlan }) => (
	<div
		onClick={() => setSelectedPlan({ name: 'details' })}
		className={`w-[355px] flex-1 cursor-pointer bg-white rounded-3xl p-6 ${
			selectedPlan.name == 'details' ? 'border-[3px] border-slate-blue' : ''
		}`}
	>
		<div className="flex">
			<div className="w-auto ml-4 text-left">
				<p className="text-xl font-medium text-slate-headline">Patient Details</p>
			</div>
		</div>
	</div>
);

const GrowthTab = ({ selectedPlan, setSelectedPlan }) => (
	<div
		onClick={() => setSelectedPlan({ name: 'growth' })}
		className={`w-[355px] flex-1 cursor-pointer bg-white rounded-3xl p-6 ${
			selectedPlan.name == 'growth' ? 'border-[3px] border-slate-blue' : ''
		}`}
	>
		<div className="flex">
			<div>
				<span className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
					<img src="/assets/pricing-tables/growth.svg" alt="Growth" />
				</span>
			</div>
			<div className="w-auto ml-4 text-left">
				<p className="text-xl font-medium text-slate-headline">Growth</p>
				<p className="text-[15px] mt-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit.
				</p>
				<p className="text-[15px] text-slate-body mt-1">
					<span className="font-bold">$97/mo</span> ($670 if annual - save 17%)
				</p>
			</div>
		</div>
	</div>
);

const ProTab = ({ selectedPlan, setSelectedPlan }) => (
	<div
		onClick={() => setSelectedPlan({ name: 'pro' })}
		className={`w-[355px] flex-1 cursor-pointer bg-white rounded-3xl p-6 ${
			selectedPlan.name == 'pro' ? 'border-[3px] border-slate-blue' : ''
		}`}
	>
		<div className="flex">
			<div>
				<span className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
					<img src="/assets/pricing-tables/pro.svg" alt="Pro" />
				</span>
			</div>
			<div className="w-auto ml-4 text-left">
				<p className="text-xl font-medium text-slate-headline">Pro</p>
				<p className="text-[15px] mt-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit.
				</p>
				<p className="text-[15px] text-slate-body mt-1">
					<span className="font-bold">$157/mo</span> ($670 if annual - save 17%)
				</p>
			</div>
		</div>
	</div>
);

const SingleTabs = ({ selectedPlan, setSelectedPlan }) => (
	<div className="flex flex-col space-y-3 md:mr-[15px]">
		<DetailsTab selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
		<GrowthTab selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
		<ProTab selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
	</div>
);

const MainPanel = ({ selectedPlan }) => (
	<div className="px-8 py-12 md:ml-[15px] bg-white rounded-3xl w-[362px] mt-6 md:mt-0">
		<div className="flex items-center justify-center w-12 h-12 m-auto rounded-full bg-slate-orange">
			<img
				src={`/assets/pricing-tables/${selectedPlan.name}.svg`}
				alt={`${selectedPlan.name}`}
			/>
		</div>
		<p className="mt-4 text-xl font-medium capitalize text-slate-headline">
			{selectedPlan.name}
		</p>
		<div className="mt-7">
			<ul>
				<li className="flex w-full">
					<CheckMark className="w-4" />
					<span className="w-full text-desktop-paragraph text-slate-body">
						Lorem ipsum dolor sit amet.
					</span>
				</li>
				<li className="flex w-full mt-4">
					<CheckMark className="w-4" />
					<span className="w-full text-desktop-paragraph text-slate-body">
						Lorem ipsum dolor sit amet.
					</span>
				</li>
				<li className="flex w-full mt-4 opacity-20">
					<CheckMark className="w-4" />
					<span className="w-full text-desktop-paragraph text-slate-body">
						Lorem ipsum dolor sit amet.
					</span>
				</li>
				<li className="flex w-full mt-4 opacity-20">
					<CheckMark className="w-4" />
					<span className="w-full text-desktop-paragraph text-slate-body">
						Lorem ipsum dolor sit amet.
					</span>
				</li>
				<li className="flex w-full mt-4 opacity-20">
					<CheckMark className="w-4" />
					<span className="w-full text-desktop-paragraph text-slate-body">
						Lorem ipsum dolor sit amet.
					</span>
				</li>
			</ul>
		</div>
		<div className="mt-8">
			<button className="flex items-center justify-center w-full py-4 text-white rounded-lg bg-slate-blue text-desktop-paragraph filter hover:brightness-125">
				<span>Primary</span>
			</button>
		</div>
	</div>
);

export default CaseStudiesOne;
