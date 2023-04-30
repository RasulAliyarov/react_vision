import React from 'react'
import "./Footer.scss"
import { Images, Icons } from "../../base/path"

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__wrapper container">
                <div className="footer__wrapper__top">
                    <img src={Images.Logo} alt="VisionM4" />
                    <h1>VisionM4</h1>
                </div>
                <div className="footer__wrapper__middle">
                    <div className="footer__wrapper__middle__contacts">
                        <div className="footer__wrapper__middle__contacts__block">
                            <div className="footer__wrapper__middle__contacts__block__left">
                                <a className='contactLink contactLinkBg1' href='#'>{Icons.Location}</a>
                                <span className='footerLinkCircle'></span>
                            </div>
                            <div className="footer__wrapper__middle__contacts__block__right">
                                <p>MI Jamestown 146 <br /> Kimberly Way</p>
                            </div>
                        </div>
                        <div className="footer__wrapper__middle__contacts__block">
                            <div className="footer__wrapper__middle__contacts__block__left">
                                <a className='contactLink contactLinkBg2' href='#'>{Icons.Mail}</a>
                                <span className='footerLinkCircle'></span>
                            </div>
                            <div className="footer__wrapper__middle__contacts__block__right">
                                <p>support@yoursite.com <br />connect@yoursite.com</p>
                            </div>
                        </div>
                        <div className="footer__wrapper__middle__contacts__block">
                            <div className="footer__wrapper__middle__contacts__block__left">
                                <a className='contactLink contactLinkBg3' href='#'>{Icons.Phone}</a>
                                <span className='footerLinkCircle'></span>
                            </div>
                            <div className="footer__wrapper__middle__contacts__block__right">
                                <p>0 (800) 123 45 67<br /> 0 (800) 231 54 76</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__wrapper__bottom">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                    <p>© Copyright 2020 Mobirise - All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer