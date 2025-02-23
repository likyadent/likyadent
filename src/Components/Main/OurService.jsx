import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Service1 from "../../images/services1.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import "swiper/css";
import "../../css/ourservices.css"

const OurService = () => {
    
    return(
        <>
            <div className="flex flex-col items-center my-32">
                <p className="old-standard-500 text-3xl sm:text-7xl mb-12">Our Services</p>
                <Swiper spaceBetween={10} className="max-w-[98vw] " slidesPerView={3} modules={[Autoplay]} breakpoints={{140: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1280: { slidesPerView: 3 }, }} autoplay={{ delay: 3000 }}>
                    <SwiperSlide className="flex justify-center">
                        <div className="flex flex-col gap-3 items-center w-[320px] sm:w-[420px]">
                            <img loading="lazy" width={"320px"} height={"200px"} src={Service1} className="w-[320px] sm:w-[420px]" alt="Root Canal Healt ENDODONTICS Likya Dent Services rounded-sm" />
                            <p className="text-xl sm:text-3xl old-standard-500">ENDODONTICS</p>
                            <p className="open-sans-500 text-start">Dişlerde endodontik tedavi (kanal tedavisi), dişin kök kanallarının temizlenmesi, şekillendirilmesi ve doldurulması işlemidir. Bu tür dişlerde tedavi daha zor olabilir çünkü kök kanallarına erişim ve çalışma alanı sınırlıdır.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-3 items-center w-[320px] sm:w-[420px]">
                            <img loading="lazy" width={"320px"} height={"200px"} src={Service1} className="w-[320px] sm:w-[420px]" alt="Root Canal Healt ENDODONTICS Likya Dent Services rounded-sm" />
                            <p className="text-xl sm:text-3xl old-standard-500">ENDODONTICS</p>
                            <p className="open-sans-500 text-start">Dişlerde endodontik tedavi (kanal tedavisi), dişin kök kanallarının temizlenmesi, şekillendirilmesi ve doldurulması işlemidir. Bu tür dişlerde tedavi daha zor olabilir çünkü kök kanallarına erişim ve çalışma alanı sınırlıdır.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-3 items-center w-[320px] sm:w-[420px]">
                            <img loading="lazy" width={"320px"} height={"200px"} src={Service1} className="w-[320px] sm:w-[420px]" alt="Root Canal Healt ENDODONTICS Likya Dent Services rounded-sm" />
                            <p className="text-xl sm:text-3xl old-standard-500">ENDODONTICS</p>
                            <p className="open-sans-500 text-start">Dişlerde endodontik tedavi (kanal tedavisi), dişin kök kanallarının temizlenmesi, şekillendirilmesi ve doldurulması işlemidir. Bu tür dişlerde tedavi daha zor olabilir çünkü kök kanallarına erişim ve çalışma alanı sınırlıdır.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-3 items-center w-[320px] sm:w-[420px]">
                            <img loading="lazy" width={"320px"} height={"200px"} src={Service1} className="w-[320px] sm:w-[420px]" alt="Root Canal Healt ENDODONTICS Likya Dent Services rounded-sm" />
                            <p className="text-xl sm:text-3xl old-standard-500">ENDODONTICS</p>
                            <p className="open-sans-500 text-start">Dişlerde endodontik tedavi (kanal tedavisi), dişin kök kanallarının temizlenmesi, şekillendirilmesi ve doldurulması işlemidir. Bu tür dişlerde tedavi daha zor olabilir çünkü kök kanallarına erişim ve çalışma alanı sınırlıdır.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-3 items-center w-[320px] sm:w-[420px]">
                            <img loading="lazy" width={"320px"} height={"200px"} src={Service1} className="w-[320px] sm:w-[420px]" alt="Root Canal Healt ENDODONTICS Likya Dent Services rounded-sm" />
                            <p className="text-xl sm:text-3xl old-standard-500">ENDODONTICS</p>
                            <p className="open-sans-500 text-start">Dişlerde endodontik tedavi (kanal tedavisi), dişin kök kanallarının temizlenmesi, şekillendirilmesi ve doldurulması işlemidir. Bu tür dişlerde tedavi daha zor olabilir çünkü kök kanallarına erişim ve çalışma alanı sınırlıdır.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-3 items-center w-[320px] sm:w-[420px]">
                            <img loading="lazy" width={"320px"} height={"200px"} src={Service1} className="w-[320px] sm:w-[420px]" alt="Root Canal Healt ENDODONTICS Likya Dent Services rounded-sm" />
                            <p className="text-xl sm:text-3xl old-standard-500">ENDODONTICS</p>
                            <p className="open-sans-500 text-start">Dişlerde endodontik tedavi (kanal tedavisi), dişin kök kanallarının temizlenmesi, şekillendirilmesi ve doldurulması işlemidir. Bu tür dişlerde tedavi daha zor olabilir çünkü kök kanallarına erişim ve çalışma alanı sınırlıdır.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button className="old-standard-500 text-xl mt-24 border border-gray-200 py-5 pt-6 px-10 rounded-sm transition-all duration-300 hover:bg-amber-400 hover:border-amber-400 hover:text-white">SEE ALL SERVICES</button>
            </div>
        </>
    )
}

export default OurService