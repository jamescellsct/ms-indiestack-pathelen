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
                                Patient File: Bal. Viktor A.
                              </h2>
                            </div>
                            <div className="mt-[18px] mb-[20px]">
                              <p className="font-bold">
                                Patient Details:
                              </p>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium">Name (Initials):</div>
                              <div className="flex w-[100%] text-left">Bal. Viktor A.</div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium">Birthdate / Age:</div>
                              <div className="flex w-[100%] text-left">1953-03-24 / 61 y.o.</div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium">Gender:</div>
                              <div className="flex w-[100%] text-left">Male</div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Diagnosis:</div>
                              <div className="flex w-[100%] text-left">Type 2 diabetes mellitus, diabetic foot syndrome neuroischemic form, foot abscess,
                                osteomyelitis of the foot bones. Sepsis</div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Case relevant history</div>
                              <div className="flex w-[100%] text-left">
                                Chronic iron deficiency anemia caused by foot phlegmon</div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Actual non PWCT<br />therapeutic measures:</div>
                              <div className="flex w-[100%] text-left">
                                Cefoperazone/sulbactam 2.0 i.m. 2 times/day<br />
                                Tienam 1000 mg+ Normal saline 200 ml i.v. 3 times/day<br />
                                Amikacin 500 mg i.m. 2 times/day<br />
                                Ciprofloxacin 500 mg tab. 2 time/day<br />
                                Sufer 200 mg. i.v. times/day<br />
                                Fraxiparine (Nadroparin calcium) (0.3ml) subcut. 1 time/day<br />
                                Warfarin 2.5 mg 1 tab. 1 time/day<br />
                                Nalbuphin 1 ml i.m. at pains<br />
                                Ketalgin (Ketorolac tromethamine) 1 ml i.m. at pains<br />
                                Tardyferon 1 tab. 2 time/day<br />
                                Nvorapid Subcut 6 ut. Morning 6 ut. launch 6 ut. evening<br />
                                Nvomix subcut 16ut. Morning 12ut. evening<br />
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Patient informed:</div>
                              <div className="flex w-[100%] text-left">
                                By Dr. Prystupiuk M.O. on 2014-12-11
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Data protection info:</div>
                              <div className="flex w-[100%] text-left">
                                By Dr. Prystupiuk M.O. on 2014-12-11
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Agreed by:</div>
                              <div className="flex w-[100%] text-left">
                                Patient - 2014-12-11<br />
                                physician - 2014-12-11
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
                                2014-12-11
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Expiry:</div>
                              <div className="flex w-[100%] text-left">
                                2015-01-15
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Doses:</div>
                              <div className="flex w-[100%] text-left">
                                0.5-1.0 g 2 times/day (external application)
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Therapy schedule:</div>
                              <div className="flex w-[100%] text-left">
                                Pathelen® wound care treatment – 2 times/day up to 2015-01-15
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Additional measures:</div>
                              <div className="flex w-[100%] text-left">
                                Mechanical debridement – removal of necrotic tissues
                              </div>
                            </div>

                            <div className="mt-[40px] mb-[20px]">
                              <p className="font-bold">
                                Outcome
                              </p>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <p>Narrative: Complaints on the pain in the foot, pus from the wound, increasing fever
                                up to 39.5 °C Hemoglobin: Hgb-80 g/l, Erythrocytes: Er-2.6×1012/L White blood
                                cells (WBCs): leukocytes – 20.3×109/L. Leukocytes Formula: banded neutrophils –
                                17%, segmented neutrophils – 67%, lymphocytes– 16%.<br />
                                <br />
                                X-ray: osteomyelitis 2,3,4 metatarsal bones of the foot with destruction and seizures.
                                2014-12-11 – Surgery: opening of phlegmon foot, amputation 2,3,4th toes with
                                resection of the metatarsal bones.<br /><br />
                                E. faecalis, 107 CFU/g, sensitive to Tygacil, Cefoperazone,Tienam</p>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Additional comments:</div>
                              <div className="flex w-[100%] text-left">
                                2014-12-14: WBC – 9×10 9/L.
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Brief treatment summary:</div>
                            <div className="flex w-[100%] text-left">
                              2014-12-17: the wound is completely clean without necrosis, and start of active
                              granulation in the wound.<br /><br />
                              2015-01-15: wound is granulated and epithelialized. The wound has reduced in
                              size. Some areas are completely healed.
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
                                Complaints on the pain in the foot, pus from the wound, increasing fever up to 39.5 °C Ps – 110/min. AP –
                                140/90 mm Hg. The disease began 12 days ago.</div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Status localis:</div>
                              <div className="flex w-[100%] text-left">
                                Foot is edematous, hyperemic, on the plantar surface of the foot observed two wounds with oozing pus
                                with stinking smell. Size 3 x3 cm., 1,5 x 2 cm..
                                On the dorsum of the foot, there are two wounds sized 3 x 1,5 cm., 6 x 6 cm. with necrotic tissues.
                              </div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Blood tests:</div>
                              <div className="flex w-[100%] text-left">
                                (RBC) Hemoglobin: Hgb-80 g/l, Erythrocytes: Er-2.6×10 12/L White blood cells (WBCs): leukocytes –
                                20.3×10 9 /L. Leukocytes Formula: banded neutrophils – 17%, segmented neutrophils – 67%, lymphocytes– 16%.</div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">X-ray:</div>
                              <div className="flex w-[100%] text-left">
                                osteomyelitis 2,3,4 metatarsal bones of the foot with the destruction and seizures.
                                Fever up to 39.5 °C, leukocytosis – 20.3×10 9/L, hemoglobin: Hb-80 g/l, and frequency of pulse – 110/min showed that
                                the patient had Systemic Inflammatory Response Syndrome (SIRS). Based on presence of purulent inflammation and
                                SIRS, the Patient was diagnosed – Sepsis.</div>
                            </div>

                            <div className="flex flex-row mt-[36px]">
                              <div className="flex w-[210px] font-medium text-left">Surgery:</div>
                              <div className="flex w-[100%] text-left">
                                On the day 1 was made surgery - opening of phlegmon and amputation of 2,3,4th toes with resection of the
                                metatarsal bones. After opening of the wound 200 ml of pus was removed. Resection of the bone was made to remove
                                bone cavity and necrotic tissues. Affected tendons were cut. Wound seeding content was taken for bacteriological
                                examination. Wound was washed out with a solution of 10% Betadine and 3% hydrogen peroxide. Wound was worked
                                out by Pathelen® 3-5 mm layer and covered with aseptic bandage.
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
