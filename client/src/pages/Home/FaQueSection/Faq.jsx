import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Faq = () => {
    return (
        <div className="w-full  pt-16">
            <div className="md:w-full lg:w-96 rounded-2xl bg-white p-2 text-[#142441]">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg   text-left text-lg md:text-xl font-semibold px-3  py-5 shadow-xl bg-primary-teal text-white">
                                <span>How is The Test Used?</span>
                                <ChevronUpIcon
                                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-black rounded-md bg-light-teal">
                                Medical tests can help detect a condition, determine a
                                diagnosis, plan treatment, check to see if treatment is working,
                                or monitor the condition over time. A doctor may order these
                                tests as part of a routine checkup, to check for certain
                                diseases and disorders, or to monitor your health.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <Disclosure as="div" className="mt-9  shadow-xl ">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg   text-left text-xl font-semibold px-3 py-5 bg-primary-teal text-white">
                                <span>What does The Test Result Mean?</span>
                                <ChevronUpIcon
                                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4  pb-2 pt-4 text-base text-black rounded-md bg-light-teal">
                                Positive and Negative Tests: <br></br> Positive means whatever
                                the test was looking for was found. Negative means whatever the
                                test was looking for was not found. Inconclusive means "unsure."
                                The test result was not positive or negative and will likely
                                need to be repeated.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-9  shadow-xl ">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg   text-left text-xl font-semibold px-3 py-5 bg-primary-teal text-white">
                                <span>Where Can I Get Tested?</span>
                                <ChevronUpIcon
                                    className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-black rounded-md bg-light-teal">
                                Healthcare Providers: <br></br> Many healthcare providers offer
                                safe screening and testing for COVID-19. You can contact your
                                primary care doctor or local healthcare facility to inquire
                                about testing options
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
};

export default Faq;
