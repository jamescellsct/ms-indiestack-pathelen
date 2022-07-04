import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';

const SignUpWithGoogleButton = () => (
	<button className="flex items-center justify-center w-full px-6 py-4 rounded-lg bg-slate-blue filter hover:brightness-125">
		<img src="/assets/cta/googlelogo.svg" />
		<span className="w-full text-white"> Sign Up With Google </span>
	</button>
);

const ContinueButton = () => (
	<button className="flex items-center justify-center w-full px-6 py-4 rounded-lg bg-slate-blue filter hover:brightness-125">
		<span className="text-white"> Continue </span>
		<ArrowRightIcon className="w-5 ml-[10px] text-white" />
	</button>
);

const InputWithLabel = () => (
	<div className="flex flex-col items-start space-y-1">
		<label className="text-base font-medium text-slate-body"> Email </label>
		<input className="w-full p-3 border-2 rounded-lg" type="email" placeholder="" />
	</div>
);

const CTA8 = () => (
	<section className="bg-slate-light font-dm-sans">
		<div className="py-12 mx-6 md:py-[90px] max-w-default md:m-auto">
			<div className="md:flex md:justify-center">
				<div>
					<div className="px-6 py-12 md:py-16 md:min-w-[558px] text-center bg-white md:px-24 rounded-3xl">
						<h2 className="font-medium md:my-2 text-mobile-h2">Sign up in seconds</h2>
						<div className="mt-8">
							<SignUpWithGoogleButton />
						</div>
						<p className="mt-4 md:hidden">or</p>
						<div className="mt-4 md:mt-6">
							<InputWithLabel />
						</div>
						<div className="mt-4 md:mt-6">
							<ContinueButton />
						</div>
						<div className="mt-8 text-center">
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

export default CTA8;
