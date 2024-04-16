"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "./logo.png"
import Image from "next/image";
function Navbar() {

    const [show, setShow] = useState(false);

    const TOP_OFFSET = 50;
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (

        <div className={`transition ease-linear fixed top-0 w-full z-50 h-16 flex items-center justify-around ${showBackground ? "bg-white shadow-lg" : ""}`}>
            <h1 className="">
                <Link href={"/"}>
                    <Image
                        src={logo}
                        width={100}
                        height={100}
                    />
                </Link>
            </h1>

            <div className=" flex gap-6">

                <div>
                    <Link href={"/"}>Home</Link>
                </div>

                <div>
                    <button onClick={() => { setShow(!show) }} data-ripple-light="true" data-popover-target="menu">Losses</button>
                    {!show ? <></> :
                        <ul role="menu" data-popover="menu" data-popover-placement="bottom"
                            className="absolute z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                            <li role="menuitem"
                                className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                <Link href={"/elastics"}>Elastic Shortening</Link>

                            </li>
                            <li role="menuitem"
                                className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                <Link href={"/relaxation"}>Relaxation</Link>

                            </li>
                            <li role="menuitem"
                                className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                <Link href={"/creep"}>Creep of Concrete</Link>
                            </li>
                            <li role="menuitem"
                                className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                <Link href={"/shrinkage"}>Shrinkage</Link>
                            </li>
                            <li role="menuitem"
                                className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                <Link href={"/anchorage"}>Anchorage Slip</Link>
                            </li>
                            <li role="menuitem"
                                className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                <Link href={"/friction"}>Friction</Link>
                            </li>
                        </ul>
                    }



                </div>

                <div>
                    About
                </div>
                <div>
                    Team
                </div>
                <div>
                    <Link href={"/calculator"}>
                        <button className=" bg-orange-400 px-2 text-white rounded-xl ">
                            Calculate Loss
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;