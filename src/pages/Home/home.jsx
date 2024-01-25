import React from 'react'
import header from "../../assets/img/header-1.png"
import img1 from "../../assets/img/img-1.png"
import img2 from "../../assets/img/img-2.png"
import img3 from "../../assets/img/img-3.png"
import banner1 from "../../assets/img/banner-1.png"
import banner2 from "../../assets/img/banner-2.png"
import banner3 from "../../assets/img/banner-3.png"
import banner4 from "../../assets/img/banner-4.png"
import banner5 from "../../assets/img/banner-5.png"
import banner6 from "../../assets/img/banner-6.png"
import author1 from "../../assets/img/Author-1.png"
import author2 from "../../assets/img/Author-2.png"
import author3 from "../../assets/img/Author-3.png"
const home = () => {
    return (
        <div className="items-stretch flex flex-col pb-12">
            <div className="justify-center items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
                <div className="w-full max-w-[1080px] my-12 max-md:max-w-full max-md:my-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                                <div className="text-zinc-800 text-xl font-semibold leading-8 max-md:max-w-full">
                                    Branding | Image making{" "}
                                </div>
                                <div className="text-zinc-800 text-7xl font-semibold leading-[90px] mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                                    My awesome portfolio
                                </div>
                                <div className="text-zinc-800 text-lg leading-7 mt-10 max-md:max-w-full">
                                    And I made it myself! Yes. In Figma with Anima
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
                            <img
                                loading="lazy"
                                srcSet={header} alt='header'
                                className="aspect-[1.17] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-7"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-center items-center bg-white flex w-full flex-col px-16 max-md:max-w-full max-md:px-5">
                <div className="justify-between items-center flex w-full max-w-[1078px] gap-5 py-12 border-y-2  border-y-opacity-20 border-solid max-md:max-w-full max-md:flex-wrap">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc341395d4abb34bf4033360dd6eeac8aabaefad890539a3a9c688161af5d560?"
                        className="aspect-[1.59] object-contain object-center w-[54px] fill-zinc-800 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5896770b7fda8bf8a633254ba5932efe14b251a675683362c186c7eeb57d805f?"
                        className="aspect-[3.03] object-contain object-center w-[103px] fill-zinc-800 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/123f5a4a4ac4e155c6bb51f5e110702c9b22009b1538d2998ba68c23b6a3a908?"
                        className="aspect-[0.81] object-contain object-center w-[38px] fill-zinc-800 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/71753be02bca07050ec2eeb2d0362598a20789fbf119c6b95bd235564f9de68c?"
                        className="aspect-[4.09] object-contain object-center w-[139px] fill-zinc-800 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a45ba1e013fb3586a5149be9aad276dadd09afa6b055354fde3d4c692712199d?"
                        className="aspect-[6.29] object-contain object-center w-[214px] fill-zinc-800 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                </div>
            </div>
            <div className="justify-center items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
                <div className="w-full max-w-[1000px] mt-32 mb-24 max-md:max-w-full max-md:my-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
                            <div className="items-center flex grow flex-col max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={img1} alt='img1'
                                    className="aspect-square object-contain object-center w-[130px] overflow-hidden max-w-full"
                                />
                                <div className="text-zinc-800 text-center text-3xl font-semibold leading-10 self-stretch whitespace-nowrap mt-14 max-md:mt-10">
                                    Product design
                                </div>
                                <div className="text-zinc-800 text-center text-lg leading-7 self-stretch mt-5">
                                    This is a template Figma file, turned into code using Anima.
                                    Learn more at AnimaApp.com
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="items-center flex grow flex-col max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={img2} alt='img2'
                                    className="aspect-square object-contain object-center w-[130px] overflow-hidden max-w-full"
                                />
                                <div className="text-zinc-800 text-center text-3xl font-semibold leading-10 self-stretch whitespace-nowrap mt-14 max-md:mt-10">
                                    Art direction
                                </div>
                                <div className="text-zinc-800 text-center text-lg leading-7 self-stretch mt-5">
                                    This is a template Figma file, turned into code using Anima.
                                    Learn more at AnimaApp.com
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="items-center flex grow flex-col max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={img3} alt='img3'
                                    className="aspect-square object-contain object-center w-[130px] overflow-hidden max-w-full"
                                />
                                <div className="text-zinc-800 text-center text-3xl font-semibold leading-10 self-stretch whitespace-nowrap mt-14 max-md:mt-10">
                                    Visual design
                                </div>
                                <div className="text-zinc-800 text-center text-lg leading-7 self-stretch mt-5">
                                    This is a template Figma file, turned into code using Anima.
                                    Learn more at AnimaApp.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-center bg-white flex w-full flex-col px-20 py-5 max-md:max-w-full max-md:px-5">
                <div className="text-zinc-800 text-center text-3xl font-semibold leading-10 whitespace-nowrap">
                    My latest work
                </div>
                <div className="self-stretch mt-16 mx-5 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex grow flex-col max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={banner1} alt='banner1'
                                    className="aspect-square object-contain object-center w-full overflow-hidden"
                                />
                                <div className="text-zinc-800 text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                                    Free Bird
                                </div>
                                <div className="text-zinc-800 text-lg leading-7 whitespace-nowrap mt-2.5">
                                    Lynyrd Skynyrd
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex grow flex-col max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={banner2} alt='banner2'
                                    className="aspect-square object-contain object-center w-full overflow-hidden"
                                />
                                <div className="text-zinc-800 text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                                    Purple Haze
                                </div>
                                <div className="text-zinc-800 text-lg leading-7 whitespace-nowrap mt-2.5">
                                    Jimi Hendrix
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex grow flex-col max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={banner3} alt='banner3'
                                    className="aspect-square object-contain object-center w-full overflow-hidden"
                                />
                                <div className="text-zinc-800 text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                                    You Really Got Me
                                </div>
                                <div className="text-zinc-800 text-lg leading-7 whitespace-nowrap mt-2.5">
                                    The Kinks
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch mt-16 mx-5 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex grow flex-col max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={banner4} alt='banner4'
                                    className="aspect-square object-contain object-center w-full overflow-hidden"
                                />
                                <div className="text-zinc-800 text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                                    American Girl
                                </div>
                                <div className="text-zinc-800 text-lg leading-7 whitespace-nowrap mt-2.5">
                                    Tom Petty
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex grow flex-col max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={banner5} alt='banner5'
                                    className="aspect-square object-contain object-center w-full overflow-hidden"
                                />
                                <div className="text-zinc-800 text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                                    Whole Lotta Love
                                </div>
                                <div className="text-zinc-800 text-lg leading-7 whitespace-nowrap mt-2.5">
                                    Led Zeppelin
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex grow flex-col max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={banner6} alt='banner6'
                                    className="aspect-square object-contain object-center w-full overflow-hidden"
                                />
                                <div className="text-zinc-800 text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                                    Under Pressure{" "}
                                </div>
                                <div className="text-zinc-800 text-lg leading-7 whitespace-nowrap mt-2.5">
                                    Queen
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
                <div className="text-zinc-800 text-3xl font-semibold whitespace-nowrap mt-12 max-md:mt-10">
                    Clients
                </div>
                <div className="self-stretch mt-14 mb-16 mx-5 max-md:max-w-full max-md:mr-2.5 max-md:my-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                            <div className="items-stretch bg-stone-50 flex w-full grow flex-col mx-auto pl-8 pr-6 py-8 border-[1.5px] border-solid border-amber-200 max-md:mt-10 max-md:px-5">
                                <div className="text-zinc-800 text-xl font-semibold leading-8">
                                    This is a template Figma file, turned into code using Anima.
                                    Learn more at AnimaApp.com
                                </div>
                                <div className="flex justify-between gap-5 mt-20 items-start max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        srcSet={author1} alt='author1'
                                        className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
                                    />
                                    <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                                        <div className="items-stretch flex gap-1.5 pr-20 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81449dccb7bb6e798268db0aa66e15f49ba031038a502d80708a603eb7224273?"
                                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81449dccb7bb6e798268db0aa66e15f49ba031038a502d80708a603eb7224273?"
                                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81449dccb7bb6e798268db0aa66e15f49ba031038a502d80708a603eb7224273?"
                                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81449dccb7bb6e798268db0aa66e15f49ba031038a502d80708a603eb7224273?"
                                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81449dccb7bb6e798268db0aa66e15f49ba031038a502d80708a603eb7224273?"
                                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                            />
                                        </div>
                                        <div className="text-zinc-800 text-lg leading-7 mt-2.5">
                                            Gemma Nolen, <br />
                                            Google
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="items-stretch bg-stone-50 flex w-full grow flex-col mx-auto pl-8 pr-6 py-8 border-[1.5px] border-solid border-amber-200 max-md:mt-10 max-md:px-5">
                                <div className="text-zinc-800 text-xl font-semibold leading-8">
                                    This is a template Figma file, turned into code using Anima.
                                    Learn more at AnimaApp.com
                                </div>
                                <div className="flex justify-between gap-5 mt-20 items-start max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        srcSet={author2} alt='author2'
                                        className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
                                    />
                                    <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                                        <div className="items-stretch flex gap-1.5 pr-20 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b69732fbef8fbfbe2c06f58e2b4d52b7e161046e94c9b9dba3e7f07c9191384?"
                                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b69732fbef8fbfbe2c06f58e2b4d52b7e161046e94c9b9dba3e7f07c9191384?"
                                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b69732fbef8fbfbe2c06f58e2b4d52b7e161046e94c9b9dba3e7f07c9191384?"
                                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b69732fbef8fbfbe2c06f58e2b4d52b7e161046e94c9b9dba3e7f07c9191384?"
                                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b69732fbef8fbfbe2c06f58e2b4d52b7e161046e94c9b9dba3e7f07c9191384?"
                                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                            />
                                        </div>
                                        <div className="text-zinc-800 text-lg leading-7 mt-2.5">
                                            Gemma Nolen, <br />
                                            Google
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="items-stretch bg-stone-50 flex w-full grow flex-col mx-auto pl-8 pr-6 py-8 border-[1.5px] border-solid border-amber-200 max-md:mt-10 max-md:px-5">
                                <div className="text-zinc-800 text-xl font-semibold leading-8">
                                    This is a template Figma file, turned into code using Anima.
                                    Learn more at AnimaApp.com
                                </div>
                                <div className="flex justify-between gap-5 mt-20 items-start max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        srcSet={author3} alt='author3'
                                        className="aspect-square object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
                                    />
                                    <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                                        <div className="items-stretch flex gap-1.5 pr-20 max-md:pr-5">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81449dccb7bb6e798268db0aa66e15f49ba031038a502d80708a603eb7224273?"
                                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81449dccb7bb6e798268db0aa66e15f49ba031038a502d80708a603eb7224273?"
                                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81449dccb7bb6e798268db0aa66e15f49ba031038a502d80708a603eb7224273?"
                                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81449dccb7bb6e798268db0aa66e15f49ba031038a502d80708a603eb7224273?"
                                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81449dccb7bb6e798268db0aa66e15f49ba031038a502d80708a603eb7224273?"
                                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                            />
                                        </div>
                                        <div className="text-zinc-800 text-lg leading-7 mt-2.5">
                                            Gemma Nolen, <br />
                                            Google
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-center bg-white flex w-full flex-col mb-12 pb-12 px-16 max-md:max-w-full max-md:mb-10 max-md:px-5">
                <div className="items-stretch flex w-full max-w-[1080px] flex-col mb-5 pt-12 border-t-2 border-t-black border-t-opacity-20 border-solid max-md:max-w-full">
                    <div className="mt-5 max-md:max-w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
                                <div className="flex flex-col items-start max-md:mt-10">
                                    <div className="text-zinc-800 text-3xl font-semibold leading-10 self-stretch whitespace-nowrap">
                                        Let’s work together
                                    </div>
                                    <div className="text-zinc-800 text-lg leading-7 self-stretch mt-10">
                                        This is a template Figma file, turned into code using Anima.
                                        Learn more at AnimaApp.com This is a template Figma file,
                                        turned into code using Anima. Learn more at AnimaApp.com
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ffe8f1d072218c2774130389337e91b85e08df6499abaf10f376f11bc5ed097?"
                                        className="aspect-[6.44] object-contain object-center w-[232px] overflow-hidden max-w-full mt-16 max-md:mt-10"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
                                    <div className="text-zinc-800 text-lg leading-7 items-stretch bg-zinc-100 self-stretch justify-center px-8 py-5 max-md:max-w-full max-md:px-5">
                                        Name
                                    </div>
                                    <div className="text-zinc-800 text-lg leading-7 items-stretch bg-zinc-100 self-stretch justify-center mt-5 px-8 py-5 max-md:max-w-full max-md:px-5">
                                        Email
                                    </div>
                                    <div className="text-zinc-800 text-lg leading-7 items-stretch bg-zinc-100 self-stretch justify-center mt-5 px-8 py-5 max-md:max-w-full max-md:px-5">
                                        Type your message here
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                    </div>
                                    <div className="text-white text-center text-xl font-semibold leading-8 whitespace-nowrap items-center bg-zinc-800 w-[235px] max-w-full justify-center mt-10 px-16 py-6 self-start max-md:px-5">
                                        Submit
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home
