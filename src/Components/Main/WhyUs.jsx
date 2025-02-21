import "../../css/whyus.css"
import { useState,useEffect,useRef } from "react";
import Marquee from "react-fast-marquee";
import Person1 from "../../images/teams/person1.png"
import Person2 from "../../images/teams/person2.png"
import Person3 from "../../images/teams/person3.png"
import Person4 from "../../images/teams/person4.png"
import Person5 from "../../images/teams/person5.png"
import Person6 from "../../images/teams/person6.png"



const WhyUs = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const ref = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);



    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible2(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref2.current) observer.observe(ref2.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible3(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref3.current) observer.observe(ref3.current);

        return () => observer.disconnect();
    }, []);

    return(
        <>
            <div  className="flex flex-col items-center py-12 gap-24 sm:gap-12 my-24">
                <div id="whyUs" className="flex xl:flex-row flex-col items-center justify-between">
                    <div ref={ref} className={`flex  flex-col w-full sm:w-[600px] duration-2000 transition-all ${isVisible ? "opacity-100transform-[translateY(0px)] sm:transform-[translateX(0px)]" : "opacity-0   transform-[translateY(-25px)] sm:transform-[translateX(-35px)]"}`}>
                        <p className="old-standard-500 text-4xl sm:text-start text-center sm:text-5xl">Why Likya Dent?</p>
                        <p className="inter-500 mt-6 text-sm sm:text-lg w-[320px] sm:w-[550px] text-center sm:text-start">In the healthcare field, there's no room for compromise. Everything must be precise and impeccably clean. <span className="inter-600">This is exactly what Likya Dent delivers.</span></p>
                    </div>
                    <div className={`toLeftClipPath photo1 bg-cover sm:w-[600px] w-full h-[150px] mt-4 sm:mt-0  sm:h-[250px] me-auto duration-2000 transition-all  ${isVisible ? "opacity-100 transform-[translateY(0px)] sm:transform-[translateX(0px)]" : "opacity-0   transform-[translateY(-25px)] sm:transform-[translateX(35px)]"}`}>

                    </div>
                </div>
                <div className="flex xl:flex-row-reverse flex-col items-center">
                    <div ref={ref2} className={`flex flex-col w-[320px] sm:w-[600px] items-center sm:items-end duration-2000 transition-all ${isVisible2 ? "opacity-100 transform-[translateY(0px)] sm:transform-[translateX(0px)]" : "opacity-0   transform-[translateY(-25px)] sm:transform-[translateX(35px)]"}`}>
                        <p className="old-standard-500 text-4xl sm:text-5xl">We care about you.</p>
                        <p className="inter-500 mt-6 text-sm sm:text-lg text-center sm:text-end ps-4">Patients should be greeted with the absolute best experience. They should always feel comfortable and at peace. <br /><span className="inter-600">Likya Dent delivers exactly that.</span></p>
                    </div>
                    <div className={`toRightClipPath photo2 bg-cover sm:w-[600px] w-full h-[150px] mt-4 sm:mt-0  sm:h-[250px] duration-2000 transition-all ${isVisible2 ? "opacity-100transform-[translateY(0px)] sm:transform-[translateX(0px)]" : "opacity-0   transform-[translateY(-25px)] sm:transform-[translateX(-35px)]"}`}>

                    </div>
                </div>
                <div className="flex  xl:flex-row flex-col  items-center">
                    <div ref={ref3} className={`flex flex-col w-[320px] sm:items-start items-center sm:w-[600px] duration-2000 transition-all ${isVisible3 ? "opacity-100transform-[translateY(0px)] sm:transform-[translateX(0px)]" : "opacity-0   transform-[translateY(-25px)] sm:transform-[translateX(-35px)]"}`}>
                        <p className="old-standard-500 text-4xl sm:text-5xl">Professional Team.</p>
                        <p className="inter-500 mt-6 sm:text-start text-center text-sm sm:text-lg">Our team of highly trained professionals brings years of expertise, ensuring that you’re in safe hands throughout your dental journey.</p>
                    </div>
                    <div className={`toLeftClipPath  bg-cover  sm:w-[600px] w-[320px] h-[150px] mt-4 sm:mt-0  sm:h-[250px]  duration-2000 transition-all ${isVisible3 ? "opacity-100 transform-[translateY(0px)] sm:transform-[translateX(0px)]" : "opacity-0   transform-[translateY(-25px)] sm:transform-[translateX(35px)]"}`}>
                        <Marquee>
                            <img src={Person1} loading="lazy" className="object-bottom object-cover h-[150px] sm:h-[250px]" alt="Likya Dent Staff's" />
                            <img src={Person2} loading="lazy" className="object-bottom object-cover h-[150px] sm:h-[250px]" alt="Likya Dent Staff's" />
                            <img src={Person3} loading="lazy" className="object-bottom object-cover h-[150px] sm:h-[250px]" alt="Likya Dent Staff's" />
                            <img src={Person4} loading="lazy" className="object-bottom object-cover h-[150px] sm:h-[250px]" alt="Likya Dent Staff's" />
                            <img src={Person5} loading="lazy" className="object-bottom object-cover h-[150px] sm:h-[250px]" alt="Likya Dent Staff's" />
                            <img src={Person6} loading="lazy" className="object-bottom object-cover h-[150px] sm:h-[250px]" alt="Likya Dent Staff's" />
                        </Marquee>
                    </div>
                </div>
            </div>
        </>
    )
}       

export default WhyUs