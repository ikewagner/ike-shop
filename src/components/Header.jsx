import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import Logo from "../img/logo.png";
import Pack from "../img/pack.png";

const Header = () => {
    return (
        <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
            {/* desktop & tablet */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <img src={Logo} className="w-8 object-cover" alt="logo" />
                <div className="flex items-center gap-8">
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="flex items-center gap-24 "
                    >
                        <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                            Início
                        </li>
                        <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                            Menu
                        </li>
                        <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                            Sobre nós
                        </li>
                        <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                            Serviços
                        </li>
                    </motion.ul>
                    <div
                        className="relative flex items-center justify-center"
                    >
                        <img src={Pack} className="w-8 object-cover" alt="Pack" />
                            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                                <p className="text-xs text-white font-semibold">
                                    2
                                </p>
                            </div>
                        
                    </div>
                    <div className="relative">
                        <motion.img
                            whileTap={{ scale: 0.6 }}
                            src={Logo}
                            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                            alt="userprofile"
                        />
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="flex items-center justify-between md:hidden w-full h-full ">
                <div
                    className="relative flex items-center justify-center"
                >
                    <img src={Pack} className="w-8 object-cover" alt="Pack" />

                    <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                        <p className="text-xs text-white font-semibold">
                            2
                        </p>
                    </div>

                </div>


                <img src={Logo} className="w-8 object-cover" alt="logo" />



                <div className="relative">
                    <motion.img
                        whileTap={{ scale: 0.6 }}

                        className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                        alt="userprofile"

                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                    >
                    </motion.div>
                </div>
            </div>
        </header>
    );
};

export default Header;