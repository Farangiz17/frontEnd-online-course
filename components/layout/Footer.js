import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="footer-1 bg-gray-850 border-gray-800">
         <div className="container">
         <h2 className="color-white mb-10 text-uppercase">Savollaringiz qoldimi ?</h2>
          <p>
            Bizga qo'ng'iroq qiling yoki ijtimoiy tarmoqlar orqali xabar
            qoldiring.
          </p>

          <div className="footer-bottom border-gray-800">
            <div className="row mt-80">
              <div className="col-lg-5 col-xl-5 col-md-5 col-sm-5 col-12 text-center text-lg-start">
                <p className="text-base color-white wow animate__animated animate__fadeIn">
                  <i class="fa-solid fa-phone-volume fa-shake"></i>{" "}
                  <Link className="copyright" href="tel:+998900026789">
                    +998 90 002 67 89
                  </Link>
                </p>
                <p className="text-base color-white wow animate__animated animate__fadeIn">
                  <i class="fa-solid fa-phone-volume fa-shake"></i>{" "}
                  <Link className="copyright" href="tel:+998900026789">
                    +998 91 003 67 89
                  </Link>
                </p>
              </div>
              <div className="col-lg-7 col-xl-7 col-md-7 col-sm-7 col-12 text-center text-lg-end">
                <div className="box-socials">
                  <div
                    className="d-inline-block wow animate__animated animate__fadeIn"
                    data-wow-delay=".2s"
                  >
                    <Link
                    target="_blank"
                      className="icon-socials icon-telegram color-gray-500"
                      href="https://t.me/soff_admin"
                    >
                    <i class="fa-brands fa-telegram"></i>
                    </Link>
                  </div>
                  <div
                    className="d-inline-block wow animate__animated animate__fadeIn"
                    data-wow-delay=".2s"
                  >
                    <Link
                    target="_blank"
                      className="icon-socials icon-linkedin color-gray-500"
                      href="https://www.linkedin.com/company/soff-study/"
                    >
                    <i class="fa-brands fa-linkedin"></i>
                    </Link>
                  </div>
                  <div
                    className="d-inline-block wow animate__animated animate__fadeIn"
                    data-wow-delay=".0s"
                  >
                    <Link
                    target="_blank"
                      className="icon-socials icon-instagram color-gray-500"
                      href="http://instagram.com/soffstudy.uz"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                  <div
                    className="d-inline-block wow animate__animated animate__fadeIn"
                    data-wow-delay=".0s"
                  >
                    <Link
                    target="_blank"
                      className="icon-socials icon-facebook color-gray-500"
                      href="https://www.facebook.com/p/soffstudyuz-100071928572012/"
                    >
                      <i class="fa-brands fa-facebook"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
