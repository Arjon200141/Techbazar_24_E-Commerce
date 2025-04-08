import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Management = () => {
    const managementTeam = [
        { id: 1, name: "John Doe", position: "CEO", image: "https://i.ibb.co.com/6RYtJJL9/IMG-2131-conv.png" },
        { id: 2, name: "Jane Smith", position: "CTO", image: "https://i.ibb.co.com/6RYtJJL9/IMG-2131-conv.png" },
        { id: 3, name: "Mike Johnson", position: "CFO", image: "https://i.ibb.co.com/6RYtJJL9/IMG-2131-conv.png" },
        { id: 4, name: "Sarah Williams", position: "COO", image: "https://i.ibb.co.com/6RYtJJL9/IMG-2131-conv.png" },
        { id: 5, name: "David Brown", position: "CMO", image: "https://i.ibb.co.com/6RYtJJL9/IMG-2131-conv.png" },
        { id: 6, name: "Emily Davis", position: "HR Director", image: "https://i.ibb.co.com/6RYtJJL9/IMG-2131-conv.png" },
        { id: 7, name: "Robert Wilson", position: "Product Lead", image: "https://i.ibb.co.com/6RYtJJL9/IMG-2131-conv.png" },
        { id: 8, name: "Lisa Taylor", position: "Engineering Head", image: "https://i.ibb.co.com/6RYtJJL9/IMG-2131-conv.png" }
    ];

    return (
        <div className="mt-16">
            <div className='relative h-[80px] md:h-[155px] flex justify-start items-center px-6 md:ml-20 mb-8 md:mb-12'>
                <p className='font-extrabold text-[#DDDDDD] dark:text-gray-800 text-[50px] md:text-[100px] h-[50px] md:h-[100px] top-0 left-0 absolute m-0'>TOP MANAGEMENT</p>
                <h2 className='font-extrabold text-[#0C9DCA] dark:text-cyan-300 text-3xl md:text-6xl absolute pl-3 md:pl-12 tracking-[-1.80px]'>Top Management</h2>
            </div>
            
            <div className="relative px-4 md:px-10">
                <Swiper
                    slidesPerView={4}
                    slidesPerGroup={1}
                    spaceBetween={30}
                    centeredSlides={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        waitForTransition: true,
                    }}
                    speed={800}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper pb-12"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 20
                        },
                        640: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 1,
                            spaceBetween: 30
                        }
                    }}
                >
                    {managementTeam.map((member) => (
                        <SwiperSlide key={member.id}>
                            <div className="flex flex-col items-center justify-center h-full text-center min-h-[200px] bg-gray-100 rounded-lg transition-all duration-300 hover:shadow-lg group">
                                <div className="relative overflow-hidden rounded-lg w-full h-full">
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex flex-col items-center justify-center">
                                        <h3 className="text-xl font-bold text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-200 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            {member.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="custom-pagination mt-12 flex justify-center !relative" />
            
            <style jsx global>{`
                .swiper-wrapper {
                    transition-timing-function: ease-in-out;
                }
                .swiper-slide {
                    transition: transform 0.8s ease, opacity 0.8s ease;
                }
            `}</style>
        </div>
    );
}

export default Management;