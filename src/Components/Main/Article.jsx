import { useState, useEffect } from "react";
import "../../css/article.css";
import img1 from "../../images/inside1.webp";
import img2 from "../../images/inside2.webp";
import img3 from "../../images/inside3.webp";
import img4 from "../../images/main.webp";
import Bottom from "../../images/bottom.svg"
import { Helmet } from "react-helmet-async";


const Article = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [img4,img1, img2, img3, ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
    }, 7000); // Fotoğrafı her 3 saniyede bir değiştir

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    
    <div className="h-full-special relative w-full">
        <Helmet>
            <link rel="preload" as="image" href={img4} type="image/webp" />
        </Helmet>
    <div className="photo-container overflow-hidden">
        {photos.map((photo, index) => (
            <div key={index} className={`photo ${index === currentPhoto ? 'active transformInside' : ''}`}>
                <img 
                    src={photo} 
                    alt={`Photo ${index + 1}`} 
                    className="w-full h-full object-cover" 
                    width="1920" 
                    height="1080" 
                />
            </div>
        ))}
    </div>

    <div className="bg-black-transparent-special h-full w-full">
        <div className="flex items-center justify-center h-full pb-24">
            <div className="flex flex-col items-center justify-center gap-4 mt-24">
                <p className="old-standard-500 text-white text-lg sm:text-2xl sm:mb-4 welcomeAni1">WELCOME TO</p>
                <p className="old-standard-500 text-white text-6xl sm:text-9xl likyadentAni1">LikyaDent</p>
                <div className="flex items-center gap-5 mt-2 sm:mt-6">
                    <button className="bg-white px-4 py-2 sm:p-4 sm:px-14 inter-500 sm:text-xl rounded-sm sm:rounded-xs rezButton1 hover:bg-amber-400 transition-all duration-300 hover:text-white hover:font-bold">
                        RESERVATION
                    </button>
                    <button className="bg-white px-4 py-2 sm:p-4 sm:px-14 inter-500 sm:text-xl rounded-sm sm:rounded-xs learnButton2 hover:bg-amber-400 transition-all duration-300 hover:text-white">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    </div>

    <a href="#whyUs" className="absolute bottom-0 mb-10 flex justify-center items-center w-full z-20">
        <img src={Bottom} loading="lazy" className="w-[35px] bottomAni" alt="Slide" />
    </a>
</div>

  );
};

export default Article;
