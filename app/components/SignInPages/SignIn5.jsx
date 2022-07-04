import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';
import MailIcon from '@heroicons/react/outline/MailIcon';
import KeyIcon from '@heroicons/react/outline/KeyIcon';

const Nav = () => (
	<section>
		<div className="max-w-6xl pt-[72px] pb-[57px] m-auto">
			<div className="flex items-center justify-center mx-10">
				<div className="">
					<img alt="SaaS Logo" src="/assets/footers/saaslogo.svg" />
				</div>
			</div>
		</div>
	</section>
);

const InputWithLabel = ({ name, type, icon }) => (
	<div className="flex md:min-w-[362px] flex-col mt-6">
		<label className="text-base font-medium text-slate-body"> </label>
		<div className="flex border-2 rounded-lg">
			{icon}
			<input
				className="w-full p-3 outline-none focus-within:outline-none focus:outline-none"
				type={type}
				placeholder={name}
			/>
		</div>
	</div>
);

const ContinueButton = () => (
	<button className="flex items-center justify-center w-full px-6 py-4 space-x-2 rounded-lg bg-slate-blue filter hover:brightness-125">
		<span className="text-white"> Continue </span>
		<ArrowRightIcon className="w-5 text-white" />
	</button>
);

const SignIn5 = () => (
	<section className="min-h-screen font-dm-sans bg-slate-light">
		<Nav />
		<div className="mx-6 max-w-default md:m-auto">
			<div className="justify-center md:flex">
				<div>
					<div className="p-6 md:p-[60px] bg-white md:m-auto rounded-3xl md:max-w-[482px]">
						<h2 className="my-2 font-medium text-[32px] text-center">Sign in</h2>
						<InputWithLabel
							name={'Email'}
							type={'email'}
							icon={
								<MailIcon className="text-[#19313C] text-opacity-20 w-5 ml-4 mt-4 mb-4 mr-2" />
							}
						/>
						<InputWithLabel
							name={'Password'}
							type={'password'}
							icon={
								<KeyIcon className="text-[#19313C] text-opacity-20 w-5 ml-4 mt-4 mb-4 mr-2" />
							}
						/>
						<div className="mt-6">
							<ContinueButton />
						</div>
						<div className="mt-6 text-center">
							<p className="text-slate-body">
								No account?{' '}
								<span className="underline text-slate-blue">Sign up</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default SignIn5;
