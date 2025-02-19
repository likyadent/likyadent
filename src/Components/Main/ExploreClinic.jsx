import { useState } from 'react';
import ReactPlayer from 'react-player';
import Inside6 from "../../images/inside6.png"
import Inside4 from "../../images/inside3.png"
import Inside5 from "../../images/inside5.png"


const ExploreClinic = () => {


    return(
        <>  

            <div className="flex items-center justify-center gap-8 my-16">
                <div className="flex flex-col gap-4">
                    <p className="old-standard-500 text-6xl">EXPLORE OUR CLINIC</p>
                    <p className="open-sans-500 w-[730px]">Take a virtual tour of Likya Dent. Explore our modern clinic and comfortable environment, designed with your well-being in mind. See for yourself the care and attention that goes into every detail of your visit.</p>
                    {/* <iframe width="530" height="250" className='rounded-lg' src="https://www.youtube.com/embed/FO3iVBuQx9w?si=KKt9NgrX4zn1Kgy5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    <ReactPlayer
                       url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                        controls={true}
                        width='100%'
                        height='350px'
                    />
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <div className="flex items-center gap-6">
                        <img src={Inside4} className='w-[268px] h-[150px] object-cover rounded-sm' alt="Likya Dent Clinic Photos" />
                        <img src={Inside6} className='w-[268px] h-[150px] object-cover rounded-sm' alt="Likya Dent Clinic Photos" />
                    </div>
                    <div className='relative'>
                        
                        <img src={Inside5} className='w-[560px] h-[350px] rounded-sm object-cover' alt="Likya Dent Clinic Photos" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExploreClinic