import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import HotTopic from "../components/slider/HotTopic";
import Typewriter from "typewriter-effect";
import PortfolioFilter from "../components/elements/PortfolioFilter";
import data from "../util/blogData";
import Testimonial from "../components/slider/Testimonial";
import { Alert, Button, Modal, Space, message } from "antd";
import { useRef, useState } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nameRef = useRef();
  const phoneRef = useRef();
  const [leadStatus, setLeadStatus] = useState(false);

  const handleSubmit = async (e) => {
    setLeadStatus(true);
    e.preventDefault();
    let user = {
      form_id: "3132",
      fields: {
        name: nameRef.current.value,
        phone: "+998" + phoneRef.current.value,
      },
    };

    let newLeadData = await axios.post(
      "https://api.modme.uz/v1/create_lead",
      user
    );

    if (newLeadData) {
      nameRef.current.value = "";
      phoneRef.current.value = "";
      setIsModalOpen(false);
      setLeadStatus(false);
      message.open({
        type: "success",
        content: "So'rovingiz qabul qilindi",
        className: "custom-class",
        style: {
          marginTop: "20vh",
        },
      });
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Head>
        <title>Soff Study - Online FrontEnd dasturlash kursi</title>
        <meta
          property="og:title"
          content="Online FrontEnd dasturlash kursi"
          key="title"
        />
        <meta
          property="og:description"
          content="Istalgan joydan turib, o'zingizga mos vaqtlarda dasturlashni kuchli dasturchi ustozlar bilan birgalikda o'rganish imkoniga egasiz!"
          key="content"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content="assets/imgs/Post_front.png" />
        <meta property="og:site_name" content="SoffStudy.uz" />
      </Head>
      <Layout>
        <div className="cover-home1">
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-10 col-lg-12">
                <div className="banner">
                  <div className="row align-items-end">
                    <div className="col-lg-6 pt-100">
                      <h4 className="text-uppercase color-gray-600 wow animate__animated animate__fadeInUp">
                        1 yil ichida talabgir va daromadli mutaxassisga aylaning!
                      </h4>
                      <h1
                        style={{ fontSize: "25px", lineHeight: "35px" }}
                        className="color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp"
                      >
                        Men
                        <br/>
                        <Typewriter
                          options={{
                            wrapperClassName: "typewrite color-linear",
                            strings: ["Zufarbek Abdurahmonov", "Soff Study markazi asoschisi", "6+ yillik tajribaga ega dasturchi", "Soff Hub IT kompaniyasi asoschisi", "120 dan ortiq real loyihalar egasi", "pozitiv va sevimli ustozman"],
                            autoStart: true,
                            delay: 5,
                            deleteSpeed: 1,
                            loop: true,
                          }}
                        />
                      </h1>
                      <div className="row">
                        <div className="col-lg-9">
                          <p className="text-base color-gray-600 wow animate__animated animate__fadeInUp">
                            Shogirtlarim ayni paytda turli xil AyTi kompaniyalarida ishlab kelmoqda. 
                            <br/>
                            <a
                              href="#students_result" 
                              className="color-linear">
                                Shogirtlarim natijalarni ko'rish.
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="box-subscriber mt-40 mb-50 wow animate__animated animate__fadeInUp">
                        <div className="inner-subscriber bg-gray-800">
                          <form className="d-flex" action="#">
                            <Link
                              href="#tarif"
                              className="btn btn-linear btn-arrow-right w-100"
                            >
                              KURSNI XARID QILISH
                              <i className="fi-rr-arrow-small-right" />
                            </Link>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 text-center">
                      <div className="banner-img position-relative wow animate__animated animate__fadeIn">
                        <img
                          src="assets/imgs/Zufarbek_Abdurahmonov.png"
                          alt="SoffStudy - frontend dasturlash kursi"
                        />
                        <div className="pattern-1">
                          <img
                            src="assets/imgs/template/pattern-1.svg"
                            alt="SoffStudy - frontend dasturlash kursi"
                          />
                        </div>
                        <div className="pattern-2">
                          <img
                            src="assets/imgs/template/pattern-2.svg"
                            alt="SoffStudy - frontend dasturlash kursi"
                          />
                        </div>
                        <div className="pattern-3">
                          <img
                            src="assets/imgs/template/pattern-3.svg"
                            alt="SoffStudy - frontend dasturlash kursi"
                          />
                        </div>
                        <div className="pattern-4">
                          <img
                            src="assets/imgs/template/pattern-4.svg"
                            alt="SoffStudy - frontend dasturlash kursi"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-70">
                  <div className="box-topics border-gray-800 bg-gray-850">
                    <HotTopic />
                  </div>
                </div>
                <div className="row mt-50 mb-30 pl-10 pr-10">
                  <div className="box-features bg-gray-850 border-gray-800 pb-0 pt-20 pl-50 pr-50 col-lg-12 col-12">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-12 text-center fs-2 mb-30">
                        <i className="bi bi-clock"></i>
                        <p
                          style={{
                            textTransform: 'uppercase',
                            fontSize: "36px",
                            lineHeight: "50px",
                            fontWeight: "400",
                          }}
                        >
                          Davomiyligi
                        </p>
                        <p style={{ fontSize: "16px",  }}>O'zingizga bog'liq: 3 oy, 6 oy, 1 yil</p>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 text-center fs-2 mb-30">
                        <i className="bi bi-house-heart-fill"></i>
                        <p
                          style={{
                            textTransform: 'uppercase',
                            fontSize: "36px",
                            lineHeight: "50px",
                            fontWeight: "400",
                          }}
                        >
                          Darslar
                        </p>
                        <p style={{ fontSize: "16px",  }}>Online: hohlagan vaqtingizda</p>
                        {/* <p style={{ fontSize: "14px" }}>1 haftada 3 ta darsni ko'rish shart</p> */}
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 text-center fs-2 mb-30">
                        <i className="bi bi-lightning-charge"></i>
                        <p
                          style={{
                            textTransform: 'uppercase',
                            fontSize: "36px",
                            lineHeight: "50px",
                            fontWeight: "400",
                          }}
                        >
                          Mentor
                        </p>
                        <p style={{ fontSize: "16px",  }} >6 oy davomida kuratoringiz nazoratidasiz</p>

                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="text-uppercase color-linear d-inline-block mt-40 wow animate__animated animate__fadeInUp">
                  Kursda nimalar o'rganasiz?
                </h2>
                <PortfolioFilter col={4} />

                <div className="text-center mb-50">
                  <Link
                    href="#tarif"
                    className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn"
                  >
                    Ro'yxatdan o'tish
                    <i className="fi-rr-arrow-small-right" />
                  </Link>
                </div>
                <h2 className="text-uppercase color-linear mb-30 d-inline-block mb-10 wow animate__animated animate__fadeInUp">
                  Kurs dasturi
                </h2>
                <div className="box-features bg-gray-850 border-gray-800 wow animate__animated animate__fadeInUp">
                  <div className="row">
                    <div
                      className="col-lg-4 col-6 mb-50 wow animate__animated animate__fadeIn center__cart"
                      data-wow-delay="0s"
                    >
                      {/* <span className="item-icon bg-gray-950 icon-motion" /> */}
                      <img
                        style={{ width: "auto" }}
                        className="course-modul-image"
                        src="/assets/imgs/kirish.png"
                        alt=""
                      />
                      <h5 className="color-white mb-15">
                        Boshlang'ich tushunchalar
                      </h5>
                    </div>
                    <div
                      className="col-lg-4 col-6 center__cart col-md-6 mb-50 wow animate__animated animate__fadeIn"
                      data-wow-delay="0.1s"
                    >
                      <img
                        className="course-modul-image"
                        src="/assets/imgs/html-css.png"
                        alt=""
                      />
                      <h5 className="color-white mb-15">HTML & CSS</h5>
                    </div>
                    <div
                      className="col-lg-4 col-6 center__cart col-md-6 mb-50 wow animate__animated animate__fadeIn"
                      data-wow-delay="0.2s"
                    >
                      <img
                        className="course-modul-image"
                        src="/assets/imgs/bootstrap-sass.png"
                        alt=""
                      />
                      <h5 className="color-white mb-15">
                        HTML & CSS & Bootstrap & SASS
                      </h5>
                    </div>
                    <div
                      className="col-lg-4 col-6 center__cart col-md-6 mb-50 wow animate__animated animate__fadeIn"
                      data-wow-delay="0s"
                    >
                      <img
                        className="course-modul-image"
                        src="/assets/imgs/js.png"
                        alt=""
                      />
                      <h5 className="color-white mb-15">JavaScript</h5>
                    </div>
                    <div
                      className="col-lg-4 col-6 center__cart mb-50 wow animate__animated animate__fadeIn"
                      data-wow-delay="0.1s"
                    >
                      <img
                        className="course-modul-image"
                        src="/assets/imgs/domm.png"
                        alt=""
                      />
                      <h5 className="color-white mb-15">
                        Javascript & DOM & OOP
                      </h5>
                    </div>
                    <div
                      className="col-lg-4 col-6 center__cart mb-50 wow animate__animated animate__fadeIn"
                      data-wow-delay="0.2s"
                    >
                      <img
                        className="course-modul-image"
                        src="/assets/imgs/git.png"
                        alt=""
                      />

                      <h5 className="color-white mb-15">NPM & Git & GitHub</h5>
                    </div>
                    <div
                      className="col-lg-4 col-6 mb-50 center__cart wow animate__animated animate__fadeIn"
                      data-wow-delay="0.2s"
                    >
                      <img
                        className="course-modul-image"
                        src="/assets/imgs/scale_1200.png"
                        alt="soffstudy course modul image"
                      />

                      <h5 className="color-white mb-15">React.js</h5>
                    </div>
                    <div
                      className="col-lg-4 col-6 mb-50 center__cart wow animate__animated animate__fadeIn"
                      data-wow-delay="0.2s"
                    >
                        <img
                        className="course-modul-image"
                        src="/assets/imgs/nexttt.png"
                        alt="soffstudy course modul image"
                      />
                      <h5 className="color-white mb-15">React.js & Next.js</h5>
                    </div>
                    <div
                      className="col-lg-4 col-6 mb-50 center__cart wow animate__animated animate__fadeIn"
                      data-wow-delay="0.2s"
                    >
                       <img
                        className="course-modul-image"
                        src="/assets/imgs/practic.png"
                        alt="soffstudy course modul image"
                      />
                      <h5 className="color-white mb-15">
                        Ishga kirishga tayyorgarlik
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Bu hali hammasi emas */}
                <div className="mb-70 mt-20">
                  <div
                    className="box-topics  border-gray-800 bg-gray-850"
                    style={{
                      display: "flex",
                      textAligin: "center",
                      justifyContent: "center",
                      aliginItems: "center",
                      gap: "10px",
                    }}
                  >
                    <h3 className=" color-linear text-center wow animate__animated animate__fadeInUp">
                      Bu hali hammasi emas
                    </h3>
                    <i
                      className="fa-solid fa-angles-down fa-beat-fade"
                      style={{
                        color: "#fff",
                        fontSize: "25px",
                        marginTop: "1%",
                      }}
                    ></i>
                  </div>
                </div>
                {/* Dars jarayoni qanday olib boriladi */}

                <h3 className="text-uppercase color-linear mb-30 d-inline-block mb-10 wow animate__animated animate__fadeInUp">
                  Ta'lim jarayoni qanday olib boriladi?
                </h3>
                <div className="row mt-10 mb-10">
                  {data.map((item, i) => (
                    <div className="col-lg-6" key={i} >
                      <div className="card-blog-1  hover-up wow animate__animated animate__fadeIn">
                        <div className="card-image">
                          <img
                            src={`assets/imgs/${item.img}`}
                            alt="SoffStudy - frontend dasturlash kursi"
                          />
                        </div>
                        <div className="card-info cadr-info">
                          <div className="cadr-info-title">
                            <span>0{i + 1}</span>
                            <p className="color-white text-uppercase" >{item.title}</p>
                          </div>
                          <h6 className="color-white fw-normal mt-2">{item.description}</h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Natijalar */}
                <div id="students_result">
                  <h3 className="text-uppercase color-linear mb-30 d-inline-block mt-40 wow animate__animated animate__fadeInUp">
                    O'quvchilarimning natijalari
                  </h3>
                  <div className="box-testimonials mb-150animate__fadeIn mb-100">
                    <div className="box-swiper">
                      <Testimonial />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-30 mb-50">
                  <h2
                    id="tarif"
                    className="text-uppercase color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp"
                  >
                    Kursda o'qish narxlari:
                  </h2>
                </div>
                <div className="row mt-50 mb-30">
                  <div
                    className="col-lg-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".0s"
                  >
                    <div className="card-pricing border-gray-800 bg-gray-850 mb-30">
                      <div className="card-pricing-top border-gray-800">
                        <h3 className="color-white mb-10">Standart tarif</h3>
                        <p className="text-base color-gray-500">
                          240 000 so'm / oyiga
                        </p>

                        <hr/>

                        <h5 className="color-white mb-10">30% chegirma mavjud, agarda</h5>
                        <p className="text-base color-gray-500">
                          bittada 6 oylik to'lovni qilsangiz.
                        </p>
                        <p className="text-lg color-gray-500 mb-15">
                        <del>1 440 000 so'm</del> |  1 000 000 so’m
                        </p>
                        <Button
                          className="btn btn-border-linear"
                          onClick={showModal}
                        >
                          Boshlash
                        </Button>
                      </div>
                      <div className="card-pricing-bottom">
                        <h6 className="color-white mb-25">
                          Tarif o'z ichiga nima oladi:
                        </h6>
                        <ul className="list-checked">
                          <li>To'liq video darslar</li>
                          <li>Amaliyot vazifalari</li>
                          <li>Uyga Vazifalar</li>
                          <li>Loyihalar</li>
                          <li>Yuklab olinadigan manbaalar</li>
                          <li>6 oy davomida 2-mentor ustoz ko'magi</li>
                          <li>Bir umrlik foydalanish imkoniyati</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".2s"
                  >
                    <div className="card-pricing border-gray-800 bg-gray-850 mb-30">
                      <label className="lbl-success text-base color-gray-900">
                        Ommabop
                      </label>
                      <div className="card-pricing-top border-gray-800">
                        <h3 className="color-white mb-10">Premium tarif</h3>
                        <p className="text-lg color-gray-500 mb-15">
                          2000000 so’m
                        </p>
                        <p className="text-base color-gray-500 mb-30">
                          420000 / oyiga
                        </p>
                        <Button
                          className="btn btn-border-linear"
                          onClick={showModal}
                        >
                          Boshlash
                        </Button>
                      </div>
                      <div className="card-pricing-bottom">
                        <h6 className="color-white mb-25">
                          Nimalarga ega bo'lasiz
                        </h6>
                        <ul className="list-checked">
                          <li>To'liq video darslar Amaliyotlar</li>
                          <li>Amaliyotlar</li>
                          <li>
                            Vazifalar / Vazifalar tahlili / Vazifalar tekshiruvi
                          </li>
                          <li>6 ta imtihon</li>
                          <li>Ustozdan amaliy ko'mak (xaftada 1)</li>
                          <li>2-mentor ustoz ko'magi (24/7)</li>
                          <li>Darslarga 6 oylik kirish imkoni</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".4s"
                  >
                    <div className="card-pricing border-gray-800 bg-gray-850 mb-30">
                      <label className="lbl-danger text-base color-gray-900">
                        Premium
                      </label>
                      <div className="card-pricing-top border-gray-800">
                        <h3 className="color-white mb-10">Gold Premium </h3>
                        <p className="text-lg color-gray-500 mb-15">
                          3000000 so’m
                        </p>
                        <p className="text-base color-gray-500 mb-30">
                          597000 / oyiga
                        </p>
                        <Button
                          className="btn btn-border-linear"
                          onClick={showModal}
                        >
                          Boshlash
                        </Button>
                      </div>
                      <div className="card-pricing-bottom">
                        <h6 className="color-white mb-25">
                          Nimalarga ega bo'lasiz
                        </h6>
                        <ul className="list-checked">
                          <li>To'liq video darslar Amaliyotlar</li>
                          <li>Amaliyotlar</li>
                          <li>
                            Vazifalar / Vazifalar tahlili / Vazifalar tekshiruvi
                          </li>
                          <li>6 ta imtihon</li>
                          <li>Ustozdan amaliy ko'mak (xaftada 1)</li>
                          <li>2-mentor ustoz ko'magi (24/7)</li>
                          <li>Darslarga 6 oylik kirish imkoni</li>
                          <li>Kursdan so'ng stajirovka imkoni (300 ball +)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-30 mb-50">
                  <h2 className="text-uppercase color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">
                    Kursdan so'ng sizni ushbu natijalar kutadi:
                  </h2>
                </div>
                <div className="row mb-30 wow animate__animated animate__zoomIn"  >
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                    <div className="cart-style-result" data-wow-delay="0s">
                      <div
                        className="card-style-box hover-up hover-neon wow animate__animated animate__fadeIn"
                        data-wow-delay="0s"
                      >
                        <i className="fa-solid fa-square-poll-vertical fa-xl"></i>
                      </div>
                      <p>Shaxsiy kursingizni sota olasiz</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                    <div className="cart-style-result" data-wow-delay="0s">
                      <div
                        className="card-style-box hover-up hover-neon wow animate__animated animate__fadeIn"
                        data-wow-delay="0s"
                      >
                        <i className="fa-regular fa-star fa-xl"></i>
                      </div>
                      <p>Shaxsiy kursingizni sota olasiz</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                    <div className="cart-style-result" data-wow-delay="0s">
                      <div
                        className="card-style-box hover-up hover-neon wow animate__animated animate__fadeIn"
                        data-wow-delay="0s"
                      >
                        <i className="fa-brands fa-github fa-xl"></i>
                      </div>
                      <p>Shaxsiy kursingizni sota olasiz</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                    <div className="cart-style-result" data-wow-delay="0s">
                      <div
                        className="card-style-box hover-up hover-neon wow animate__animated animate__fadeIn"
                        data-wow-delay="0s"
                      >
                        <i className="fa-solid fa-wand-magic-sparkles fa-xl"></i>
                      </div>
                      <p>Shaxsiy kursingizni sota olasiz</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                    <div className="cart-style-result" data-wow-delay="0s">
                      <div
                        className="card-style-box hover-up hover-neon wow animate__animated animate__fadeIn"
                        data-wow-delay="0s"
                      >
                        <i className="fa-brands fa-slack fa-xl"></i>
                      </div>
                      <p>Shaxsiy kursingizni sota olasiz hghgf hghf hfty</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                    <div className="cart-style-result" data-wow-delay="0s">
                      <div
                        className="card-style-box hover-up hover-neon wow animate__animated animate__fadeIn"
                        data-wow-delay="0s"
                      >
                        <i className="fa-brands fa-figma fa-xl"></i>
                      </div>
                      <p>Shaxsiy kursingizni sota olasiz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Modal
              title="Ro'yxatdan o'tish"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div className="inner-subscriber ">
                <form onSubmit={handleSubmit} className="text-center mb-2" >
                  <div className="form-group">
                    <input
                      className="form-control bg-gray-850 border-gray-800"
                      type="text"
                      ref={nameRef}
                      placeholder="Ismingiz"
                      required
                      name="lastName"
                    />
                  </div>
                  <div className=" form-group form-tel">
                    <span>+998</span>
                    <input
                      className="form-control bg-gray-850 border-gray-800 form-tel-input"
                      type="text"
                      ref={phoneRef}
                      maxLength="9"
                      required
                      name="number"
                    />
                  </div>
                  {!leadStatus ? (
                    <button type="submit" className="btn btn-linear w-50 ">
                      Ro'yxatdan o'tish
                      <i className="fi-rr-arrow-small-right" />
                    </button>
                  ) : (
                    <button className="btn btn-linear w-100">
                      <BeatLoader color="#000" />
                    </button>
                  )}
                </form>
              </div>
            </Modal>
          </div>
        </div>
      </Layout>
    </>
  );
}
