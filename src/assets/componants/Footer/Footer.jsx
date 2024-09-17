import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-info foot-section">
            <div className="img">
              <img
                src="\src\assets\Images\foot-logo.png"
                alt=""
                className="foot-logo"
              />
            </div>
            <div className="foot-para">
              We are Hostifyra 10 years of experience on this field with most
              talanted peoples and leaders.
            </div>
            <div className="foot-social">
              <a href="">

                {/* <img
                    src="\src\assets\Images\facebook.png"
                    alt=""
                    className="social-icon-img"
                  /> */}

                <i class="fa-brands fa-facebook foot-img"></i>
              </a>
              <a href="">
                {/* <img
                    src="\src\assets\Images\twitter.png"
                    alt=""
                    className="social-icon-img"
                  /> */}

                <i class="fa-brands fa-twitter foot-img"></i>
              </a>
              <a href="">
                {/* <img
                    src="\src\assets\Images\pinterest.png"
                    alt=""
                    className="social-icon-img"
                  /> */}

                <i class="fa-brands fa-pinterest foot-img"></i>
              </a>
              <a href="">
                {/* <img
                    src="\src\assets\Images\google-.png"
                    alt=""
                    className="social-icon-img"
                  /> */}
                <i class="fa-brands fa-google-plus foot-img"></i>
              </a>
            </div>
          </div>
          <div className="quick_links">
            <div className="footer-links foot-section">
              <div className="footer-heading">Quick Links</div>
              <ul className="foot-ul">
                <li>Support</li>
                <li>My Account</li>
                <li>Terms of Use</li>
              </ul>
            </div>
            <div className="footer-service foot-section">
              <div className="footer-heading">Services</div>
              <ul className="foot-ul">
                <li>Web Hosting</li>
                <li>VPS Hosting</li>
                <li>Dedicated Server</li>
              </ul>
            </div>
            {/* <div className="footer-contect foot-section">
            <div className="footer-heading">Contacts</div>
            <div className="contact-li">
              <div>
                <img
                  src="\src\assets\Images\telephone (1).png"
                  alt=""
                  className="foot-img"
                />{" "}
              </div>
              <div className="contact-inf">+91-3767968838</div>
            </div>
            <div className="contact-li">
              <div>
                <img
                  src="\src\assets\Images\mail.png"
                  alt=""
                  className="foot-img"
                />{" "}
              </div>
              <div className="contact-inf">sales@hostifyra.com</div>
            </div>
            <div className="contact-li">
              <div>
                <img
                  src="\src\assets\Images\placeholder.png"
                  alt=""
                  className="foot-img"
                />{" "}
              </div>
              <div className="contact-inf">Jorhat - Assam, India.</div>
            </div>
          </div> */}
            <div className="footer-contect foot-section">
              <div className="footer-heading">Contacts</div>
              <ul className="foot-ul">
                <li className="contact-li">
                  {/* <img
                  src="\src\assets\Images\telephone (1).png"
                  alt=""
                  className="foot-img"
                /> */}
                  <i class="fa fa-phone-alt foot-img"></i>
                  <span>+91-3767968838</span>
                </li>
                <li>
                  {/* <img
                  src="\src\assets\Images\mail.png"
                  alt=""
                  className="foot-img"
                /> */}
                  <i
                    className="fa fa-envelope foot-img"
                    aria-hidden="true"
                    style={{ color: "" }}
                  ></i>
                  <span>sales@hostifyra.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="foot-offer">
          <div className="offer-left">
            <a href=""> We offer 4 Days Trial</a>
            We offer 4 Days Trial No card details asked only the terms and
            conditions may apply <a href="">Click here.</a>
          </div>
          <div>
            <img
              src="\src\assets\Images\foot-offer-img.png"
              alt=""
              className="foot-offer-img"
            />
          </div>
        </div>
        <div className="foot-end">
          <div className="copyright">
            &copy; 2024 Hostifyra all right reserved.
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
