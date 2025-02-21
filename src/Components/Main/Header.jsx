import Logo from "../../images/logo.webp";
import "../../css/header.css";
import Bar from "../../images/bar.svg"
import { useState } from "react";
import Close from "../../images/close.svg"

const Header = () => {

  const [modalOpen,setModalOpen] = useState(false);

  return (
    <>
      <div className={`fixed w-screen h-screen bg-transparent-black z-50 transition-all duration-300 ${modalOpen ? "block translate-x-0 opacity-100" : "w-[0px] translate-x-full opacity-0"}`}>
        <div className="bg-white relative end-0 w-full h-full z-50 flex flex-col items-end py-8 pe-5 gap-5">
          <a className="open-sans-500 text-4xl" href="#">HOME</a>
          <a className="open-sans-500 text-4xl" href="#">SERVICES</a>
          <a className="open-sans-500 text-4xl" href="#">OUR STAFF</a>
          <a className="open-sans-500 text-4xl" href="#">GALLERY</a>
          <a className="open-sans-500 text-4xl" href="#">CONTACT US</a>
        </div>
      </div>
      <div className="flex justify-between  px-6 sm:px-12 h-[100px] sm:py-2 items-center fixed top-0 w-full headerAni z-30 bg-white">
        <div className="flex flex-col ">
          <img src={Logo} className="w-[150px] sm:w-[200px]" alt="LikyaDent Logo" />
          <p className="kaushan-500 opacity-90 text-xs sm:text-sm">
            Treating The Patient, Not Just The Smile.
          </p>
        </div>
        <div className="hidden   sm:flex gap-5 lg:gap-10 items-center mt-2 headerLinks">  
          <a href="#" className="old-standard-500 text-xl atick">HOME</a>
          <div className="flex flex-col relative group">
            <a href="#" className="old-standard-500 text-xl atick">
              SERVICES
            </a>
            <div className=" bottom-[-5px] flex justify-center left-[-22px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-40">
                <div className="flex flex-col bg-white absolute justify-start transition-all  rounded-sm p-5 w-[200px] gap-4" style={{boxShadow: "0px 30px 30px 0px rgba(0,0,0,0.75)"}}>
                    <div className="">
                        <a href="#" className="inter-500 block">Aesthetic Dentistry</a>
                    </div>
                    <div className="">
                        <a href="#" className="inter-500 block">Aesthetic Fillings</a>
                    </div>
                    <div className="">
                        <a href="#" className="inter-500 block">Implant Surgery</a>
                    </div>
                    <div className="">
                        <a href="#" className="inter-500 block">Periodontology</a>
                    </div>
                    <div className="">
                        <a href="#" className="inter-500 block">Botox and Fillers</a>
                    </div>
                    <div className="">
                        <a href="#" className="inter-500 block">Teeth Whitening</a>
                    </div>
                    <div className="">
                        <a href="#" className="inter-500 block">Endodontics</a>
                    </div>
                    <div className="">
                        <a href="#" className="inter-500 block">Pedodontics</a>
                    </div>
                </div>
            </div>
          </div>
          <a href="#" className="old-standard-500 text-xl">OUR STAFF</a>
          <a href="#" className="old-standard-500 text-xl">GALLERY</a>
          <a href="#" className="old-standard-500 text-xl">CONTACT US</a>
        </div>
        <div className="sm:hidden flex items-center">
          <img src={Bar} onClick={() => setModalOpen(!modalOpen)} className={`sm:hidden block invert w-[40px] absolute transition-all duration-300 ${modalOpen ? "transform-[rotate(-90deg)] opacity-0" : "transform-[rotate(0deg)] opacity-100"}`} alt="Menu Bar" />
          <img src={Close} onClick={() => setModalOpen(!modalOpen)} className={`sm:hidden block invert w-[40px] transition-all duration-300 ${modalOpen ? "transform-[rotate(-90deg)] opacity-100" : "transform-[rotate(0deg)] opacity-0"}`} alt="Close Menu Bar" />
        </div>
      </div>
    </>
  );
};

export default Header;
