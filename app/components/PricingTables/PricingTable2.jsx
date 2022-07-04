import { useState } from 'react';
import CheckMark from '@heroicons/react/solid/CheckIcon';

const DiscountArrow = () => (
	<div className="absolute hidden md:block -top-6 -left-24">
		<div className="flex flex-col items-center justify-center">
			<p className="font-normal font-dm-sans"> Save 20% </p>
			<img src="/assets/pricing-tables/arrow.svg" />
		</div>
	</div>
);

const PricingTab = ({ isYearly, setIsYearly }) => (
	<div className="rounded-l-full rounded-r-full bg-slate-headline bg-opacity-5 p-[5px] max-w-[260px] m-auto relative">
		<div className="flex justify-center">
			<DiscountArrow />
			<div
				onClick={() => setIsYearly(true)}
				className={`w-full cursor-pointer px-8 py-3 transition-all duration-300 rounded-l-full rounded-r-full ${
					isYearly ? 'bg-white' : ''
				}`}
			>
				<p> Yearly </p>
			</div>
			<div
				onClick={() => setIsYearly(false)}
				className={`w-full cursor-pointer px-8 py-3 transition-all duration-300 rounded-l-full rounded-r-full ${
					isYearly ? '' : 'bg-white'
				}`}
			>
				<p> Monthly </p>
			</div>
		</div>
	</div>
);

const CenterColumn = ({ isYearly }) => (
	<div className="border-[3px] w-full relative bg-white border-slate-blue p-[32px] rounded-3xl">
		<span className="absolute top-6 right-6 text-xs font-bold uppercase text-slate-orange px-[18px] py-[6px] rounded-full">
			Popular
		</span>
		<div>
			<div className="text-center">
				<div className="flex items-center justify-center w-12 h-12 m-auto rounded-full bg-slate-orange">
					<img src="/assets/pricing-tables/growth.svg" alt="Growth" />
				</div>
				<div className="mt-2 ml-4">
					<h4 className="text-xl font-medium"> Growth </h4>
					<p className="max-w-[243px] m-auto mt-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit.
					</p>
					<p className="mt-2 font-bold text-desktop-paragraph text-slate-body">
						{isYearly ? '$55/mo' : '$97/mo'}
					</p>
				</div>
			</div>
			<div className="flex justify-center">
				<ul className="">
					<li className="flex items-center justify-around mt-6">
						<CheckMark className="w-1/6 h-4 text-slate-blue" />
						<p className="w-5/6 text-desktop-paragraph">Lorem ipsum dolor sit amet.</p>
					</li>
					<li className="flex items-center justify-around mt-4">
						<CheckMark className="w-1/6 h-4 text-slate-blue" />
						<p className="w-5/6 text-desktop-paragraph">Lorem ipsum dolor sit amet.</p>
					</li>
					<li className="flex items-center justify-around mt-4">
						<CheckMark className="w-1/6 h-4 text-slate-blue" />
						<p className="w-5/6 text-desktop-paragraph">Lorem ipsum dolor sit amet.</p>
					</li>
					<li className="flex items-center justify-around mt-4">
						<CheckMark className="w-1/6 h-4 text-slate-blue" />
						<p className="w-5/6 text-desktop-paragraph">Lorem ipsum dolor sit amet.</p>
					</li>
					<li className="flex items-center justify-around mt-4 opacity-20">
						<CheckMark className="w-1/6 h-4 text-slate-blue" />
						<p className="w-5/6 text-desktop-paragraph">Lorem ipsum dolor sit amet.</p>
					</li>
				</ul>
			</div>
			<div className="mt-6">
				<button className="flex items-center justify-center w-full py-4 text-white rounded-lg bg-slate-blue text-desktop-paragraph filter hover:brightness-125">
					<span>Primary</span>
				</button>
			</div>
		</div>
	</div>
);

const LeftColumn = ({ isYearly }) => (
	<div className="w-full relative p-[32px] rounded-3xl bg-white">
		<div>
			<div className="text-center">
				<div className="flex items-center justify-center w-12 h-12 m-auto rounded-full bg-slate-orange">
					<img src="/assets/pricing-tables/starter.svg" alt="Growth" />
				</div>
				<div className="mt-2 ml-4">
					<h4 className="text-xl font-medium"> Starter </h4>
					<p className="max-w-[243px] m-auto mt-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit.
					</p>
					<p className="mt-2 font-bold text-desktop-paragraph text-slate-body">
						{isYearly ? '$45/mo' : '$87/mo'}
					</p>
				</div>
			</div>
			<div className="flex justify-center">
				<ul className="">
					<li className="flex items-center justify-around mt-4">
						<CheckMark className="w-1/6 h-4 text-slate-blue" />
						<p className="w-5/6 text-desktop-paragraph">Lorem ipsum dolor sit amet.</p>
					</li>
					<li className="flex items-center justify-around mt-4">
						<CheckMark className="w-1/6 h-4 text-slate-blue" />
						<p className="w-5/6 text-desktop-paragraph">Lorem ipsum dolor sit amet.</p>
					</li>
					<li className="flex items-center justify-around mt-4">
						<CheckMark className="w-1/6 h-4 text-slate-blue" />
						<p className="w-5/6 text-desktop-paragraph">Lorem ipsum dolor sit amet.</p>
					</li>
					<li className="flex items-center justify-around mt-4 opacity-20">
						<CheckMark className="w-1/6 h-4 text-slate-blue" />
						<p className="w-5/6 text-desktop-paragraph">Lorem ipsum dolor sit amet.</p>
					</li>
					<li className="flex items-center justify-around mt-4 opacity-20">
						<CheckMark className="w-1/6 h-4 text-slate-blue" />
						<p className="w-5/6 text-desktop-paragraph">Lorem ipsum dolor sit amet.</p>
					</li>
				</ul>
			</div>
			<div className="mt-6">
				<button className="flex items-center justify-center w-full py-4 border-2 rounded-lg text-slate-blue border-slate-blue text-desktop-paragraph filter hover:bg-slate-blue hover:text-white">
					<span>Secondary</span>
				</button>
			</div>
		</div>
	</div>
);

const RightColumn = ({ isYearly }) => (
	<div className="w-full relative p-[32px] rounded-3xl bg-white">
		<div>
			<div className="text-center">
				<div className="flex items-center justify-center w-12 h-12 m-auto rounded-full bg-slate-orange">
					<img src="/assets/pricing-tables/pro.svg" alt="Growth" />
				</div>
				<div className="mt-2 ml-4">
					<h4 className="text-xl font-medium"> Pro </h4>
					<p className="max-w-[243px] m-auto mt-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit.
					</p>
					<p className="mt-2 font-bold text-desktop-paragraph text-slate-body">
						{isYearly ? '$65/mo' : '$107/mo'}
					</p>
				</div>
			</div>
			<div className="flex justify-center">
				<ul className="">
					<li className="flex items-center justify-around mt-4">
						<CheckMark className="w-1/6 h-4 text-slate-blue" />
						<p className="w-5/6 text-desktop-paragraph">Lorem ipsum dolor sit amet.</p>
					</li>
					<li className="flex items-center justify-around mt-4">
						<CheckMark className="w-1/6 h-4 text-slate-blue" />
						<p className="w-5/6 text-desktop-paragraph">Lorem ipsum dolor sit amet.</p>
					</li>
					<li className="flex items-center justify-around mt-4">
						<CheckMark className="w-1/6 h-4 text-slate-blue" />
						<p className="w-5/6 text-desktop-paragraph">Lorem ipsum dolor sit amet.</p>
					</li>
					<li className="flex items-center justify-around mt-4">
						<CheckMark className="w-1/6 h-4 text-slate-blue" />
						<p className="w-5/6 text-desktop-paragraph">Lorem ipsum dolor sit amet.</p>
					</li>
					<li className="flex items-center justify-around mt-4">
						<CheckMark className="w-1/6 h-4 text-slate-blue" />
						<p className="w-5/6 text-desktop-paragraph">Lorem ipsum dolor sit amet.</p>
					</li>
				</ul>
			</div>
			<div className="mt-6">
				<button className="flex items-center justify-center w-full py-4 border-2 rounded-lg text-slate-blue border-slate-blue text-desktop-paragraph filter hover:bg-slate-blue hover:text-white">
					<span>Secondary</span>
				</button>
			</div>
		</div>
	</div>
);

const PricingTable2 = () => {
	const [isYearly, setIsYearly] = useState(true);
	return (
		<section className="bg-slate-light font-dm-sans">
			<div className="md:m-auto max-w-default py-12 md:py-[90px] mx-6">
				<div className="text-center">
					<h5 className="text-base font-bold uppercase text-slate-orange">
						A plan for everyone
					</h5>
					<div className="mt-[18px]">
						<h2 className="font-medium text-slate-headline text-mobile-h2 lg:text-desktop-h2">
							Pricing
						</h2>
					</div>
					<div className="relative mt-7">
						<PricingTab isYearly={isYearly} setIsYearly={setIsYearly} />
					</div>
					<div className="mt-[60px]">
						<div className="flex flex-col items-center justify-center space-y-4 text-left md:space-y-0 md:flex-row md:space-x-[30px]">
							<LeftColumn isYearly={isYearly} />
							<CenterColumn isYearly={isYearly} />
							<RightColumn isYearly={isYearly} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingTable2;
