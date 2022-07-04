import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon';

const LogoColumn = ({ image }) => (
	<div className="flex items-center justify-center w-1/2 my-2 transition-all duration-300 md:my-0 md:mx-0">
		<div className="flex items-center w-full h-full py-6 mx-2 bg-white rounded-2xl">
			<img className="m-auto" alt={'Logo'} src={image} />
		</div>
	</div>
);

const CTAButton = () => (
	<button className="flex items-center justify-center w-full px-6 py-3 space-x-3 transition-all duration-300 bg-transparent border-2 rounded-lg md:w-auto border-slate-blue hover:bg-slate-blue group">
		<span className="transition-all duration-300 text-slate-blue group-hover:text-white">
			View customer stories
		</span>
		<ArrowRightIcon className="w-4 transition-all duration-300 text-slate-blue group-hover:text-white" />
	</button>
);

const Logo4 = () => (
	<section className="min-h-screen bg-slate-light font-dm-sans">
		<div className="max-w-6xl py-24 m-auto">
			<div className="space-y-6 text-center">
				<h2 className="mx-12 text-base uppercase md:font-bold text-slate-orange">
					Success stories
				</h2>
				<h1 className="mx-12 text-[26px] text-slate-body font-medium md:text-[42px]">
					Trusted by the world’s leading companies{' '}
				</h1>
			</div>
			<div className="flex flex-wrap mx-4 mt-12 md:space-x-8 md:flex-nowrap lg:space-y-0">
				<LogoColumn image="/assets/logos/zapiercolor.svg" />
				<LogoColumn image="/assets/logos/slackcolor.svg" />
				<LogoColumn image="/assets/logos/jiracolor.svg" />
				<LogoColumn image="/assets/logos/githubcolor.svg" />
				<LogoColumn image="/assets/logos/trellocolor.svg" />
				<LogoColumn image="/assets/logos/dropboxcolor.svg" />
			</div>
			<div className="flex items-center justify-center mx-6 md:w-auto mt-14">
				<CTAButton />
			</div>
		</div>
	</section>
);

export default Logo4;
