import React from 'react';
import banner1 from "../../assets/img/banner-1.png";
import banner2 from "../../assets/img/banner-2.png";
import banner3 from "../../assets/img/banner-3.png";
import banner4 from "../../assets/img/banner-4.png";
import banner5 from "../../assets/img/banner-5.png";
import banner6 from "../../assets/img/banner-6.png";

const latestwork = () => {
    return (
        <div className="items-center bg-white flex w-full flex-col px-20 py-5 max-md:max-w-full max-md:px-5">
            <div className="text-zinc-800 text-center text-3xl font-bold  whitespace-nowrap">
                My latest work
            </div>
            <div className="self-stretch mt-16 mx-5 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
                <div className="gap-20 flex max-md:flex-col max-md:items-stretch max-md:gap-0 self-center items-center justify-center">
                    <div className="flex flex-col items-stretch w-[18%] max-md:w-full max-md:ml-0 cursor-pointer">
                        <div className="items-stretch flex grow flex-col max-md:mt-10">
                            <img
                                loading="lazy"
                                srcSet={banner1} alt='banner1'
                                className="aspect-square object-contain object-center w-full overflow-hidden"
                            />
                            <div className="text-zinc-800 text-xl font-bold leading-8 whitespace-nowrap mt-6">
                                Free Bird
                            </div>
                            <div className="text-zinc-800 text-base leading-5 whitespace-nowrap mt-2.5">
                                Lynyrd Skynyrd
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex grow flex-col max-md:mt-10 cursor-pointer">
                            <img
                                loading="lazy"
                                srcSet={banner2} alt='banner2'
                                className="aspect-square object-contain object-center w-full overflow-hidden"
                            />
                            <div className="text-zinc-800 text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                                Purple Haze
                            </div>
                            <div className="text-zinc-800 text-base leading-7 whitespace-nowrap mt-2.5">
                                Jimi Hendrix
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex grow flex-col max-md:mt-10 cursor-pointer">
                            <img
                                loading="lazy"
                                srcSet={banner3} alt='banner3'
                                className="aspect-square object-contain object-center w-full overflow-hidden"
                            />
                            <div className="text-zinc-800 text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                                You Really Got Me
                            </div>
                            <div className="text-zinc-800 text-base leading-7 whitespace-nowrap mt-2.5">
                                The Kinks
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch mt-16 mx-5 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
                <div className="gap-20 flex max-md:flex-col max-md:items-stretch max-md:gap-0 self-center items-center justify-center">
                    <div className="flex flex-col items-stretch w-[18%] max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex grow flex-col max-md:mt-10 cursor-pointer">
                            <img
                                loading="lazy"
                                srcSet={banner4} alt='banner4'
                                className="aspect-square object-contain object-center w-full overflow-hidden"
                            />
                            <div className="text-zinc-800 text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                                American Girl
                            </div>
                            <div className="text-zinc-800 text-base leading-7 whitespace-nowrap mt-2.5">
                                Tom Petty
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex grow flex-col max-md:mt-10 cursor-pointer">
                            <img
                                loading="lazy"
                                srcSet={banner5} alt='banner5'
                                className="aspect-square object-contain object-center w-full overflow-hidden"
                            />
                            <div className="text-zinc-800 text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                                Whole Lotta Love
                            </div>
                            <div className="text-zinc-800 text-base leading-7 whitespace-nowrap mt-2.5">
                                Led Zeppelin
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex grow flex-col max-md:mt-10 cursor-pointer">
                            <img
                                loading="lazy"
                                srcSet={banner6} alt='banner6'
                                className="aspect-square object-contain object-center w-full overflow-hidden"
                            />
                            <div className="text-zinc-800 text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                                Under Pressure{" "}
                            </div>
                            <div className="text-zinc-800 text-base leading-7 whitespace-nowrap mt-2.5">
                                Queen
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default latestwork
