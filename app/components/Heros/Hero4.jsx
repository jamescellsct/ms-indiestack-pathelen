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

const Nav = ({ setShowMobileMenu }) => (
	<nav>
		<div className="px-6 pt-6 m-auto md:pt-[53px] max-w-default md:px-0">
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<a href="#">
						<img
							className="h-[42px] w-[200px] md:w-auto md:h-auto"
							src="/assets/heros/saaslogo.svg"
							alt="Logo"
						/>
					</a>
					<div className="">
						<ul className="hidden ml-12 space-x-12 font-medium md:flex text-slate-headline">
							<Navlink links={linkArray} />
						</ul>
					</div>
				</div>
				<div className="block cursor-pointer md:hidden">
					<img
						onClick={() => setShowMobileMenu(true)}
						className="w-6 h-6 md:w-8 md:h-8"
						src="/assets/heros/menu.svg"
						alt="Menu"
					/>
				</div>
				<div className="hidden md:block">
					<div className="space-x-3">
						<button className="bg-transparent border-2 rounded-lg border-slate-blue py-[10px] px-6 text-slate-blue font-medium hover:bg-slate-blue hover:text-white transition-all duration-300">
							Android App
						</button>
						<button className="bg-transparent border-2 rounded-lg border-slate-blue py-[10px] px-6 text-slate-blue font-medium hover:bg-slate-blue hover:text-white transition-all duration-300">
							iOS App
						</button>
					</div>
				</div>
			</div>
		</div>
	</nav>
);

const ImageSection = () => (
	<img className="max-h-[659px]" src="/assets/heros/invoicedetailbanner.svg" alt="" />
);

const MobileMenu = ({ setShowMobileMenu }) => (
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

const Hero4 = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	return (
		<section className="font-dm-sans bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end pb-12 md:pb-[90px]">
			<Nav setShowMobileMenu={setShowMobileMenu} />
			{showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
			<section className="px-6 mt-12 md:mt-24 md:px-0">
				<div className="m-auto max-w-default">
					<div className="flex flex-col items-center md:flex-row">
						<div className="w-full md:mr-[17px] order-2 md:order-1">
							<div className="mt-[48px] md:mt-0">
								<h1 className="font-medium leading-none text-mobile-h1 md:text-desktop-h1 text-slate-headline">
									Billing Simplified
								</h1>
								<p className="text-slate-body text-desktop-subheading mt-6 md:mt-[30px]">
									A subheading that addresses the what, the why we should care and
									hopefully some social proof.
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
									<div className="flex flex-col items-start justify-center px-4 py-6 bg-white md:pt-5 md:pr-10 md:flex-row md:pl-7 bg-opacity-40 md:pb-9 rounded-2xl">
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
		</section>
	);
};

export default Hero4;
