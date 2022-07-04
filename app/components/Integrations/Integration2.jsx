import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';

const CTAButton = () => (
	<button className="flex items-center justify-center w-full px-6 py-3 space-x-3 transition-all duration-300 border-2 rounded-lg border-slate-blue bg-slate-blue group md:w-auto filter hover:brightness-125">
		<span className="text-white transition-all duration-300">View customer stories</span>
		<ArrowRightIcon className="w-4 text-white transition-all duration-300" />
	</button>
);

const LogoColumn = ({ image }) => (
	<div className="h-[83px] w-1/2 md:w-[166px] md:h-[89px] md:ml-[0px] md:mr-[15px] mt-4 md:mt-[30px]">
		<div className="px-8 py-4 bg-white w-full rounded-2xl max-w-[155px] md:m-auto min-h-[83px] md:min-h-[89px] flex items-center">
			<img className="m-auto" alt={'Logo'} src={image} />
		</div>
	</div>
);

const Integration2 = () => (
	<section className="bg-slate-light font-dm-sans">
		<div className="py-12 md:py-[90px] m-auto max-w-default">
			<div className="mx-6 text-center">
				<div className="w-full max-w-[555px] m-auto">
					<div>
						<h5 className="text-base font-bold uppercase text-slate-orange">
							Trusted by Industry Leaders
						</h5>
						<h2 className="mt-4 font-medium leading-snug text-mobile-h2 md:text-desktop-h2 text-slate-headline">
							One click connect with any of your favorite apps.
						</h2>
						<p className="mt-6">Use this section to show your product integrations.</p>
						<div className="flex justify-center mt-10">
							<CTAButton />
						</div>
					</div>
				</div>
				<div className="w-full mt-12 max-w-default">
					<div>
						<div className="flex flex-wrap justify-center text-center">
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

export default Integration2;
