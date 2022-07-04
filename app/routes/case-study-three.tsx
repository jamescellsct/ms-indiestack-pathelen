import React from "react";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";
import HeroLanding from "../components/Heros/HeroLanding";
import FooterMain from "../components/Footers/FooterMain";
import HeadingBg from "~/components/Heros/heading-01.png";
import { Tab } from "@headlessui/react";

export default function Index() {
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
                  <section>
                    <div className="container mx-auto flex flex-col justify-between p-6">
                      <Tab.Group vertical>
                        <Tab.List className="pb-[20px]">
                          <Tab className="font-bold uppercase">
                            <button className="width-[200px] bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                              Patient Details
                            </button>
                          </Tab>
                          <Tab className="font-bold uppercase">
                            <button className="width-[200px] ml-[20px] bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                              PWCT Treatment
                            </button>
                          </Tab>
                        </Tab.List>
                        <Tab.Panels className="mt-[20px]">
                          <Tab.Panel>
                            <h5 className="text-base font-bold uppercase text-slate-orange">
                              PATHELEN® WOUND CARE TREATMENT (PWCT) case reports
                            </h5>
                            <div className="mt-[18px]">
                              <h2 className="font-medium text-slate-headline text-mobile-h2 lg:text-desktop-h2">
                                Patient File: Ano. Nykolay A.
                              </h2>
                            </div>
                            <div className="mt-[18px] mb-[20px]">
                              <p className="font-bold">
                                Patient Details:
                              </p>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium">Name (Initials):</div>
                              <div className="flex w-[100%] text-left">Ano. Nykolay A.</div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium">Birthdate / Age:</div>
                              <div className="flex w-[100%] text-left">1955-02-14/ 59 y.o.</div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium">Gender:</div>
                              <div className="flex w-[100%] text-left">male</div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Diagnosis:</div>
                              <div className="flex w-[100%] text-left">Chronic infected wound to the left lower leg</div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Case relevant history</div>
                              <div className="flex w-[100%] text-left">Chronic venous disorders. Type 2 diabetes mellitus.</div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Actual non PWCT<br />therapeutic measures:</div>
                              <div className="flex w-[100%] text-left">
                                Detralex 1 tab. 2 time/day<br />
                                Amaril 4 mg. tab. 1 time/day<br />
                                Glucophage XR 500 mg tab. 1 time/day
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Patient informed:</div>
                              <div className="flex w-[100%] text-left">
                                By Dr. Prystupiuk M.O. on 2014-12-25
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Data protection info:</div>
                              <div className="flex w-[100%] text-left">
                                By Dr. Prystupiuk M.O. on 2014-12-25
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Agreed by:</div>
                              <div className="flex w-[100%] text-left">
                                Patient - 2014-12-25<br />
                                physician - 2014-12-25
                              </div>
                            </div>

                            <div className="mt-[18px] mb-[20px]">
                              <p className="font-bold">
                                Therapy center:
                              </p>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Hospital:</div>
                              <div className="flex w-[100%] text-left">
                                Kyiv city clinical hospital #4
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Address details:</div>
                              <div className="flex w-[100%] text-left">
                                Solominska str., 17< br />
                                Kyiv, Ukraine< br />
                                03100
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Department:</div>
                              <div className="flex w-[100%] text-left">
                                #2 surgery dept.
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Physician:</div>
                              <div className="flex w-[100%] text-left">
                                Dr. Prystupiuk M.O.
                              </div>
                            </div>

                          </Tab.Panel>
                          <Tab.Panel>
                            <h5 className="text-base font-bold uppercase text-slate-orange">
                              PATHELEN® WOUND CARE TREATMENT (PWCT) case reports
                            </h5>
                            <div className="mt-[18px]">
                              <h2 className="font-medium text-slate-headline text-mobile-h2 lg:text-desktop-h2">
                                Patient File: Ano. Nykolay A.
                              </h2>
                            </div>

                            <div className="mt-[18px] mb-[20px]">
                              <p className="font-bold">
                                PWCT treatment
                              </p>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Start date:</div>
                              <div className="flex w-[100%] text-left">
                                2014-12-25
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Expiry:</div>
                              <div className="flex w-[100%] text-left">
                                2015-01-21
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Doses:</div>
                              <div className="flex w-[100%] text-left">
                                0,1-0,3 g 2 times/day (external application)
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Therapy schedule:</div>
                              <div className="flex w-[100%] text-left">
                                Pathelen® wound care treatment – 2 times/day up to 2015-01-21
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Additional measures:</div>
                              <div className="flex w-[100%] text-left">
                                Mechanical debridement – cutting the necrotic tissues
                              </div>
                            </div>

                            <div className="mt-[40px] mb-[20px]">
                              <p className="font-bold">
                                Outcome
                              </p>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <p>Narrative: Complaints on the wound on the front surface of the lower part of the left
                                leg which patient has had for the last 5 months. The patient noted constant pain in
                                the wound.<br />
                                <br />
                                2014-12-25 – Surgery: Debridement.<br />
                                S. Saprophyticuі, 104 CFU/g, sensitive to Cefepime, Tygacil, Linezolid</p>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Additional comments:</div>
                              <div className="flex w-[100%] text-left">
                                2014-12-29: Pain in the wound completely disappeared without any anesthetic
                                drugs.
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Brief treatment summary:</div>
                            <div className="flex w-[100%] text-left">
                                2014-12-26 Pain in the wound decreased without anesthetic drugs<br />< br />
                                2015-01-06: The wound is clean, swelling on the skin around the wound is absent.
                                The wound is reduced in size. Active granulation and partial epithelialization of the
                                wound<br /><br />
                                2015-01-21: The wound is clean, active epithelialization of the wound. Wound has
                                significantly reduced in size. Size 1,4 x 1 cm.
                              </div>
                            </div>

                            <div className="mt-[40px] mb-[20px]">
                              <p className="font-bold">
                                Day 1 (day of hospitalization)
                              </p>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Condition:</div>
                              <div className="flex w-[100%] text-left">
                                Complaints on the wound on the front surface of the lower part of the left leg which patient has had for the
                                last 5 months. The patient noted constant pain in the wound.<br /><br />
                                The temperature of 36,6 C.Ps – 98/min. AP – 130/80 mm Hg. The disease began 5 months ago
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Status localis:</div>
                              <div className="flex w-[100%] text-left">
                                On the front surface of the left tibia in the middle localized chronic wound. The skin around the wound
                                hyperemic, slight swelling edges of the wound, the wound was dry with black necrosis, strong pain. The size of the
                                wound in the beginning 2 x 2 cm.
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Blood tests:</div>
                              <div className="flex w-[100%] text-left">
                                White blood cells (WBCs): leukocytes – 8.0×109/L. Leukocytes Formula: banded neutrophils – 6%, segmented neutrophils – 61%, lymphocytes– 33%.
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Surgery:</div>
                              <div className="flex w-[100%] text-left">
                                Was performed mechanical cleaning of the wounds – removal of necrosis, under local anesthetic lidocaine
                                0.5%, and 5.0 ml. The wound was bandaged with Pathelen®.
                              </div>
                            </div>

                            <div className="mt-[40px] mb-[20px]">
                              <p className="font-bold">
                                Method of application of Pathelen®:
                              </p>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <p>
                                1. Remove old bandages<br />
                                2. Wash out the skin around the wound with antiseptic solution (Betadine)<br />
                                3. Wash out the wound surface with antiseptic solution (Сhlorhexidinum)<br />
                                4. To drain the wound surface with sterile gauze<br />
                                5. Thoroughly shake the vial with PATHELEN® to fluff up the powder (5-10 seconds), until the effect of the fluidized
                                consistency of the drug (drug identification)<br />
                                6. Sprinkle the powder at the wound surface by even 3-5 mm layer<br />
                                7. Cover the wound with sterile dry gauze<br />
                                8. Next bandaging in 12 hours<br />
                              </p>
                            </div>

                          </Tab.Panel>
                        </Tab.Panels>
                      </Tab.Group>
                    </div>
                  </section>
                </div>
              ) : (
                <div>
                  <div className="mb-3 flex items-center justify-center">
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
