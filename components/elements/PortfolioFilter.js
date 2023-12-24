import Link from "next/link";
import React, { useState, useEffect } from "react";

const PortfolioFilter = ({col, show}) => {
    const portfolio = [
        {
            name: "Veb saytning tashqi qismini noldan o'zingiz yarata olasiz.",
            category: ["all", "web", "motion"],
            img: "web_site.jpg"
        },
        {
            name: "Ishga kirish uchun bir necha portfoilolaringizni tayyor holatga keltirishni o'rganib olasiz.",
            category: ["all", "graphic", "web"],
            img: "web_site-1.jpg"
        },
        {
            name: "Hozirda talab yuqori bo'lgan Front-end texnalogiyalari bilan yaxshi kelishib olasiz",
            category: ["all", "graphic", "motion "],
            img: "web_site-2.jpg"
        },
        {
            name: "Ishga kirish uchun Texnik intervyularga tayyorlanasiz",
            category: ["all", "motion", "mobile"],
            img: "web_site-3.jpg"
        },
        {
            name: "O'z start up loyihangizni ishga tushirish bosqichlarini o'rganib, amalda qo'llashni bilib olasiz.",
            category: ["all", "web", "graphic"],
            img: "web_site-4.jpg"
        },
        {
            name: "Jamoada qanday ishlash kerakligini o'rganasiz",
            category: ["all", "mobile"],
            img: "web_site-5.jpg"
        }
    ];

    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(portfolio);
    }, []);

    useEffect(() => {
        setProjects([]);

        const filtered = portfolio.map(p => ({
            ...p,
            filtered: p.category.includes(filter)
        }));
        setProjects(filtered);
    }, [filter]);

    return (
        <>
            <div className="mt-40 mb-50">
                <div className="row">
                    {projects.slice(0,show).map(item =>
                        item.filtered === true ?
                            <div className={`col-lg-${col}`} key={item.name}>
                                <div className="project" data-category="web motion">
                                    <div className="item-content">
                                        <div className="card-blog-1 hover-up mb-30" data-wow-delay=".0s">
                                            <div className="card-image">
                                                <img src={`assets/imgs/page/${item.img}`} alt="Genz" />
                                                <h6 className="mt-4 color-white mb-10 text-uppercase">{item.name}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        : null
                    )}
                </div>
            </div>
        </>
    );
};

export default PortfolioFilter;