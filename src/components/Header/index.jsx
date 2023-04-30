import React from 'react'
import './Header.scss'
import { NavLink } from "react-router-dom"
import { Icons, Images } from "../../base/path"
function Header() {
    let [scroll, setScroll] = React.useState(false)
    let [burger, setBurger] = React.useState(false)

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])

    window.onscroll = function (event) {
        let scroll = window.pageYOffset;
        if (50 < scroll) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    return (
        <div className={scroll ? "scrollheader header" : 'header'}>
            <div className="header__wrapper">
                <NavLink to="/" className="header__wrapper__left">
                    <img src={Images.Logo} alt="" />
                    <h1>VisionM4</h1>
                </NavLink>
                <ul className="header__wrapper__middle">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activeNavLink navLink" : "navLink"}>Home</NavLink></li>
                    <li>
                        <NavLink to="/services" className={({ isActive }) => isActive ? "activeNavLink navLink" : "navLink"}>Services {Icons.ArrowDropdown}</NavLink>
                        <ul className='underList'>
                            <li><a href="#">Machine Learning</a></li>
                            <li><a href="#">Computer Vision</a></li>
                            <li><a href="#">Internet Of Things</a></li>
                        </ul>
                    </li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "activeNavLink navLink" : "navLink"}>About</NavLink></li>
                    <li><NavLink to="/help" className={({ isActive }) => isActive ? "activeNavLink navLink" : "navLink"}>Help</NavLink></li>
                </ul>
                <div className="header__wrapper__right">
                    <div className='header__wrapper__right__icon'>{Icons.Facebook}</div>
                    <div className='header__wrapper__right__icon'>{Icons.Twitter}</div>
                    <button className='freeQuote'>Free Quote</button>
                    <button className='burger' onClick={() => {
                        setBurger(true)
                        console.log(burger)
                    }}>{Icons.Burger}</button>
                </div>
            </div>
            <div className={burger ? "burgerModal" : "burgerModalNone"}>
                <button className='burgerClose' onClick={() => {
                    setBurger(false)
                    console.log(burger)
                }}>⨉</button>

                <ul className="navList">
                    <li><NavLink onClick={()=>setBurger(false)} to="/" className={({ isActive }) => isActive ? "activeNavLink navLink" : "navLink"}>Home</NavLink></li>
                    <li>
                        <NavLink onClick={()=>setBurger(false)} to="/services" className={({ isActive }) => isActive ? "activeNavLink navLink servicesLink" : "navLink servicesLink"}>Services</NavLink>

                        <ul className='navList__underList'>
                            <li><a href="#">Machine Learning</a></li>
                            <li><a href="#">Computer Vision</a></li>
                            <li><a href="#">Internet Of Things</a></li>
                        </ul>
                    </li>
                    <li><NavLink onClick={()=>setBurger(false)} to="/about" className={({ isActive }) => isActive ? "activeNavLink navLink" : "navLink"}>About</NavLink></li>
                    <li><NavLink onClick={()=>setBurger(false)} to="/help" className={({ isActive }) => isActive ? "activeNavLink navLink" : "navLink"}>Help</NavLink></li>
                </ul>
            </div>

        </div>
    )
}

export default Header