import AssetContants from "@/utils/assetConstant"
import Image from "next/image"
import { FaAngleDown, FaGlobe } from "react-icons/fa"

const Footer = ({
    className
}) => {
    return (
        <footer className={`footer footer-center p-4 bg-base-100 text-base-content min-h-[32rem] flex items-start ${className}`}
            style={{
                backgroundImage: `url(${AssetContants.footer1})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom',
            }}
        >
            <div className="flex pt-8 pb-24 gap-24 w-full px-12">
                <div className="flex flex-col gap-32">
                    <Image src={AssetContants.logoWhite} width={160} height={50} alt="Logo" />
                    <div className="btn btn-outline btn-md rounded-3xl  h-10">
                        <FaGlobe size={22} />
                        <span className="text-white text-base font-semibold">English</span>
                        <FaAngleDown />
                    </div>
                </div>
                <div className="w-3/4 flex justify-evenly px-4 text-start">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">USEFUL</h3>
                        <ul className="space-y-4">
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Dashboard</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">White Label Miniapps</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Miniapp Platform</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Case Studies</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
                        <ul className="space-y-4">
                            <li className="mb-2">
                                <a href="#" className="hover:underline">About</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Careers</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Blog</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">CONTACTS</h3>
                        <ul className="space-y-4">
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Book a Demo</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">LinkedIn</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">X (Twitter)</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Facebook</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Image src={'https://framerusercontent.com/images/Rem3Qwu7KF7ND7EFsjmfkG87Bto.png'} width={160} height={50} alt="Logo" />
                </div>
            </div>

        </footer>
    )
}

export default Footer