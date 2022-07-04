import BellIcon from '@heroicons/react/outline/BellIcon';
import HomeIcon from '@heroicons/react/outline/HomeIcon';
import BriefcaseIcon from '@heroicons/react/outline/BriefcaseIcon';
import CashIcon from '@heroicons/react/outline/CashIcon';
import ReceiptTaxIcon from '@heroicons/react/outline/ReceiptTaxIcon';

const MenuRow = ({ name, icon }) => (
	<div className="flex items-center space-x-[30px] mt-[58px] cursor-pointer">
		<div className="text-[#1E2026] opacity-40 w-8">{icon}</div>

		<p className="text-[#1E2026] text-[21px] opacity-40 hover:opacity-100 transition-all duration-300 font-medium">
			{name}
		</p>
	</div>
);

const MenuCard = () => (
	<div className="max-w-[363px] bg-white min-w-[363px] rounded-2xl">
		<div className="px-10 py-10">
			<div className="flex items-center">
				<div className="">
					<img
						className="w-[72px] rounded-full "
						src={'/assets/features/annette.svg'}
						alt={'Kathrn M'}
					/>
				</div>
				<div className="ml-5">
					<p className="text-slate-headline text-[25px]"> Kathryn M. </p>
				</div>
				<div className="ml-5">
					<p className="text-[#A3ADB1]">
						<BellIcon className="w-6" />
					</p>
				</div>
			</div>
			<div className="-mt-6">
				<MenuRow name={'Home'} icon={<HomeIcon />} />
				<MenuRow name={'Business'} icon={<BriefcaseIcon />} />
				<MenuRow name={'Invoices'} icon={<CashIcon />} />
				<MenuRow name={'Bank Accounts'} icon={<HomeIcon />} />
				<MenuRow name={'Reports'} icon={<ReceiptTaxIcon />} />
			</div>
		</div>
	</div>
);

const Feature9 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-12 md:py-[90px]">
			<div className="bg-white mx-6 md:m-auto max-w-default rounded-3xl md:h-[580px] md:overflow-y-hidden">
				<div className="items-center justify-center h-full md:flex">
					<div className="pt-10 mx-6 md:pt-0 md:mx-0 md:w-1/2">
						<div className="md:my-[32px] md:mx-7">
							<img src="/assets/features/feature9banner.svg" alt="banner" />
						</div>
					</div>
					<div className="md:w-1/2 px-6 md:px-[102px] h-full">
						<div className="flex items-center h-full">
							<div className="py-12 text-center md:py-0">
								<h2 className="font-medium leading-snug text-mobile-h2 md:text-desktop-h2 text-slate-headline">
									Highlight a key selling point
								</h2>
								<p className="pt-6 text-desktop-subheading">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
								<p className="pt-6 underline cursor-pointer text-desktop-paragraph">
									Learn more
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature9;
