import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import header from "../../assets/img/header-1.png";
import img1 from "../../assets/img/img-1.png";
import img2 from "../../assets/img/img-2.png";
import img3 from "../../assets/img/img-3.png";
import Typewriter from "typewriter-effect";
import Latestwork from "../Home/latestwork";
import Client from "../Home/client";
import icons1 from "../../assets/icons/icons-1.svg";
import icons2 from "../../assets/icons/icons-2.svg";
import icons3 from "../../assets/icons/icons-3.svg";
import icons4 from "../../assets/icons/icons-4.svg";
import icons5 from "../../assets/icons/icons-5.svg";

const Home = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1es6qxp', 'template_fp7qmit', form.current, 'zdYYWToN7xTK9NK1R')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="items-stretch flex flex-col pb-12">
            <div className="justify-center items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5 ">
                <div className="w-full max-w-[1080px] my-12 max-md:max-w-full max-md:my-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-sm:-mt-20">
                        <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10 max-sm:items-center">
                                <h3 className="text-zinc-800 text-xl font-semibold leading-8 max-md:max-w-full">
                                    Branding | Image making{" "}
                                </h3>
                                <h1 className="text-zinc-800 text-5xl font-bold leading-[70px] mt-5 max-md:max-w-full max-md:text-4xl max-md:leading-[50px] max-sm:text-center">
                                    My awesome <br />
                                    <Typewriter
                                        options={{
                                            autoStart: true,
                                            loop: true,
                                            delay: 30,
                                            strings: ["Portfolio"]
                                        }}
                                    />
                                </h1>
                                <p className="text-zinc-800 font-medium leading-7 mt-10 max-md:max-w-full">
                                    And I made it myself! Yes. In Figma with Anima
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0 max-sm:w-[80%] max-sm:items-center max-sm:self-center">
                            <img
                                loading="lazy"
                                srcSet={header} alt='header'
                                className="aspect-[1.17] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-7 header-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-center items-center bg-white flex w-full flex-col px-16 max-md:max-w-full max-md:px-5">
                <div className="justify-between items-center flex w-full max-w-[1200px] px-9 max-sm:px-0 gap-5 py-12 border-y-2  border-y-opacity-20 border-solid max-md:max-w-full max-md:flex-wrap max-sm:w-48">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc341395d4abb34bf4033360dd6eeac8aabaefad890539a3a9c688161af5d560?" alt=''
                        className="aspect-[1.59] object-contain object-center w-[40px] fill-zinc-800 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5896770b7fda8bf8a633254ba5932efe14b251a675683362c186c7eeb57d805f?" alt=''
                        className="aspect-[3.03] object-contain object-center w-[90px] fill-zinc-800 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/123f5a4a4ac4e155c6bb51f5e110702c9b22009b1538d2998ba68c23b6a3a908?" alt=''
                        className="aspect-[0.81] object-contain object-center w-[30px] fill-zinc-800 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/71753be02bca07050ec2eeb2d0362598a20789fbf119c6b95bd235564f9de68c?" alt=''
                        className="aspect-[4.09] object-contain object-center w-[110px] fill-zinc-800 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a45ba1e013fb3586a5149be9aad276dadd09afa6b055354fde3d4c692712199d?" alt=''
                        className="aspect-[6.29] object-contain object-center w-[150px] fill-zinc-800 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                </div>
            </div>
            <div className="justify-center items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
                <div className="w-full max-w-[1000px] mt-14 mb-10 max-md:max-w-full max-md:my-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 self-center items-center justify-center">
                        <div className="flex flex-col items-stretch w-[25%] max-md:w-full max-md:ml-0">
                            <div className="items-center flex grow flex-col max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={img1} alt='img1'
                                    className="aspect-square object-contain object-center w-[130px] overflow-hidden max-w-full"
                                />
                                <div className="text-zinc-800 text-center text-3xl font-semibold leading-10 self-stretch whitespace-nowrap mt-14 max-md:mt-10">
                                    Product design
                                </div>
                                <div className="text-zinc-800 text-center text-md leading-7 self-stretch mt-5">
                                    This is a template Figma file, turned into code using Anima.
                                    Learn more at AnimaApp.com
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[25%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="items-center flex grow flex-col max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={img2} alt='img2'
                                    className="aspect-square object-contain object-center w-[130px] overflow-hidden max-w-full"
                                />
                                <div className="text-zinc-800 text-center text-3xl font-semibold leading-10 self-stretch whitespace-nowrap mt-14 max-md:mt-10">
                                    Art direction
                                </div>
                                <div className="text-zinc-800 text-center text-md leading-7 self-stretch mt-5">
                                    This is a template Figma file, turned into code using Anima.
                                    Learn more at AnimaApp.com
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[25%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="items-center flex grow flex-col max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet={img3} alt='img3'
                                    className="aspect-square object-contain object-center w-[130px] overflow-hidden max-w-full"
                                />
                                <div className="text-zinc-800 text-center text-3xl font-semibold leading-10 self-stretch whitespace-nowrap mt-14 max-md:mt-10">
                                    Visual design
                                </div>
                                <div className="text-zinc-800 text-center text-md leading-7 self-stretch mt-5">
                                    This is a template Figma file, turned into code using Anima.
                                    Learn more at AnimaApp.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Latestwork />
            </div>

            <div>
                <Client />
            </div>

            <div className="items-center bg-white flex w-full flex-col mb- pb-12 px-16 max-md:max-w-full max-md:mb-10 max-md:px-5">
                <div className="items-stretch flex w-full max-w-[1200px] flex-col mb-5 pt-12 border-t-2  border-t-opacity-20 border-solid max-md:max-w-full">
                    <div className="mt-5 max-md:max-w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0 ">
                                <div className="flex flex-col items-start max-md:mt-10 max-sm:-mt-8">
                                    <div className="text-zinc-800 text-3xl font-semibold leading-10 self-stretch whitespace-nowrap">
                                        Let’s work together
                                    </div>
                                    <div className="text-zinc-800 w-[60%] max-sm:w-[90%] text-lg leading-7 self-stretch mt-10 mb-8">
                                        This is a template Figma file, turned into code using Anima.
                                        Learn more at AnimaApp.com This is a template Figma file,
                                        turned into code using Anima. Learn more at AnimaApp.com
                                    </div>
                                    <div class="flex sm:justify-center sm:mt-0">
                                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                            <img src={icons1} alt="" style={{ color: "white" }} />
                                        </a>
                                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">

                                            <img src={icons2} alt="" style={{ color: "white" }} />
                                        </a>
                                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">

                                            <img src={icons3} alt="" style={{ color: "white" }} />
                                        </a>
                                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">

                                            <img src={icons4} alt="" style={{ color: "white" }} />
                                        </a>
                                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">

                                            <img src={icons5} alt="" style={{ color: "white" }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[40%] ml-5 max-md:w-full max-md:ml-0 ">
                                <form className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10" ref={form} onSubmit={sendEmail}>
                                    <input className="text-zinc-800 text-lg leading-7 items-stretch bg-zinc-100 self-stretch justify-center px-8 py-5 max-md:max-w-full max-md:px-5" name='user_name' id='name' placeholder='Name' />
                                    <input className="text-zinc-800 text-lg leading-7 items-stretch bg-zinc-100 self-stretch justify-center mt-5 px-8 py-5 max-md:max-w-full max-md:px-5" name='user_email' id='email' placeholder='Email' />

                                    <textarea className="text-zinc-800 text-lg leading-7 items-stretch bg-zinc-100 self-stretch justify-center mt-5 px-8 py-5 max-md:max-w-full max-md:px-5" id='message' name='message' placeholder='Type your message here' />
                                    <button className="text-white text-center text-xl font-semibold leading-8 whitespace-nowrap items-center bg-zinc-800 w-[170px] max-w-full justify-center mt-10 px-8 py-3 self-start max-md:px-5 rounded-md max-sm:items-center max-sm:self-center">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
