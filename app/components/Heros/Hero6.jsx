import XIcon from '@heroicons/react/outline/XIcon';
import { useState } from 'react';
import MockupPhone from "../../../assets/heros/mockupphone.svg"
import SaasLogoImg from "../../../assets/heros/saaslogo.svg";
import MenuImg from "../../../assets/heros/menu.svg";

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
		name: 'Case Studies',
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

const Nav = ({ setShowMobileMenu }) => (
	<nav>
		<div className="m-auto max-w-default">
			<div className="md:h-[130px] flex items-center justify-between">
				<div className="flex items-center">
					<a href="#">
						<img
							className="h-[42px] w-[200px] md:w-auto md:h-auto"
							src={SaasLogoImg}
							alt="Logo"
						/>
					</a>
					<div className="hidden md:block">
						<ul className="hidden ml-12 space-x-12 font-medium md:flex text-slate-headline">
							<Navlink links={linkArray} />
						</ul>
					</div>
				</div>
				<div className="block md:hidden">
					<img
						onClick={() => setShowMobileMenu(true)}
						className="w-6 h-6 md:w-8 md:h-8"
						src={MenuImg}
						alt="Menu"
					/>{' '}
				</div>
				<div className="hidden md:block">
					<div className="space-x-3">
						<button className="bg-transparent border-2 rounded-lg border-slate-blue py-[10px] px-6 text-slate-blue font-medium hover:bg-slate-blue hover:text-white duration-300 transition-all">
							Android App
						</button>
						<button className="bg-transparent border-2 rounded-lg border-slate-blue py-[10px] px-6 text-slate-blue font-medium hover:bg-slate-blue hover:text-white duration-300 transition-all">
							iOS App
						</button>
					</div>
				</div>
			</div>
		</div>
	</nav>
);

const MobileMenu = ({ setShowMobileMenu }) => (
	<section className="md:hidden">
		<div className="absolute top-0 w-full min-h-[295px] p-2">
			<div className="w-full p-6 bg-white rounded-2xl">
				<div className="flex items-center justify-between">
					<a href="#">
						<img
							className="h-[42px] w-[200px] md:h-auto"
							src={SaasLogoImg}
							alt="Logo"
						/>
					</a>
					<div className="">
						<ul className="ml-12 space-x-12 font-medium md:flex text-slate-headline">
							<XIcon
								onClick={() => setShowMobileMenu(false)}
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

const Hero6 = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<section className="pt-6 overflow-hidden bg-slate-light font-dm-sans md:pt-0 md:px-0">
			<div className="px-6">
				<Nav setShowMobileMenu={setShowMobileMenu} />
			</div>
			{showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
			<section className="px-6">
				<div className="mt-20 text-center max-w-[790px] m-auto">
					<h1 className="font-medium leading-snug text-mobile-h1 md:text-desktop-h1 text-slate-headline">
						Billing Simplified
					</h1>
					<p className="text-slate-body text-desktop-subheading mt-6 md:mt-[30px] ">
						Start billing like a pro and get paid within minutes.
					</p>
					<div className="mt-12">
						<button className="w-full px-8 py-4 text-white rounded-lg bg-slate-blue text-desktop-paragraph md:w-auto filter hover:brightness-125">
							Download the app
						</button>
					</div>
					<div className="flex justify-center mt-12 md:mt-20 pb-12 md:pb-[90px] relative">
						<div className="absolute top-0 w-[1000px] mt-32 bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-full h-[1000px]"></div>
						<div className="absolute top-0 w-[1000px] mt-32 bg-gradient-to-b from-transparent to-white rounded-full h-[1000px]"></div>
						<img
							className="relative"
							src={MockupPhone}
							alt="Mockup"
						/>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Hero6;
