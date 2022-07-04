import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';
import MenuIcon from '@heroicons/react/outline/MenuAlt3Icon';
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
	<section>
		<div className="relative py-10 m-auto max-w-default">
			<div className="flex items-center justify-between mx-10">
				<div className="">
					<a href="">
						<img
							className="w-[200px] h-[42px] md:w-auto md:h-auto"
							src="/assets/footers/saaslogov2.svg"
						/>
					</a>
				</div>
				<div className="hidden md:space-x-12 md:flex">
					<a href="">
						<p className="text-slate-headline text-desktop-paragraph hover:text-slate-blue">
							{' '}
							Pricing{' '}
						</p>
					</a>
					<a href="">
						<p className="text-slate-headline text-desktop-paragraph hover:text-slate-blue">
							{' '}
							Sign In{' '}
						</p>
					</a>
				</div>
				<div className="md:hidden">
					<MenuIcon onClick={() => setShowMenu(!showMenu)} className="w-6" />
				</div>
			</div>
		</div>
	</section>
);

const InputWithLabel = ({ name, type }) => (
	<div className="flex flex-col space-y-1">
		<input
			className="p-3 border-2 rounded-lg md:min-w-[362px] placeholder-slate-body placeholder-opacity-30"
			type={type}
			placeholder={name}
		/>
	</div>
);

const ContinueButton = () => (
	<button className="flex items-center justify-center w-full px-6 py-4 space-x-2 rounded-lg bg-slate-blue hover:brightness-125 filter">
		<span className="text-white"> Continue </span>
		<ArrowRightIcon className="w-5 text-white" />
	</button>
);

const Register1 = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<section className="min-h-screen font-dm-sans bg-slate-light">
			<Nav showMenu={showMenu} setShowMenu={setShowMenu} />
			{showMenu && <MobileMenu setShowMenu={setShowMenu} />}
			<div className="mx-6 max-w-default md:m-auto">
				<div className="justify-center md:flex">
					<div>
						<div className="p-6 space-y-6 bg-white md:p-[60px] rounded-3xl md:min-w-[482px]">
							<h2 className="my-2 font-medium text-[32px] text-center">Sign up</h2>
							<InputWithLabel name={'Email'} type={'email'} />
							<InputWithLabel name={'Password'} type={'password'} />
							<InputWithLabel name={'Confirm Password'} type={'password'} />
							<ContinueButton />
							<div className="text-center">
								<p className="text-slate-body">
									Have an account?{' '}
									<a href="">
										<span className="underline text-slate-blue">Sign in</span>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register1;
