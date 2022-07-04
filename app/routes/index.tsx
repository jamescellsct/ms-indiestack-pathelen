import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";
import HeroLanding from "../components/Heros/HeroLanding";
import FooterMain from "../components/Footers/FooterMain";
import HeadingBg from "~/components/Heros/heading-01.png";

export default function CsOne() {
  const user = useOptionalUser();
  return (
    <div>
      <div>
        <HeroLanding />
        <main>
          <div>
            <div>
              {user ? (
                <div>
                  <div>
                    <div>
                      <section className="bg-slate-light py-12 px-6 font-dm-sans md:py-[90px] md:px-0">
                        <div className="m-auto max-w-default">
                          <h3 className="max-w-[558px] text-mobile-h2 font-medium leading-tight text-slate-headline md:text-desktop-h2">
                            Hello, {user.email}
                          </h3>
                          <p className="mt-8 max-w-[460px] text-desktop-subheading text-slate-body">
                            Pathelen Hybrid Case Studies
                          </p>
                        </div>
                        <div className="mt-[60px]">
                          <div className="m-auto max-w-default md:flex">

                            <div className="md:min-w-[362px] mr-10 mb-12 ">
                              <div className="rounded-3xl bg-white py-9 px-[30px] min-h-[400px]">
                                <h4 className="mt-4 text-xl font-medium">
                                  <strong>Patient File:</strong> Ano. Nykolay A.
                                </h4>
                                <p className="mt-4 text-desktop-paragraph h-[200px]">
                                  <strong>Diagnosis:</strong> Chronic infected wound to the left lower leg
                                </p>
                                <Link
                                  to="/case-study-one"
                                  className="mt-5 flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                                >
                                  View Case Study
                                </Link>
                              </div>
                            </div>

                            <div className="md:min-w-[362px] mr-10 mb-12">
                              <div className="rounded-3xl bg-white py-9 px-[30px] min-h-[400px]">
                                <h4 className="mt-4 text-xl font-medium">
                                  <strong>Patient File:</strong> Bal. Viktor A.
                                </h4>
                                <p className="mt-4 text-desktop-paragraph h-[200px]">
                                  <strong>Diagnosis:</strong> Type 2 diabetes mellitus, diabetic foot syndrome neuroischemic form, foot abscess,
                                  osteomyelitis of the foot bones. Sepsis
                                </p>
                                <Link
                                  to="/case-study-two"
                                  className="mt-5 flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                                >
                                  View Case Study
                                </Link>
                              </div>
                            </div>

                            <div className="md:min-w-[362px] mb-12">
                              <div className="rounded-3xl bg-white py-9 px-[30px] min-h-[400px]">
                                <h4 className="mt-4 text-xl font-medium">
                                  <strong>Patient File:</strong> Nek. Olena O.
                                </h4>
                                <p className="mt-4 text-desktop-paragraph h-[200px]">
                                  <strong>Diagnosis:</strong> Type 2 diabetes mellitus, diabetic foot syndrome neuroischemic form, abscess of
                                  the left tibia, abscess of the left leg.
                                </p>
                                <Link
                                  to="/case-study-three"
                                  className="mt-5 flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                                >
                                  View Case Study
                                </Link>
                              </div>
                            </div>

                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-center mb-3">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <Link
                        to="/join"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                      >
                        Sign up
                      </Link>
                      <Link
                        to="/login"
                        className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600  "
                      >
                        Log In
                      </Link>
                    </div>
                  </div>
                  <div className="text-center">
                    <img
                      src={HeadingBg}
                      alt="PATHELEN® WOUND CARE TREATMENT (PWCT) case reports"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
        <FooterMain />
      </div>
    </div>
  );
}
