import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Menu from "../../assets/icons/Menu.svg";
import profile from "../../assets/img/profile.png"


export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white border-b-2  border-b-opacity-20 border-solid">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <h1 className=' font-bold text-xl'>PORTFOLIO</h1>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <img src={Menu} />
                    </button>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-8 ">
                    <a href="#" className="text-xl font-semibold leading-6 text-gray-900">
                        About
                    </a>
                    <a href="#" className="text-xl font-semibold leading-6 text-gray-900">
                        Work
                    </a>
                    <a href="#" className="text-xl font-semibold leading-6 text-gray-900">
                        Contact
                    </a>
                    <img className=' w-8 cursor-pointer' src={profile} alt='profile' />
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <h1 className=' font-bold text-xl'>PORTFOLIO</h1>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root items-stretch  w-full max-w-[1200px] flex-col mb-5 pt-12 border-t-2  border-t-opacity-20 border-solid max-md:max-w-full">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6 flex flex-col gap-10 items-center">
                                <a href="#" className="text-xl font-semibold leading-6 text-gray-900 cursor-pointer">
                                    About
                                </a>
                                <a href="#" className="text-xl font-semibold leading-6 text-gray-900 cursor-pointer">
                                    Work
                                </a>
                                <a href="#" className="text-xl font-semibold leading-6 text-gray-900 cursor-pointer">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
