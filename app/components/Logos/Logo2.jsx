import ArrowRight from '@heroicons/react/outline/ArrowRightIcon';

const LogoColumn = ({ image }) => (
	<div className="w-1/2 my-6 md:my-0 md:mx-0">
		<img className="m-auto" alt={'Logo'} src={image} />
	</div>
);

const Logo2 = () => (
	<section className="bg-slate-light font-dm-sans">
		<div className="max-w-default py-12 md:py-[90px] m-auto">
			<div className="text-center">
				<h1 className="mx-12 text-desktop-subheading md:text-base md:font-bold md:uppercase text-slate-orange">
					Trusted by Industry Leaders
				</h1>
			</div>
			<div className="flex flex-wrap mt-4 md:mt-12 md:flex-nowrap lg:space-y-0">
				<LogoColumn image="/assets/logos/twitter.svg" />
				<LogoColumn image="/assets/logos/slack.svg" />
				<LogoColumn image="/assets/logos/dropbox.svg" />
				<LogoColumn image="/assets/logos/github.svg" />
				<LogoColumn image="/assets/logos/airtable.svg" />
				<LogoColumn image="/assets/logos/notion.svg" />
			</div>
			<div className="flex flex-wrap md:mt-12 md:flex-nowrap lg:space-y-0">
				<LogoColumn image="/assets/logos/microsoft.svg" />
				<LogoColumn image="/assets/logos/netflix.svg" />
				<LogoColumn image="/assets/logos/notion.svg" />
				<LogoColumn image="/assets/logos/zoom.svg" />
				<LogoColumn image="/assets/logos/amazon.svg" />
				<LogoColumn image="/assets/logos/digitalocean.svg" />
			</div>
			<div className="flex justify-center w-full mt-12 md:hidden">
				<button className="py-[10px] px-6 bg-slate-blue rounded-lg text-white filter hover:brightness-125 flex items-center">
					View customer stories
					<ArrowRight className="w-3 ml-3 text-white" />
				</button>
			</div>
		</div>
	</section>
);

export default Logo2;
