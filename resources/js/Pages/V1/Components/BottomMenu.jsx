import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { AiFillHome, AiFillProfile } from "react-icons/ai";
import { BiCoinStack, BiTransfer } from "react-icons/bi";
import { RiStockFill } from "react-icons/ri";

const BottomMenu = ({ mode }) => {
    console.log(mode);
    return (
        <div
            className={`fixed inset-x-0 bottom-0 ${
                mode === "Dark" ? "bg-gray-700" : "bg-white"
            } shadow-lg border-t border-gray-300`}
        >
            <nav className="flex justify-around items-center h-16">
                <div className="flex flex-col items-center">
                    <a
                        href={route('v1.homepage')}
                        className={
                            mode === "Dark" ? "text-white" : "text-gray-500"
                        }
                    >
                        <AiFillHome className="h-6 w-6" />
                        <span className="text-xs">Home</span>
                    </a>
                </div>
             
                <div className="flex flex-col items-center">
                <a
                href={route('v1.trade', ['crypto', 'BTCUSDT'])}
                className={mode === "Dark" ? "text-white" : "text-gray-500"}
            >
                <BiTransfer className="h-6 w-6" />
                <span className="text-xs">Trade</span>
            </a>
            
                </div>
                <div className="flex flex-col items-center">
                    <a
                        href={route('v1.portfolio')}
                        className={
                            mode === "Dark" ? "text-white" : "text-gray-500"
                        }
                    >
                        <RiStockFill className="h-6 w-6" />
                        <span className="text-xs">Portfolio</span>
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <a
                        href={route('v1.profile')}
                        className={
                            mode === "Dark" ? "text-white" : "text-gray-500"
                        }
                    >
                        <AiFillProfile className="h-6 w-6" />
                        <span className="text-xs">Profile</span>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default BottomMenu;
