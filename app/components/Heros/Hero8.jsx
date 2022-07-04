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
		<div className="m-auto max-w-default">
			<div className="md:h-[130px] flex items-center justify-between">
				<div className="flex items-center">
					<a href="#">
						<img
							className="h-[42px] w-[200px] md:w-auto md:h-auto"
							src="/assets/heros/saaslogo.svg"
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
						src="/assets/heros/menu.svg"
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

const ImageSection = () => (
	<div className="flex items-center justify-center rounded-full bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end h-[327px] w-[327px] md:h-[560px] md:w-[560px]">
		<img
			className="-mt-10 -mb-10 max-h-[366px] md:max-h-[668px]"
			src="/assets/heros/mockupphone.svg"
			alt=""
		/>
	</div>
);

const Hero8 = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<section className="pt-6 overflow-hidden bg-slate-light font-dm-sans md:pt-0 md:px-0 pb-12 md:pb-[90px]">
			<div className="px-6">
				<Nav setShowMobileMenu={setShowMobileMenu} />
			</div>
			{showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
			<section className="px-6 mt-20 md:mt-24">
				<div className="m-auto max-w-default">
					<div className="flex flex-col items-center md:flex-row">
						<div className="w-full md:mr-[17px] order-2 md:order-1">
							<div className="mt-[90px] md:mt-0">
								<h1 className="font-medium text-mobile-h1 md:text-desktop-h1 text-slate-headline">
									Billing Simplified
								</h1>
								<p className="text-slate-body text-desktop-subheading mt-6 md:mt-[30px]">
									A subheading that addresses the what, the why we should care and
									hopefully some social proof.
								</p>
								<div className="flex flex-col mt-9 md:space-x-3 md:flex-row">
									<button className="flex items-center justify-center w-full px-8 py-4 mt-4 text-white rounded-lg md:mt-0 bg-slate-blue text-desktop-paragraph md:w-auto filter hover:brightness-125">
										iOS App
										<span>
											<img
												className="ml-3"
												src="/assets/heros/apple.svg"
												alt=""
											/>
										</span>
									</button>
									<button className="flex items-center justify-center w-full px-8 py-4 mt-4 text-white rounded-lg md:mt-0 bg-slate-blue text-desktop-paragraph md:w-auto filter hover:brightness-125">
										Android App
										<span>
											<img
												className="ml-3"
												src="/assets/heros/android.svg"
												alt=""
											/>
										</span>
									</button>
								</div>
								<div className="mt-12 md:mr-5 md:pb-[90px]">
									<div className="flex flex-col items-start justify-center px-4 py-6 bg-white md:pt-5 md:pr-10 md:flex-row md:pl-7 md:pb-9 rounded-2xl">
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
						<div className="w-full md:ml-[17px] order-1 md:order-2">
							<ImageSection />
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Hero8;
