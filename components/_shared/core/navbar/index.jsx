import AssetContants from "@/utils/assetConstant"
import Image from "next/image"
import { motion } from "framer-motion"
import { forwardRef, useEffect, useState } from "react"
import { FaAngleDown, FaGlobe } from "react-icons/fa";

const Navbar = () => {

    const [animate, setAnimate] = useState({ x: ["0%", "-80%"] });

    useEffect(() => {
        setAnimate({ x: ["0%", "-100%"] });
    }, []);

    return (
        <div className="xl:flex hidden w-full px-8 pt-8">
            <div className="bg-white w-full rounded-t-[48px]">
                <div className="flex overflow-hidden rounded-t-[48px] bg-base-200">
                    <motion.ul
                        className="flex gap-4 bg-base-200 whitespace-nowrap"
                        initial={{ x: "0%" }}
                        animate={animate}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        }}
                    >
                        {[...Array(6)].map((_, index) => (
                            <li key={index}>
                                <div className="flex items-center">
                                    <div className="183a8vi" >
                                        <div className="w-36 h-10">
                                            <Image
                                                src="https://framerusercontent.com/images/vStU5fzgO8QyyfLFC0WFISt9Hw.png"
                                                alt=""
                                                width={560}
                                                height={560}
                                            />
                                        </div>
                                    </div>
                                    <div >
                                        <p className="text-nowrap">
                                            Airalo and Boxo Join Forces to Revolutionise White-Label eSIM
                                            Solutions
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </motion.ul>
                </div>
                <div className="flex gap-12 items-center px-12">
                    <div className="w-40">
                        <Image src={AssetContants.logo} width={150} height={50} alt="Logo" />
                    </div>
                    <ul className="flex gap-12 items-center w-3/5">
                        <li>
                            <span className="text-black">Miniapps</span>
                        </li>
                        <li>
                            <span className="text-black">Platform</span>
                        </li>
                        <li>
                            <span className="text-black">Case Studies</span>
                        </li>
                        <li>
                            <span className="text-black">Blog</span>
                        </li>
                        <li>
                            <span className="text-black">About</span>
                        </li>
                    </ul>
                    <div className="flex py-4 gap-4">
                        <div className="btn btn-outline btn-md rounded-3xl w-36 h-10">
                            <span className="text-black">Dashboard</span>
                        </div>
                        <div className="btn btn-[bg-base-100] btn-md rounded-3xl w-36 h-10">
                            <span className="text-white">Get Started</span>
                        </div>
                        <div className="btn btn-outline btn-md rounded-3xl  h-10">
                            <FaGlobe color="black" size={22}/>
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default forwardRef(Navbar)