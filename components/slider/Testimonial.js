import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Testimonial = () => {

    const data = [
        {
            img: "1.webp",
            name:"Hamidullo Ne'matullayev",
            level:'React Developer',
            description:"Soff Study o'quv markaziga omad tilayman! (Shogirt qancha yuksalgani bilan shogirtligicha qoladi"
        },
        {
            img: "2.webp",
            name:"Alisher Mirsaidov",
            level:'React Developer',
            description:"Juda ham maqul kelgan. Mentorlari xushmuomila"
        },
        {
            img: "3.webp",
            name:"Jasur Boboqulov",
            level:'React Developer',
            description:"Eng zo'r jamoa ko'plab imkoniyatlar va yaxshi ustoz"
        },
        {
            img: "4.webp",
            name:"Nurulloh Ubaydullayev",
            level:'FrontEnd ( React | ReactNative ) Developer',
            description:"Dasturchi bo'lib o'z o'rnimni topishimda katta yordam bergan maskan"
        },
        {
            img: "5.webp",
            name:"Mehroj Normamatov",
            level:'Primetech Solutions IT kompaniyasi asoschisi va direktori',
            description:"Zo'r imkoniyatlar maskani (dasturlashga kirib kelishimga sababchilardan biri desam adashmayman)"
        },
    ];


    return (
        <>
            <div className="swiper-container swiper-group-3">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    navigation={{
                        prevEl: ".swiper-button-prev-style-3",
                        nextEl: ".swiper-button-next-style-3",
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        575: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        767: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        991: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1199: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1350: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="swiper-wrapper pt-5"
                >
                    {data.map((item, i) => (
                        <SwiperSlide className="swiper-slide"  key={i}>
                            <div className="card-testimonials bg-gray-850 border-gray-800 hover-up">
                                <div className="box-author mb-20"><img src="assets/imgs/page/about/author.png" alt="Genz" />
                                    <div className="author-info">
                                        <h6 className="color-gray-700">{item.name}</h6><span className="color-gray-700 text-sm">{item.level}</span>
                                    </div>
                                </div>
                                <div className="card-info">
                                    <p className="color-gray-500">{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-buttons">
                    <div className="swiper-button-prev swiper-button-prev-style-3" />
                    <div className="swiper-button-next swiper-button-next-style-3" />
                </div>
            </div>



        </>
    );
};

export default Testimonial;

