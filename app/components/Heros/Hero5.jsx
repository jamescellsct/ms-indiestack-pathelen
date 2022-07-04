import ShieldIcon from '@heroicons/react/outline/ShieldCheckIcon';
import ChartBarIcon from '@heroicons/react/outline/ChartBarIcon';
import LightningBoltIcon from '@heroicons/react/outline/LightningBoltIcon';
import BellIcon from '@heroicons/react/outline/BellIcon';
import XIcon from '@heroicons/react/outline/XIcon';

import { useState } from 'react';

const Navlink = ({ links }) =>
	links.map((link) => (
		<p key={link.url}>
			<a
				className="font-medium transition-all duration-300 hover:text-slate-blue"
				href={link.url}
			>
				<li>{link.name}</li>
			</a>
		</p>
	));

const linkArray = [
	{
		name: 'Industries',
		url: '#',
	},
	{
		name: 'Product',
		url: '#',
	},
	{
		name: 'Price',
		url: '#',
	},
	{
		name: 'About',
		url: '#',
	},
];

const MenuItems = [
	{
		title: 'Secure & Private',
		subtitle: 'Amet vel nulla aliquam non purus.',
		url: '#',
		icon: <ShieldIcon className="w-5 h-5 text-slate-blue" />,
	},
	{
		title: 'Simple Analytics',
		subtitle: 'Amet vel nulla aliquam non purus.',
		url: '#',
		icon: <ChartBarIcon className="w-5 h-5 text-slate-blue" />,
	},
	{
		title: 'Lightning Fast',
		subtitle: 'Amet vel nulla aliquam non purus.',
		url: '#',
		icon: <LightningBoltIcon className="w-5 h-5 text-slate-blue" />,
	},
	{
		title: 'Auto Reminders',
		subtitle: 'Amet vel nulla aliquam non purus.',
		url: '#',
		icon: <BellIcon className="w-5 h-5 text-slate-blue" />,
	},
];

const HoverMenu = () => (
	<section className="absolute rounded-2xl right-2 top-14 shadow-slight">
		<div className="mr-[-12px] w-[375px] px-4 py-6 bg-white rounded-2xl">
			{MenuItems.map((menuItem) => (
				<a href={menuItem.url}>
					<div className="p-4 hover:bg-[#114BE0] rounded-2xl hover:bg-opacity-5 transition-all duration-300 cursor-pointer">
						<div className="flex">
							<div className="p-4 bg-[#114BE0] bg-opacity-10 rounded-xl">
								{menuItem.icon}
							</div>
							<div className="ml-4">
								<p className="font-medium">{menuItem.title}</p>
								<p className="text-opacity-75 text-slate-body text-[15px]">
									{menuItem.subtitle}
								</p>
							</div>
						</div>
					</div>
				</a>
			))}
		</div>
	</section>
);

const MobileMenu = ({ setShowMenu }) => (
	<section className="md:hidden">
		<div className="absolute top-0 w-full min-h-[295px] p-2">
			<div className="w-full p-6 bg-white rounded-2xl">
				<div className="flex items-center justify-between">
					<a href="#">
						<img
							className="h-[42px] w-[200px] md:h-auto"
							src="/assets/heros/saaslogo.svg"
							alt="Logo"
						/>
					</a>
					<div className="">
						<ul className="ml-12 space-x-12 font-medium md:flex text-slate-headline">
							<XIcon
								onClick={() => setShowMenu(false)}
								className="w-6 h-6 text-slate-headline"
							/>
						</ul>
					</div>
				</div>
				<div>
					<ul className="mt-6 space-y-4">
						<Navlink links={linkArray} />
					</ul>
				</div>
				<div>
					<button className="w-full mt-5 bg-slate-blue py-[10px] text-white rounded-lg px-6">
						Button
					</button>
				</div>
			</div>
		</div>
	</section>
);

const Nav = ({ showMenu, setShowMenu }) => (
	<nav>
		<div className="px-6 pt-6 m-auto md:pt-[53px] max-w-default md:px-0">
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<a href="#">
						<img
							className="h-[42px] w-[200px] md:w-auto cursor-pointer md:h-auto"
							src="/assets/heros/saaslogo.svg"
							alt="Logo"
						/>
					</a>
				</div>
				<div className="relative">
					{!showMenu ? (
						<img
							onClick={() => setShowMenu(!showMenu)}
							className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
							src="/assets/heros/menu.svg"
							alt="Menu"
						/>
					) : (
						<XIcon
							onClick={() => setShowMenu(!showMenu)}
							className="w-6 h-6 cursor-pointer md:w-8 md:h-8"
						/>
					)}
					<div className="hidden md:block">{showMenu && <HoverMenu />}</div>
				</div>
			</div>
		</div>
	</nav>
);

const ImageSection = () => (
	<img className="max-h-[659px]" src="/assets/heros/invoicedetailbanner.svg" alt="" />
);

const Hero5 = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<section className="bg-center bg-cover font-dm-sans bg-hero-5">
			<div className="bg-cover bg-trans-grad">
				<Nav setShowMenu={setShowMenu} showMenu={showMenu} />
				{showMenu && <MobileMenu setShowMenu={setShowMenu} />}
				<section className="px-6 mt-20 md:mt-[102px] pb-[60px] md:px-0">
					<div className="m-auto max-w-default">
						<div className="flex flex-col items-center md:flex-row">
							<div className="w-full md:mr-[17px] order-2 md:order-1">
								<div className="mt-[48px] md:mt-0">
									<h1 className="font-medium text-mobile-h1 md:text-desktop-h1 text-slate-headline">
										Billing Simplified
									</h1>
									<p className="text-slate-body text-desktop-subheading mt-6 md:mt-[30px]">
										A subheading that addresses the what, the why we should care
										and hopefully some social proof.
									</p>
									<div className="mt-9">
										<button className="w-full px-8 py-4 text-white rounded-lg bg-slate-blue text-desktop-paragraph md:w-auto filter hover:brightness-125">
											Download the app
										</button>
										<p className="text-slate-body text-[13px] mt-3 hidden md:block">
											No credit card required
										</p>
									</div>
									<div className="mt-12 md:mr-5 pb-12 md:pb-[90px]">
										<div className="flex flex-col items-start justify-center px-4 py-6 transition-all duration-300 bg-white bg-opacity-40 md:pt-5 md:pr-10 md:flex-row md:pl-7 md:pb-9 rounded-2xl">
											<img
												className="w-16 h-16 m-auto"
												src="/assets/heros/person1.svg"
												alt="Person Profile Picture"
											/>
											<div className="mt-4 text-center md:mt-0 md:ml-7 md:text-left">
												<p className=" text-slate-body text-desktop-paragraph">
													“A testimonial that absolutely nails the value
													proposition in a sentence or two”.
												</p>
												<p className="text-[13px] text-slate-body opacity-50 mt-3">
													Cameron Williamson, CEO, Stripe
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="order-1 w-full md:order-2">
								<div className="flex justify-center md:justify-end">
									<ImageSection />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default Hero5;
