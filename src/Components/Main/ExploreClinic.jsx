import { useState,useEffect } from 'react';
import ReactPlayer from 'react-player';
import Inside6 from "../../images/inside6.png"
import Inside4 from "../../images/inside3.png"
import Inside5 from "../../images/inside5.png"
import Inside1 from "../../images/inside1.png"
import Inside2 from "../../images/inside2.png"
import Inside3 from "../../images/inside3.png"
import Magnify from "../../images/magnify.svg"

// PhotoSwipe için gerekli olan bileşen
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const ExploreClinic = () => {

    const [height, setHeight] = useState("320px");

    useEffect(() => {
        setHeight(window.innerWidth > 680 ? "320px" : "230px");
    }, []);

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const images = [
        { src: Inside1, width: 1024, height: 768 },
        { src: Inside2, width: 1024, height: 768 },
        { src: Inside3, width: 1024, height: 768 },
        { src: Inside4, width: 1024, height: 768 },
        { src: Inside5, width: 1024, height: 768 },
        { src: Inside6, width: 1024, height: 768 }
    ];

    return (
        <>  
            <div className="flex items-center 2xl:flex-row flex-col   justify-center gap-8  my-46">
                <div className="flex flex-col gap-4">
                    <p className="old-standard-500 text-2xl sm:text-start text-center sm:text-6xl">EXPLORE OUR CLINIC</p>
                    <p className="open-sans-500 sm:text-start text-center w-[320px] sm:w-[400px] lg:w-[730px]">Take a virtual tour of Likya Dent. Explore our modern clinic and comfortable environment, designed with your well-being in mind. See for yourself the care and attention that goes into every detail of your visit.</p>
                    <div className='rounded-lg'>
                        <ReactPlayer url='https://youtu.be/FO3iVBuQx9w' controls={true} width='100%' height={height}/>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <div className="hidden sm:flex sm:flex-row flex-col items-center gap-6">
                        <Gallery>
                            {images.slice(0, 2).map((image, index) => (
                                <Item
                                    key={index}
                                    original={image.src}
                                    thumbnail={image.src}
                                    width={image.width}
                                    height={image.height}
                                >
                                    {({ ref, open }) => (
                                        <img
                                            ref={ref}
                                            onClick={open}
                                            src={image.src}
                                            className='w-[268px] h-[150px] object-cover rounded-sm'
                                            alt={`Likya Dent Clinic ${index + 1}`}
                                        />
                                    )}
                                </Item>
                            ))}
                        </Gallery>
                    </div>
                    <div className='relative'>
                        <div className="absolute end-0 mt-3 me-3 rounded-sm bg-white">
                            <img src={Magnify} className='invert p-2  w-[45px] ' alt="Magnify" />
                        </div>
                        <Gallery>
                            {images.map((image, index) => (
                                <Item
                                    key={index}
                                    original={image.src}
                                    thumbnail={image.src}
                                    width={1024}
                                    height={768}
                                    className={``}
                                >
                                    {({ ref, open }) => (
                                        <img
                                            ref={ref}
                                            onClick={open}
                                            src={image.src}
                                            className={`w-[320px] sm:w-[560px] h-[200px] sm:h-[350px] rounded-sm object-cover ${image.src != Inside5 ? "hidden" : "Ok"}`}
                                            alt={`Likya Dent Clinic ${index + 1}`}
                                        />
                                    )}
                                </Item>
                            ))}
                        </Gallery>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExploreClinic;
