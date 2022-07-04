import XIcon from '@heroicons/react/outline/XIcon';
import { useState } from 'react';
import GroupBannerImg from "../../../assets/heros/groupbanner.svg";
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
							Button
						</button>
						<button className="bg-transparent border-2 rounded-lg border-slate-blue py-[10px] px-6 text-slate-blue font-medium hover:bg-slate-blue hover:text-white duration-300 transition-all">
							Sign Up
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

const Hero9 = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<section>
			<div>
				<div className="md:max-h-screen pt-6 pb-[50px] md:pb-[90px] md:px-0 bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end font-dm-sans md:pt-0 relative">
					<div className="px-6">
						<Nav setShowMobileMenu={setShowMobileMenu} />
					</div>
					{showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
					<section className="relative px-6 m-auto md:px-0 max-w-default">
						<div className="mt-[50px] md:mt-20 text-center m-auto">
							<div className="max-w-[790px] m-auto">
								<h1 className="font-medium text-slate-headline text-mobile-h1 md:text-desktop-h1">
									Billing simplified.
								</h1>
								<p className="mt-[30px] text-desktop-subheading">
									A subheading that addresses the what, the why we should care and
									hopefully some social proof.
								</p>
							</div>
							<div className="flex flex-col justify-center mt-8 md:space-x-4 md:flex-row md:mt-10">
								<button className="px-8 py-4 font-medium text-white rounded-lg bg-slate-blue text-desktop-paragraph filter hover:brightness-125">
									Sign up for free
								</button>
								<button className="px-8 py-4 mt-2 font-medium transition-all duration-300 border-2 rounded-lg md:mt-0 text-slate-blue border-slate-blue hover:text-white hover:bg-slate-blue text-desktop-paragraph">
									Product Preview
								</button>
							</div>
							<div className="relative mt-[56px] md:mt-20 flex items-center justify-center h-[194px] md:h-[680px] bg-white bg-opacity-70 rounded-3xl">
								<img
									className="h-[188px] md:h-auto mt-8 md:mt-[100px]"
									src={GroupBannerImg}
									alt=""
								/>
							</div>
							<div className="pt-[143px] clear-both" />
						</div>
					</section>
				</div>
			</div>
		</section>
	);
};

export default Hero9;
