import ChevronDownIcon from '@heroicons/react/outline/ChevronDownIcon';
import { useState } from 'react';

const tabs = [
	{
		name: 'Tab One',
		id: 'tab-one',
	},
	{
		name: 'Tab Two',
		id: 'tab-two',
	},
	{
		name: 'Tab Three',
		id: 'tab-three',
	},
	{
		name: 'Tab Four',
		id: 'tab-four',
	},
];

const MobileMenu = () => (
	<div>
		<div></div>
	</div>
);

const Header = ({ openMenu, setOpenMenu, selectedID, setSelectedID }) => (
	<section className="max-w-[680px] m-auto">
		<div>
			<h2 className="font-medium leading-tight text-center text-mobile-h2 md:text-desktop-h2 text-slate-headline">
				Tabs are a simple way to highlight your app's features.
			</h2>
			<h5 className="font-normal mt-[30px] text-desktop-subheading text-slate-body text-center">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</h5>
		</div>
		<div className="hidden md:block mt-[54px]">
			<div
				className={`items-center justify-center md:h-auto overflow-hidden space-y-4 md:space-y-0 md:flex md:space-x-6`}
			>
				{tabs.map((tab) => (
					<div
						onClick={() => setSelectedID(tab.id)}
						key={tab.id}
						className={` ${
							selectedID == tab.id
								? 'bg-slate-blue text-white'
								: 'bg-[#f2f2f2] text-slate-body'
						} px-6 py-4 md:py-2 rounded-full cursor-pointer  group hover:bg-slate-blue hover:text-white`}
					>
						<span className="group-hover:text-white">{tab.name}</span>
					</div>
				))}
			</div>
		</div>
		<div className="box-border relative mt-8 md:hidden">
			<ChevronDownIcon className="absolute right-0 w-4 mr-10 top-5" />
			<select className="w-full px-6 py-4 bg-transparent border-2 border-gray-200 rounded-full outline-none appearance-none focus:outline-none">
				{tabs.map((tab) => (
					<option key={tab.id} value={tab.id}>
						{tab.name}
					</option>
				))}
			</select>
		</div>
	</section>
);

/**
 * USE 'selectedID' to set the currently selected tab.
 */

const SelectedDetailTab = ({ selectedID }) => {
	if (selectedID == 'tab-one') {
		return (
			<div className="flex items-center justify-center p-8 mx-6 md:mx-0 rounded-3xl bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end">
				<img src="/assets/features/showcase-area.svg" alt="" />
			</div>
		);
	}
	if (selectedID == 'tab-two') {
		return (
			<div className="flex items-center justify-center p-8 mx-6 md:mx-0 rounded-3xl bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end">
				<img src="/assets/features/showcase-area.svg" alt="" />
			</div>
		);
	}
	if (selectedID == 'tab-three') {
		return (
			<div className="flex items-center justify-center p-8 mx-6 md:mx-0 rounded-3xl bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end">
				<img src="/assets/features/showcase-area.svg" alt="" />
			</div>
		);
	}
	if (selectedID == 'tab-four') {
		return (
			<div className="flex items-center justify-center p-8 mx-6 md:mx-0 rounded-3xl bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end">
				<img src="/assets/features/showcase-area.svg" alt="" />
			</div>
		);
	}
};

const Feature7 = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [selectedID, setSelectedID] = useState(tabs[0].id);

	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px]">
			<div className="mx-6 md:mx-0" id={'feature-7-container'}>
				<Header
					openMenu={openMenu}
					setOpenMenu={setOpenMenu}
					selectedID={selectedID}
					setSelectedID={setSelectedID}
				/>
			</div>
			<div className="m-auto mt-12 max-w-default">
				<SelectedDetailTab selectedID={selectedID} />
			</div>
		</section>
	);
};

export default Feature7;
