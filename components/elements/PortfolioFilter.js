import Link from "next/link";
import React, { useState, useEffect } from "react";

const PortfolioFilter = ({col, show}) => {
    const portfolio = [
        {
            name: " Veb saytning tashqi qismini kod yozish orqali yaratish. Kod yozish 0 dan o'rgatiladi",
            category: ["all", "web", "motion"],
            img: "web_site.jpg"
        },
        {
            name: "Veb saytni yaratishdan avval uni tog'ri algoritmini tuzish. Loyiha muvaffaqiyatli bo'lishi uchun tog'ri algoritm ishlatish va tog'ri kod yozish lozim",
            category: ["all", "graphic", "web"],
            img: "web_site-1.jpg"
        },
        {
            name: "Hozirda talab yuqori bo'lgan JavaScript dasturlash tili va uning kutubxonalarini o'rganasiz. JavaScript orqali React.js va Next.js texnologiyalarini ham o'rganasiz",
            category: ["all", "graphic", "motion "],
            img: "web_site-2.jpg"
        },
        {
            name: "Texnik intervyuga tayyorlov. 6-oyda ishga kirish uchun maxsus mock intervyularda qatnashasiz",
            category: ["all", "motion", "mobile"],
            img: "web_site-3.jpg"
        },
        {
            name: "O'z start up loyihangizni ishga tog'ri tushirish. Agar sizda loyiha uchun idea bo'lsa, start up tayyorlanish bosqichini o'rganib olasiz.",
            category: ["all", "web", "graphic"],
            img: "web_site-4.jpg"
        },
        {
            name: "Animal pattern",
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
            <div className="mt-70 mb-50">
                <div className="row">
                    {projects.slice(0,show).map(item =>
                        item.filtered === true ?
                            <div className={`col-lg-${col}`} key={item.name}>
                                <div className="project" data-category="web motion">
                                    <div className="item-content">
                                        <div className="card-style-1 hover-up mb-30" data-wow-delay=".0s">
                                            <div className="card-image">
                                                <Link className="link-post" href="#">
                                                    <img src={`assets/imgs/page/${item.img}`} alt="Genz" />
                                                    <div className="card-info card-bg-2">
                                                        <div className="info-bottom mb-15">
                                                            <h6 className="color-white mb-10">{item.name}</h6>
                                                        </div>
                                                    </div>
                                                </Link>
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