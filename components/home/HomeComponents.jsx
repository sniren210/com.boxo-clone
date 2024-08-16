import { AnimatePresence, motion, useScroll } from 'framer-motion'
import AssetContants from "@/utils/assetConstant"
import Image from "next/image"
import GravitySection from "../_shared/common/gravitySection"
import { useEffect, useRef, useState } from "react"



const ScrollVideo = () => {
    const videoRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (videoRef.current && containerRef.current) {
                const { top, height } = containerRef.current.getBoundingClientRect()
                const windowHeight = window.innerHeight
                const scrollPercentage = Math.max(0, Math.min(1, (windowHeight - top) / (height)))

                videoRef.current.play()
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div ref={containerRef} className="h-[80vh] sticky top-24 mx-8">
            <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-3xl"
                src="https://framerusercontent.com/assets/AahaA3xgfCHMuf4h7uNxauXynzw.mp4"
                muted
                playsInline
            />
        </div>
    )
}

const FAQ = () => {
    const [openAccordion, setOpenAccordion] = useState(null)

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index)
    }

    const faqItems = [
        {
            question: "What is a Super App?",
            answer: "Most apps can be transformed into a Super App or a miniapp with appropriate development using Boxo's tools, facilitating their integration into other applications."
        },
        {
            question: "How can Boxo help my app?",
            answer: "Boxo provides tools and services to transform your app into a Super App or miniapp, enabling integration with other applications and expanding your app's functionality."
        },
        {
            question: "What are the benefits of using Boxo?",
            answer: "Using Boxo allows you to enhance your app's capabilities, reach a wider audience through integration, and potentially increase user engagement and retention."
        }
    ]

    return (
        <div className="bg-white pb-24 flex flex-col h-full w-full rounded-[48px] justify-between">
            <div className="container mx-auto py-16 flex gap-14 px-12">
                <div className="w-1/2">
                    <p className="text-black text-6xl w-full font-semibold">Frequently Asked Questions</p>
                    <p className="text-gray-800 mt-4">Get answers to commonly asked questions about Boxo, our features, and how we can turn your app into a Super App.</p>
                </div>

                <div className="space-y-4 w-1/2">
                    <motion.div className="accordion flex flex-col gap-8">
                        {faqItems.map((item, index) => (
                            <motion.div key={index} className="accordion-item bg-white text-black rounded-[24px] w-full">
                                <motion.button
                                    className="accordion-button relative flex items-center w-full py-6 px-5 text-xl bg-[#f2f2f2] rounded-[24px] hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
                                    onClick={() => toggleAccordion(index)}
                                    initial={false}
                                    animate={{ backgroundColor: openAccordion === index ? "#e5e5e5" : "#f2f2f2" }}
                                >
                                    {item.question}
                                    <motion.span
                                        className="ml-auto flex items-center bg-black rounded-full p-2"
                                        animate={{ rotate: openAccordion === index ? 180 : 0 }}
                                    >
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
                                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </motion.span>
                                </motion.button>
                                <AnimatePresence initial={false}>
                                    {openAccordion === index && (
                                        <motion.div
                                            key="content"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: { opacity: 1, height: "auto" },
                                                collapsed: { opacity: 0, height: 0 }
                                            }}
                                            transition={{ duration: 0.95, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="accordion-body py-4 px-5">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

const HomeComponent = () => {
    const [animate1, setAnimate1] = useState({ scale: 1 });
    const [animate2, setAnimate2] = useState({ scale: 1 });
    const [animate3, setAnimate3] = useState({ scale: 1 });
    const [animateGlobe, setAnimateGlobe] = useState({ x: ["0%", "-50%"] });
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        setAnimateGlobe({ x: ["0%", "-100%"] });
    }, []);

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            console.log(latest);
            if (latest > 0.1) {
                setAnimate1({ scale: 0.95, y: 50 });
            } else {
                setAnimate1({ scale: 1 });
            }

            if (latest > 0.6) {
                setAnimate2({ scale: 0.95, y: 100 });
            } else {
                setAnimate2({ scale: 1 });
            }

            if (latest > 0.9) {
                setAnimate3({ scale: 0.95, y: 50 });
            } else {
                setAnimate3({ scale: 1 });
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress]);


    return (
        <div className="w-full px-8 ">
            <AnimatePresence>
                <motion.div
                    className="bg-white pb-24 flex flex-col h-full w-full rounded-b-[48px] justify-between"
                    initial={{ scale: 1 }}
                    animate={animate1}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.95 }}
                    transition={{ duration: 0.5 }}
                    exit={{ scale: 0.95 }}
                >
                    <div className="flex h-full w-full rounded-b-[48px] justify-between">
                        <div className="flex flex-col justify-center items-start pl-12">
                            <span className="text-[80px] font-bold text-black">
                                Turn your App <br /> into a Super App
                            </span>
                            <p className="text-black">Allow your users to shop, pay bills, book taxis, and more — all within your app.</p>
                            <div className="btn btn-[bg-base-100] btn-md rounded-3xl w-36 h-10 mt-12">
                                <span className="text-white">Get Started</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-[600px] h-[600px]">
                            <video
                                autoPlay
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="https://framerusercontent.com/assets/FupNgJt7DKt9P6SMjqx1XlMb3A.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className="block text-center mt-24">
                        <p className="text-gray-800">Backed by leading investors and unicorn founders</p>
                        <div className="flex gap-4 justify-center items-center flex-wrap mt-12">
                            <div className="w-1/12">
                                <Image src={AssetContants.invester1} width={100} height={60} />
                            </div>
                            <div className="w-1/12">
                                <Image src={AssetContants.invester2} width={100} height={60} />
                            </div>
                            <div className="w-1/12">
                                <Image src={AssetContants.invester3} width={100} height={60} />
                            </div>
                            <div className="w-1/12">
                                <Image src={AssetContants.invester4} width={100} height={60} />
                            </div>
                            <div className="w-1/12">
                                <Image src={AssetContants.invester5} width={100} height={60} />
                            </div>
                            <div className="w-1/12">
                                <Image src={AssetContants.invester6} width={100} height={60} />
                            </div>
                            <div className="w-1/12">
                                <Image src={AssetContants.invester7} width={100} height={60} />
                            </div>

                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className="bg-base-200 flex flex-col h-full w-full rounded-[48px] justify-between relative z-40">
                <div className="flex flex-col gap-2 text-center justify-center w-full items-center mt-24">
                    <p className="text-gray-400 text-6xl w-2/3 font-semibold">Explore Endless Possibilities</p>
                    <p className="text-gray-400">From marketplace to bill payments, Boxo offers various services for your users so they never need to leave your app.</p>
                </div>
                <div className="mx-12 mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

                        {/* Large Card */}
                        <div className="bg-base-300 p-4 rounded-lg md:col-span-2 row-span-2">
                            <h2 className="text-xl font-semibold mb-2 ">Marketplace</h2>
                            <p className="text-gray-400">Create a seamless one-click shopping experience across various merchants</p>
                        </div>

                        {/* Small Cards */}
                        <div className="bg-base-300 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">AI Bot</h2>
                            <p className="text-gray-400">Stand out in user experience with 24/7 customer support, offering AI-powered insights based on your customers data</p>
                        </div>

                        <div className="bg-base-300 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">Flights</h2>
                            <p className="text-gray-400">Make it easy for users to find and book flights</p>
                        </div>

                        <div className="bg-base-300 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">Ride Hailing</h2>
                            <p className="text-gray-400">Allow users to book a ride to wherever, whenever</p>
                        </div>

                        <div className="bg-base-300 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">Tickets</h2>
                            <p className="text-gray-400">Book movie tickets and more</p>
                        </div>

                        {/* Multiple Small Cards */}
                        <div className="bg-base-300 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">Bills</h2>
                        </div>

                        <div className="bg-base-300 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">Lending</h2>
                        </div>

                        <div className="bg-base-300 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">Insurance</h2>
                        </div>

                        <div className="bg-base-300 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">Vouchers</h2>
                        </div>

                        <div className="bg-base-300 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">eSIMs</h2>
                            <p className="text-gray-400">Provide connection and mobile plan options wherever they travel</p>
                        </div>

                        <div className="bg-base-300 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-2">Donation</h2>
                            <p className="text-gray-400">Provide the platform for users to do good deeds for millions from one app</p>
                        </div>

                        {/* Footer Section */}
                        <div className="col-span-full bg-base-300 flex justify-between items-center  p-4 rounded-lg">
                            <p className="text-lg font-semibold">...many more miniapps</p>
                            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">Explore Miniapps</button>
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <GravitySection />
                    </div>
                </div>
            </div>

            <motion.div
                className="bg-white pb-24 flex flex-col h-full w-full rounded-[48px] justify-between"
                initial={{ scale: 1 }}
                animate={animate2}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.95 }}
                transition={{ duration: 0.5 }}
                exit={{ scale: 0.95 }}

            >
                <div className="flex flex-col gap-2 text-center justify-center w-full items-center mt-32">
                    <p className="text-black text-6xl w-2/4 font-semibold">Launch New Services 10X Faster</p>
                    <p className="text-gray-800">Go beyond your core business and improve your users’ overall experience. A single integration work for you, a 24/7 digital routine for your users.</p>
                </div>
                <div className="flex gap-4 px-24 mt-16">
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                        <div className="bg-white p-6 rounded-lg shadow-lg h-[320px] flex flex-col justify-evenly">
                            <div className="flex justify-center items-center mb-4">
                                <div className="p-2 bg-gray-100 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M11.03 2.97a.75.75 0 011.06 1.06L10.06 6H15a.75.75 0 110 1.5h-5a.75.75 0 01-.75-.75V2.97zM7.5 15v2.25a.75.75 0 01-1.5 0V15H3.75a.75.75 0 010-1.5h2.25V11.25a.75.75 0 011.5 0V13.5h2.25a.75.75 0 010 1.5H7.5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-xl font-semibold mb-2 text-black">Launch new features swiftly</h2>
                            <p className="text-gray-600">Pick and choose features that are relevant for your business and launch new features in weeks. Stay ahead of the competition.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg h-[320px] flex flex-col justify-evenly">
                            <div className="flex justify-center items-center mb-4">
                                <div className="p-2 bg-gray-100 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 1a2 2 0 00-2 2v1H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-3V3a2 2 0 00-2-2zm0 11a3 3 0 100-6 3 3 0 000 6z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-xl font-semibold mb-2 text-black">Drive new revenue streams</h2>
                            <p className="text-gray-600">Unlock new financial potentials with our modules, designed to seamlessly integrate and create diverse revenue opportunities for your business.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg h-[320px] flex flex-col justify-evenly">
                            <div className="flex justify-center items-center mb-4">
                                <div className="p-2 bg-gray-100 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 2a8 8 0 00-8 8 8 8 0 008 8 8 8 0 008-8 8 8 0 00-8-8zm1 4a1 1 0 10-2 0v4a1 1 0 001 1h4a1 1 0 100-2h-3V6z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-xl font-semibold mb-2 text-black">Boost user engagement</h2>
                            <p className="text-gray-600">Provide a platform for your users’ digital routine, tailored to captivate, retain your audience, and boost daily interaction and loyalty.</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg h-[320px] flex flex-col justify-evenly">
                            <div className="flex justify-center items-center mb-4">
                                <div className="p-2 bg-gray-100 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 4a5 5 0 00-5 5v1.5l-.44.44A1.5 1.5 0 004 12.5V13h12v-.5a1.5 1.5 0 00-.56-1.06L15 10.5V9a5 5 0 00-5-5z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-xl font-semibold mb-2 text-black">Improve user experience</h2>
                            <p className="text-gray-600">Elevate the user experience with your very own in-app features. Enable one-click log-in experience and seamless payment systems.</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col gap-2 text-center justify-center w-full items-center mt-32 mb-12">
                    <p className="text-black text-6xl w-1/3 font-semibold">1x Integration For Multiple Services</p>
                    <div className="flex mx-16 gap-8 my-24 py-12">
                        <div className="flex flex-col w-1/2">
                            <div className="h-[100vh] text-start">
                                <p className="text-black text-6xl w-2/4 font-semibold">Launch New Services 10X Faster</p>
                                <p className="text-gray-800">Go beyond your core business and improve your users’ overall experience. A single integration work for you, a 24/7 digital routine for your users.</p>
                            </div>
                            <div className="h-[100vh] text-start">
                                <p className="text-black text-6xl w-2/4 font-semibold">Launch New Services 10X Faster</p>
                                <p className="text-gray-800">Go beyond your core business and improve your users’ overall experience. A single integration work for you, a 24/7 digital routine for your users.</p>
                            </div>
                            <div className="h-[100vh] text-start">
                                <p className="text-black text-6xl w-2/4 font-semibold">Launch New Services 10X Faster</p>
                                <p className="text-gray-800">Go beyond your core business and improve your users’ overall experience. A single integration work for you, a 24/7 digital routine for your users.</p>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <ScrollVideo />
                        </div>

                    </div>
                </div>

            </motion.div>
            <div
                className="bg-base-200 flex flex-col h-full w-full rounded-[48px] justify-between relative"                >
                <div className='relative z-30 '>
                    <div className="flex flex-col gap-2 text-center justify-center w-full items-center mt-24">
                        <p className="text-gray-400 text-6xl w-2/3 font-semibold">Enterprise Grade Security</p>
                        <p className="text-gray-400">Risk management checklist in every deployment, ensuring security at every step.</p>
                    </div>

                    <div className=" text-white">
                        <div className="container mx-auto py-16 px-8">

                            <div className="flex flex-col gap-24 justify-center items-center">
                                {['Top-tier security standards', 'Encryption of data in rest and motion', 'Compliance with leading security protocols'].map((title, index) => (
                                    <div key={index} className="flex items-center w-1/2 gap-8">
                                        {/* <svg className={`w-12 h-12 text-${['blue', 'green', 'yellow'][index]}-500 mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10D"></path>
                                            </svg> */}
                                        <div className='w-full'>
                                            <h2 className="text-2xl font-bold mb-2">{title}</h2>
                                        </div>
                                        <div className='w-full'>
                                            <p>{['Leverage unparalleled protection with our advanced security measures, rigorously tested to meet the highest industry standards.', 'Ensure the utmost confidentiality with our robust encryption, safeguarding your data both at rest and during transmission.', 'Stay ahead in compliance with our strict adherence to leading security protocols, ensuring your Super App meets global regulatory standards.'][index]}</p>
                                        </div>

                                    </div>
                                ))}
                                <div className="flex space-x-4 mt-4 w-full justify-end w-1/2">
                                    <img src={AssetContants.footer} alt="ISO 27001:2022" className="w-[230px] h-[80px]" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='my-32'>
                        <div className="flex flex-col gap-2 text-center justify-center w-full items-center mt-24">
                            <p className="text-gray-400 text-6xl w-2/3 font-semibold">500M+ Combined Users Worldwide</p>
                        </div>
                        <div className='mt-12'>
                            <div className="flex overflow-hidden ">
                                <motion.ul
                                    className="flex gap-4  whitespace-nowrap"
                                    initial={{ x: "0%" }}
                                    animate={animateGlobe}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 100,
                                        ease: "linear",
                                    }}
                                >
                                    <ul className="flex w-full gap-10 h-full max-w-full max-h-full place-items-center m-0 p-0 list-none relative flex-row will-change-transform bg-transparent">
                                        {[
                                            { name: "Vodacom", image: "https://framerusercontent.com/images/UBsv5iOsUBX53tlvudj7kBw4.png" },
                                            { name: "GCash", image: "https://framerusercontent.com/images/oa90AZ3CW4WVOSzKiVbMrUtemA.png" },
                                            { name: "Touch 'n Go", image: "https://framerusercontent.com/images/ZQrIgW7IIjVVERcTo9YpL847jY.png" },
                                            { name: "Binance", image: "https://framerusercontent.com/images/cVKoBdK1WCTd9dWXrLYMaVDRMQ.png" },
                                            { name: "UnaCash", image: "https://framerusercontent.com/images/yrmxGRdKSGg7nXl3945g3RkG1Sk.png" },
                                            { name: "Paytm", image: "https://framerusercontent.com/images/srZeXHxeB6ryCrvd1umLUZH6qHs.png" },
                                            { name: "Dana", image: "https://framerusercontent.com/images/IqAB5oMK7kakuByDY9sbNv5XQ.png" },
                                            { name: "Zalo", image: "https://framerusercontent.com/images/02LAEtu9yW3TBz6kPXHinkDaY.png" },
                                            { name: "MoMo", image: "https://framerusercontent.com/images/0JlrrQN4lQi2jVZWdJPLOK37Zc.png" },
                                        ].map((app, index) => (
                                            <li key={index} className='ml-12'>
                                                <div >
                                                    <div >
                                                        <div className='w-[100px] h-[100px] shadow-inner'>
                                                            <img
                                                                src={app.image}
                                                                alt=""
                                                                className="block w-full h-full rounded-inherit object-center object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='text-center'>
                                                        <p >
                                                            {app.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.ul>
                            </div>
                        </div>
                    </div>

                    <div className='h-[50vh]'>

                    </div>

                </div>
                <div className="flex flex-col absolute z-20 bottom-0 left-0">
                    <Image src={'https://framerusercontent.com/images/wPxZhn4MqxYyMTRAiX6QHnJgOg.png?scale-down-to=2048'} width={1440} height={320} alt="Logo" />
                </div>
                <div className='absolute h-full left-0 top-0 w-full opacity-5'>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'transparent',
                        backgroundImage: 'linear-gradient(rgb(255, 255, 255) 2px, transparent 2px),linear-gradient(90deg, rgb(255, 255, 255) 2px, transparent 2px),linear-gradient(rgb(255, 255, 255) 1px, transparent 1px),linear-gradient(90deg,rgb(255, 255, 255) 1px,var(--token-1c0ed768-6f1a-461b-98b6-59c7c8e02179, rgb(23, 23, 23)) 1px)',
                        backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
                        backgroundSize: '340px 340px, 340px 340px, 68px 68px, 68px 68px',
                        borderRadius: '0px',
                    }}></div>
                </div>
            </div>
            <AnimatePresence>
                <motion.div
                    initial={{ scale: 1 }}
                    animate={animate3}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.95 }}
                    transition={{ duration: 0.5 }}
                    exit={{ scale: 0.95 }}
                >

                    <FAQ />
                </motion.div>
            </AnimatePresence>
            <div
                className="bg-base-200 flex flex-col h-full w-full rounded-[48px] justify-between relative"
            >
                <div className='relative z-30 flex flex-col'>
                    <div className="flex flex-col gap-2 text-center justify-center w-full items-center mt-24">
                        <p className="text-gray-400 text-6xl w-2/3 font-semibold">Innovation Through Integration</p>
                        <p className="text-gray-400">Take the first step to join the Super App revolution.
                            Book a demo today to learn more about how Boxo can redefine your app is journey.</p>
                    </div>

                    <div className='w-full h-[80vh] mt-24 rounded-b-[48px] flex justify-center items-center group' style={{
                        backgroundImage: 'url(https://framerusercontent.com/images/ex6HlLWrHbRV61SetWxRO1tP1pk.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <Image
                            src={AssetContants.contentApp}
                            width={300}
                            height={250}
                            className='mt-48 rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-125'
                            alt="Content App"
                        />
                    </div>

                </div>
                <div className='absolute h-full left-0 top-0 w-full opacity-5'>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'transparent',
                        backgroundImage: 'linear-gradient(rgb(255, 255, 255) 2px, transparent 2px),linear-gradient(90deg, rgb(255, 255, 255) 2px, transparent 2px),linear-gradient(rgb(255, 255, 255) 1px, transparent 1px),linear-gradient(90deg,rgb(255, 255, 255) 1px,var(--token-1c0ed768-6f1a-461b-98b6-59c7c8e02179, rgb(23, 23, 23)) 1px)',
                        backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
                        backgroundSize: '340px 340px, 340px 340px, 68px 68px, 68px 68px',
                        borderRadius: '0px',
                    }}>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomeComponent