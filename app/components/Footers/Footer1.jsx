const Footer1 = () => (
	<footer className="bg-slate-light font-dm-sans">
		<div className="py-12 md:py-[90px] mx-6 max-w-default md:m-auto">
			<div className="items-center md:space-x-12 md:flex">
				<img src="/assets/footers/saaslogo.svg" />
				<p className="mt-6 text-sm font-normal md:mt-0 md:w-1/5 text-slate-body">
					ZipBooks theme makes it easy to start your next SaaS landing page.{' '}
				</p>
			</div>
			<hr className="my-6" />
			<div className="flex justify-between">
				<p> Copyright 2021 </p>
				<div className="flex space-x-10">
					<img src="/assets/footers/twitter.svg" />
					<img src="/assets/footers/facebook.svg" />
					<img src="/assets/footers/youtube.svg" />
				</div>
			</div>
		</div>
	</footer>
);

export default Footer1;
