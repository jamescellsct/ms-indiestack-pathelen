const LogoColumn = ({ image }) => (
	<div className="w-1/2 my-6 md:my-0 md:mx-0">
		<img className="m-auto" alt={'Logo'} src={image} />
	</div>
);

const Logo1 = () => (
	<section className="bg-slate-light font-dm-sans">
		<div className="max-w-default mx-6 py-12 md:py-[90px] md:m-auto">
			<div className="flex flex-col items-center md:flex-row">
				<h5 className="font-normal normal-case md:font-bold text-desktop-subheading md:text-base text-slate-body md:uppercase">
					Used by teams worldwide
				</h5>
				<img
					className="mt-8 ml-8 md:mt-0"
					src="/assets/logos/orangebar.svg"
					alt="Orange Bar"
				/>
			</div>
			<div className="flex flex-wrap mt-12 md:flex-nowrap">
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

export default Logo1;
