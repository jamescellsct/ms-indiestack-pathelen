import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';

const CTAButton = () => (
	<button className="flex items-center justify-center w-full px-6 py-3 space-x-3 transition-all duration-300 bg-transparent border-2 rounded-lg md:w-auto border-slate-blue hover:bg-slate-blue group">
		<span className="transition-all duration-300 text-slate-blue group-hover:text-white">
			See all integrations
		</span>
		<ArrowRightIcon className="w-4 transition-all duration-300 text-slate-blue group-hover:text-white" />
	</button>
);

const LogoColumn = ({ image }) => (
	<div className="flex items-center justify-center py-6 my-2 transition-all duration-300 bg-white md:my-0 md:mx-0 rounded-2xl">
		<img className="m-auto" alt={'Logo'} src={image} />
	</div>
);

const Integration1 = () => (
	<section className="bg-slate-light font-dm-sans">
		<div className="py-12 md:py-[90px] m-auto max-w-default">
			<div className="mx-6 text-center md:mx-0 lg:text-left lg:flex">
				<div className="w-full">
					<div className="max-w-[362px]">
						<h5 className="text-base font-bold uppercase text-slate-orange">
							Integrations
						</h5>
						<h2 className="mt-4 font-medium leading-snug text-black text-mobile-h2 md:text-desktop-h2">
							One click connect with any of your favorite apps.
						</h2>
						<p className="mt-6 text-desktop-paragraph">
							Use this section to show your product integrations.
						</p>
						<div className="flex justify-center mt-10 lg:block">
							<CTAButton />
						</div>
					</div>
				</div>
				<div className="w-full mt-10 md:mt-0">
					<div>
						<div className="grid grid-cols-2 gap-x-4 md:grid-cols-3 md:gap-6 lg:gap-8">
							<LogoColumn image="/assets/integrations/zapiercolor.svg" />
							<LogoColumn image="/assets/integrations/slackcolor.svg" />
							<LogoColumn image="/assets/integrations/jiracolor.svg" />
							<LogoColumn image="/assets/integrations/githubcolor.svg" />
							<LogoColumn image="/assets/integrations/trellocolor.svg" />
							<LogoColumn image="/assets/integrations/dropboxcolor.svg" />
							<LogoColumn image="/assets/integrations/asanacolor.svg" />
							<LogoColumn image="/assets/integrations/basecampcolor.svg" />
							<LogoColumn image="/assets/integrations/pipedrivecolor.svg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Integration1;
