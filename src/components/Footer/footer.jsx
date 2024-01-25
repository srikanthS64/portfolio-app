import React from 'react';
import icons1 from "../../assets/icons/icons-1.svg";
import icons2 from "../../assets/icons/icons-2.svg";
import icons3 from "../../assets/icons/icons-3.svg";
import icons4 from "../../assets/icons/icons-4.svg";
import icons5 from "../../assets/icons/icons-5.svg";

const footer = () => {
    return (
        <footer class="">
            <div class=" container mx-auto  p-4 py-6 lg:py-8 items-centre self-center flex w-full max-w-full flex-col pt-12 border-t-2  border-t-opacity-20 border-solid max-md:max-w-full max-sm:items-center">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm sm:text-center max-sm:ml-10">© 2024 | All Rights Reserved.
                    </span>
                    <div class="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <img src={icons1} alt="" style={{color:"white"}} />
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                           
                        <img src={icons2} alt="" style={{color:"white"}} />
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            
                        <img src={icons3} alt="" style={{color:"white"}} />
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            
                        <img src={icons4} alt="" style={{color:"white"}} />
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                           
                        <img src={icons5} alt="" style={{color:"white"}} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer



