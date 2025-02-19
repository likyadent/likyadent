import Logo from "../../images/logo.png";
import "../../css/header.css";

const Header = () => {
  return (
    <>
      <div className="flex justify-between px-12 py-2 items-center fixed top-0 w-full headerAni z-30 bg-white">
        <div className="flex flex-col">
          <img src={Logo} className="w-[200px]" alt="LikyaDent Logo" />
          <p className="kaushan-500 opacity-90 text-sm">
            Treating The Patient, Not Just The Smile.
          </p>
        </div>
        <div className="flex gap-10 items-center mt-2 headerLinks">  
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
      </div>
    </>
  );
};

export default Header;
