import React from 'react'
import { Images, Icons } from "../../base/path"

function About() {
  return (
    <section className='service__wrapper__custum'>
      <img className='service__wrapper__custum__background' src={Images.Blob} alt="" />
      <img className='service__wrapper__custum__phone' src={Images.Phone} alt="" />
      <img className='service__wrapper__custum__laptop' src={Images.Laptop} alt="" />

      <div className="service__wrapper__custum__content">
        <h4>CUSTUM SOFTWARE DEVELOPMENT</h4>
        <h1 className='service__wrapper__custum__content__title'>Data Analytics</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis porttitor. Ut libero ante, varius quis ligula in, aliquet consectetur tortor.</p>
        <button>Get Started</button>
      </div>
    </section>
  )
}

export default About