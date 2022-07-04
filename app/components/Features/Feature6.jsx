const LogoCircle = ({ logoLink, logoAlt }) => (
	<div className="shadow-md w-[75px] h-[75px] md:w-[90px] md:h-[90px] md:mr-[56px] flex items-center justify-center first:mt-[47px] last:mb-[56px] mt-[67px] rounded-full p-5">
		<img className="" src={logoLink} alt={logoAlt} />
	</div>
);

const Feature6 = () => (
	<section className="bg-slate-light py-[88px] px-6 md:px-0 md:py-[90px] font-dm-sans">
		<div className="flex flex-col m-auto md:flex-row max-w-default">
			<div className="order-2 w-full mt-[88px] md:mt-0 md:order-1">
				<div className="max-w-[460px]">
					<h2 className="font-medium leading-snug text-slate-heading text-mobile-h2 md:text-desktop-h2">
						Simplicity is key. <br /> Elevate your copy with a simple design.
					</h2>
					<div className="flex justify-between item-center">
						<div className="flex flex-col justify-center">
							<LogoCircle
								logoLink={'/assets/features/bluelogos/twitter.svg'}
								logoAlt="Twitter"
							/>
							<LogoCircle
								logoLink={'/assets/features/bluelogos/dropbox.svg'}
								logoAlt="Dropbox"
							/>
						</div>
						<div className="flex flex-col justify-center">
							<LogoCircle
								logoLink={'/assets/features/bluelogos/airtable.svg'}
								logoAlt="Airtable"
							/>
							<LogoCircle
								logoLink={'/assets/features/bluelogos/slack.svg'}
								logoAlt="Slack"
							/>
							<LogoCircle
								logoLink={'/assets/features/bluelogos/github.svg'}
								logoAlt="GitHub"
							/>
						</div>
						<div className="flex flex-col justify-center">
							<LogoCircle
								logoLink={'/assets/features/bluelogos/digitalocean.svg'}
								logoAlt="Digital Ocean"
							/>
							<LogoCircle
								logoLink={'/assets/features/bluelogos/notion.svg'}
								logoAlt="notion"
							/>
						</div>
					</div>
					<p className="mt-10 text-desktop-paragraph text-slate-body">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor sapien
						faucibus vel nibh. Vel, neque, sapien, eget amet cursus vitae. Nullam nunc
						tristique sem proin et tincidunt vestibulum ut. Magna mollis bibendum
						sagittis urna ut vitae, vitae id arcu. Ut nibh vitae risus magna risus,
						interdum vel ornare laoreet.
					</p>
					<p className="mt-10 text-desktop-paragraph text-slate-body">
						Morbi sed commodo volutpat arcu. Ultricies nulla tortor mauris lorem. Metus
						lacinia praesent mattis iaculis congue. Ut quam imperdiet nisl nulla euismod
						urna erat. Euismod sed diam faucibus odio convallis turpis risus id.
						Pulvinar auctor cum eget fames. Condimentum enim integer sed consectetur
						lectus morbi ornare proin tincidunt. Nibh nunc nec faucibus diam nunc, et
						pharetra proin. Tincidunt pellentesque ultricies viverra tellus congue.
						Ipsum netus placerat euismod sem ipsum iaculis pulvinar elementum turpis.
					</p>
				</div>
			</div>
			<div className="order-1 w-full md:order-2">
				<div className="flex items-center justify-center bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-2xl">
					<img
						className="-mt-10 -mb-10"
						src="/assets/features/feature6banner.svg"
						alt="Banner"
					/>
				</div>
			</div>
		</div>
	</section>
);

export default Feature6;
