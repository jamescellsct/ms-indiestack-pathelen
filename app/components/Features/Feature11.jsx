import { useState } from 'react';

const Header = () => (
	<section className="pt-12 md:pt-[90px] max-w-[680px] m-auto">
		<div>
			<h2 className="font-medium leading-tight text-center text-slate-headline text-mobile-h2 md:text-desktop-h2">
				Tabs are a simple way to highlight your app's features.
			</h2>
			<h5 className="font-normal mt-[30px] text-desktop-subheading text-slate-body text-center">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</h5>
		</div>
	</section>
);

const MenuItems = [
	{
		name: 'Sample Feature 1',
		id: 'sample-feature-1',
	},
	{
		name: 'Sample Feature 2',
		id: 'sample-feature-2',
	},
];

const TabMenu = ({ selectedID, setSelectedID }) => (
	<section className="md:pt-[44px] md:mr-[30px]">
		<div className="flex justify-center w-full md:w-auto md:justify-start">
			<div className="w-full space-y-4 md:w-auto">
				{MenuItems.map((item, index) => (
					<div
						onClick={() => setSelectedID(item.id)}
						key={index}
						className={`hover:bg-white hover:shadow-slight transition-all duration-300 w-full md:min-w-[264px] px-4 py-[14px] flex items-center rounded-2xl cursor-pointer ${
							item.id == selectedID && 'bg-white shadow-slight'
						}`}
					>
						<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
							<img src="/assets/features/database.svg" alt="Database" />
						</div>
						<p className="ml-4 text-desktop-paragraph"> {item.name} </p>
					</div>
				))}
			</div>
		</div>
	</section>
);

const Feature11 = () => {
	const [selectedID, setSelectedID] = useState(MenuItems[0].id);
	return (
		<section className="min-h-screen bg-slate-light font-dm-sans">
			<div className="mx-6 md:mx-0" id={'feature-7-container'}>
				<Header />
			</div>
			<div className="pb-[90px] mx-6 pt-[26px] max-w-default md:m-auto">
				<div className="flex flex-col justify-center md:flex-row">
					<div>
						<TabMenu selectedID={selectedID} setSelectedID={setSelectedID} />
					</div>
					<div className="mt-[44px]">
						<div className="p-8 rounded-3xl bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end">
							<img src="/assets/features/showcase-area.svg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature11;
