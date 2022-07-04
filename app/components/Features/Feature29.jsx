const TextBox = ({ no, title, subtitle }) => (
	<div className="flex mt-[44px] md:mt-0">
		<p className="font-bold text-[26px] text-slate-orange mr-4">{no}</p>
		<div className="max-w-[300px] ml-4">
			<p className="font-medium text-[20px]">{title}</p>
			<p className="mt-4 text-[18px] font-normal text-slate-body">{subtitle}</p>
		</div>
	</div>
);

const Feature29 = () => {
	return (
		<section className="bg-slate-light font-dm-sans py-[48px] md:py-[90px] px-6 md:px-0">
			<div className="max-w-[945px] m-auto">
				<div className="flex flex-col justify-between md:flex-row">
					<div className="flex flex-col justify-around order-2 md:order-1 mt-[11px] md:mt-0">
						<TextBox
							no={'01'}
							title={'A simple heading'}
							subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<TextBox
							no={'02'}
							title={'A simple heading'}
							subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<TextBox
							no={'03'}
							title={'A simple heading'}
							subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
						<TextBox
							no={'04'}
							title={'A simple heading'}
							subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						/>
					</div>
					<div className="flex items-center justify-center order-1 md:ml-8 md:order-2">
						<div className="absolute w-[337px] h-[337px]  md:w-[558px] md:h-[558px] bg-gradient-to-r from-feeling-moody-start rounded-full to-feeling-moody-end"></div>
						<img
							className="relative w-3/4 md:w-auto"
							src="/assets/features/common/invoice-detail-mockup.svg"
							alt="Mobile Image Banner"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature29;
