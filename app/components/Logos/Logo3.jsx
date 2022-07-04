const LogoColumn = ({ image }) => (
	<div className="w-1/2 my-6 transition-all duration-300 md:my-0 md:mx-0 opacity-30 hover:opacity-100">
		<img className="m-auto" alt={'Logo'} src={image} />
	</div>
);

const Logo3 = () => (
	<section className="bg-slate-light font-dm-sans">
		<div className="py-12 md:py-[90px] m-auto  max-w-default">
			<div className="text-center">
				<h1 className="mx-6 text-desktop-subheading md:text-base md:font-bold md:uppercase md:mx-12 text-slate-orange">
					Used by teams worldwide
				</h1>
			</div>
			<div className="flex flex-wrap mt-12 md:flex-nowrap lg:space-y-0">
				<LogoColumn image="/assets/logos/twitter.svg" />
				<LogoColumn image="/assets/logos/slack.svg" />
				<LogoColumn image="/assets/logos/dropbox.svg" />
				<LogoColumn image="/assets/logos/github.svg" />
				<LogoColumn image="/assets/logos/airtable.svg" />
				<LogoColumn image="/assets/logos/digitalocean.svg" />
				<LogoColumn image="/assets/logos/notion.svg" />
			</div>
		</div>
	</section>
);

export default Logo3;
