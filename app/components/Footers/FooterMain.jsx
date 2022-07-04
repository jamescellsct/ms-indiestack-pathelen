import MsLogoImg from "../Heros/medi-swiss-logo.svg";

const FooterMain = () => (
	<footer className="bg-slate-light font-dm-sans">
		<div className="py-12 md:py-[90px] mx-6 max-w-default md:m-auto">
			<div className="items-center md:space-x-12 md:flex">
				<img src={MsLogoImg} alt="MediSwiss" />

			</div>
			<hr className="my-6" />
			<div className="flex justify-between">
				<p> Copyright MediSwiss 2022 </p>
				<div className="flex space-x-10">

				</div>
			</div>
		</div>
	</footer>
);

export default FooterMain;
