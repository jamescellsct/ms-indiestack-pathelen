import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';

const SignUpWithGoogleButton = () => (
	<button className="flex items-center justify-around w-full px-6 py-4 border-2 rounded-lg border-slate-blue group hover:bg-slate-blue">
		<img
			className="transition-all duration-300 filter group-hover:brightness-0 group-hover:invert"
			alt="Google Icon"
			src="/assets/cta/googleblue.svg"
		/>
		<span className="w-full text-slate-blue group-hover:text-white"> Sign Up With Google </span>
	</button>
);

const SignUpWithFacebookButton = () => (
	<button className="flex items-center justify-around w-full px-6 py-4 transition-all duration-300 border-2 rounded-lg border-slate-blue group hover:bg-slate-blue">
		<img
			alt="Facebook Blue"
			className="transition-all duration-300 filter group-hover:brightness-0 group-hover:invert"
			src="/assets/cta/facebookblue.svg"
		/>
		<span className="w-full transition-all duration-300 text-slate-blue group-hover:text-white">
			{' '}
			Sign Up With Facebook{' '}
		</span>
	</button>
);

const SignUpWithMicrosoftButton = () => (
	<button className="flex items-center justify-around w-full px-6 py-4 border-2 rounded-lg border-slate-blue group hover:bg-slate-blue">
		<img
			className="transition-all duration-300 filter group-hover:brightness-0 group-hover:invert"
			src="/assets/cta/microsoftblue.svg"
		/>
		<span className="w-full text-slate-blue group-hover:text-white">
			Sign Up With Microsoft
		</span>
	</button>
);

const ContinueButton = () => (
	<button className="flex items-center justify-center w-full px-6 py-4 space-x-3 rounded-lg bg-slate-blue hover:opacity-90">
		<span className="text-white"> Continue </span>
		<ArrowRightIcon className="w-5 text-white" />
	</button>
);

const InputWithLabel = () => (
	<div className="flex flex-col space-y-1">
		<label className="text-base font-medium text-slate-body"> Email </label>
		<input className="p-3 border-2 rounded-lg" type="email" placeholder="" />
	</div>
);

const CTA10 = () => (
	<section className="bg-slate-light font-dm-sans">
		<div className="py-12 md:py-[90px] mx-6 max-w-default md:m-auto">
			<div className="flex justify-center">
				<div>
					<div className="px-6 py-12 md:py-16 md:min-w-[558px] bg-white md:px-24 rounded-3xl">
						<h2 className="font-medium text-center md:my-2 text-mobile-h2">
							Sign up in seconds
						</h2>
						<div className="mt-8">
							<SignUpWithGoogleButton />
						</div>
						<div className="mt-6">
							<SignUpWithFacebookButton />
						</div>
						<div className="mt-6">
							<SignUpWithMicrosoftButton />
						</div>
						<div className="mt-6 text-center">
							<p className="opacity-50 text-slate-body">or</p>
						</div>
						<div className="mt-6">
							<InputWithLabel />
						</div>
						<div className="mt-6">
							<ContinueButton />
						</div>
						<div className="mt-6 text-center">
							<p className="text-slate-body">
								Have an account?{' '}
								<a href="#">
									<span className="hover:underline text-slate-blue">Log in</span>
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default CTA10;
