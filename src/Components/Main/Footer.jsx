import "../../css/footer.css"
import Logo from "../../images/fullBlackLogo.png"
import Facebook from "../../images/facebook.svg"
import Instagram from "../../images/instagram.svg"
import Twitter from "../../images/twitter.svg"
import Youtube from "../../images/youtube.svg"

const Footer = () => {
    return(
        <>
            <div className="flex flex-col sm:items-start items-center bg-black-special-footer p-8">
                <div className="flex sm:flex-row flex-col  sm:justify-between gap-12 sm:gap-4">
                    <div className="flex flex-col">
                        <img loading="lazy" src={Logo} className="invert w-[300px]" alt="Likya Dent Logo" />
                        <p className="kaushan-500 text-white">Treating The Patient, Not Just Smile.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="old-standard-500 text-3xl text-white">PAGES</p>
                        <ul className="list-disc text-white opacity-80 flex flex-col gap-3 ps-5 mt-4">
                            <li>
                                <a href="" className="text-white opacity-80 text-xl open-sans-500">Home</a>
                            </li>
                            <li>
                                <a href="" className="text-white opacity-80 text-xl open-sans-500">Reservation</a>
                            </li>
                            <li>
                                <a href="" className="text-white opacity-80 text-xl open-sans-500">Our Services</a>
                            </li> 
                            <li>
                                <a href="" className="text-white opacity-80 text-xl open-sans-500">Our Staff</a>
                            </li>
                            <li>
                                <a href="" className="text-white opacity-80 text-xl open-sans-500">Our Branches</a>
                            </li>
                            <li>
                                <a href="" className="text-white opacity-80 text-xl open-sans-500">Gallery</a>
                            </li>
                            <li>
                                <a href="" className="text-white opacity-80 text-xl open-sans-500">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <p className="old-standard-500 text-3xl text-white">OUR BRANCHES</p>
                        <ul className="list-disc text-white opacity-80 flex flex-col gap-3 ps-5 mt-4">
                            <li>
                                <a href="" className="text-white opacity-80 text-xl open-sans-500">Kalkan/Kaş</a>
                            </li>
                            <li>
                                <a href="" className="text-white opacity-80 text-xl open-sans-500">Hisarönü/Muğla</a>
                            </li>
                            <li>
                                <a href="" className="text-white opacity-80 text-xl open-sans-500">Taşyaka/Muğla</a>
                            </li> 
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <p className="old-standard-500 text-3xl text-white">CONTACT</p>
                        <ul className="list-disc text-white opacity-80 flex flex-col gap-3 ps-5 mt-4">
                            <li>
                                <a href="" className="text-white opacity-80 text-xl open-sans-500">info@likyadent.com</a>
                            </li>
                            <li>
                                <a href="" className="text-white opacity-80 text-xl open-sans-500">Create a ticket</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end mt-16 sm:mt-8 mb-3 gap-3">
                    <img loading="lazy" className="w-[45px]" src={Facebook} alt="Facebook" />
                    <img loading="lazy" className="w-[45px]" src={Instagram} alt="Instagram" />
                    <img loading="lazy" className="w-[45px]" src={Youtube} alt="YouTube" />
                    <img loading="lazy" className="w-[45px]" src={Twitter} alt="Twitter" />
                </div>
            </div>  
        </>
    )
}

export default Footer