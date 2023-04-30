import React from 'react'
import { Images, Icons } from "../../base/path"
import "./Services.scss"
import { OurServices, Analysis, People } from "../../Data"

function Services() {

  let [modal, setModal] = React.useState(false)

  return (
    <div className='service'>
      <div className="service__wrapper">
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

        <section className='service__wrapper__ourServices'>
          <h4 className='designTitle'>OUR SERVICES</h4>
          <h2 className='service__wrapper__ourServices__title title'>Our Features</h2>
          <div className="service__wrapper__ourServices__services">
            {
              OurServices.map(s => {
                return (
                  <div key={s.title} div className="service__wrapper__ourServices__services__service">
                    <div className="service__wrapper__ourServices__services__service__top">
                      <img src={s.image} alt={s.title} />
                      <div className='info'>
                        <h2>{s.title}</h2>
                        <h3>{s.subtitle}</h3>
                      </div>
                    </div>
                    <div className="service__wrapper__ourServices__services__service__bottom">
                      {s.secondImage}
                      <h2>{s.title}</h2>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>

        <section className='service__wrapper__ourExp container'>
          <h4>Our Experience</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem risus, consectetur eget sagittis ut, tincidunt vitae magna. Pellentesque varius porta sem et ullamcorper. Curabitur ultricies consectetur hendrerit. Ut pulvinar sit amet lacus tincidunt iaculis. Morbi molestie, tortor quis ultricies sodales, tellus ipsum pretium sem, eget euismod nunc augue non diam. In vel tempor turpis. Quisque gravida arcu neque, sed sagittis purus sollicitudin et.</p>
          <p>Proin sagittis felis vel consequat euismod. Nam at finibus dolor. Sed at dictum sem. Donec mollis, purus eu venenatis mollis, risus nulla suscipit turpis, nec venenatis velit lorem et dolor. Sed posuere felis a sem interdum luctus. Proin nec orci augue. Vestibulum ultrices leo non erat scelerisque mollis.</p>


          <ul className='service__wrapper__ourExp__responsiveList'>
            <li>
              {Icons.ArrowRight}
              <span>
                <h2>Internet Of Things</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing aliquet elit.</p>
              </span>
            </li>
            <li>
              {Icons.ArrowRight}
              <span>
                <h2>Machine Learning</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing aliquet elit.</p>
              </span>
            </li>
            <li>
              {Icons.ArrowRight}
              <span>
                <h2> Computer Vision</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing aliquet elit.</p>
              </span>
            </li>
            <li>
              {Icons.ArrowRight}
              <span>
                <h2>Internet Of Things</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing aliquet elit.</p>
              </span>
            </li>
            <li>
              {Icons.ArrowRight}
              <span>
                <h2>Machine Learning</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing aliquet elit.</p>
              </span>
            </li>
            <li>
              {Icons.ArrowRight}
              <span>
                <h2> Computer Vision</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing aliquet elit.</p>
              </span>
            </li>
          </ul>

          <div className='service__wrapper__ourExp__lists'>
            <ul>
              <li>
                {Icons.ArrowRight}
                <span>
                  <h2>Machine Learning</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing aliquet elit.</p>
                </span>
              </li>
              <li>
                {Icons.ArrowRight}
                <span>
                  <h2>Computer Vision</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing aliquet elit.</p>
                </span>
              </li>
              <li>
                {Icons.ArrowRight}
                <span>
                  <h2> Internet Of Things</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing aliquet elit.</p>
                </span>
              </li>
            </ul>
            <img src={Images.Phone2} alt="Phone" />
            <ul className='service__wrapper__ourExp__lists__right'>
              <li>
                {Icons.ArrowRight}
                <span>
                  <h2>Internet Of Things</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing aliquet elit.</p>
                </span>
                {Icons.ArrowLeft}
              </li>
              <li>
                {Icons.ArrowRight}
                <span>
                  <h2>Machine Learning</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing aliquet elit.</p>
                </span>
                {Icons.ArrowLeft}
              </li>
              <li>
                {Icons.ArrowRight}
                <span>
                  <h2> Computer Vision</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing aliquet elit.</p>
                </span>
                {Icons.ArrowLeft}
              </li>
            </ul>
          </div>
        </section>

        <section className='service__wrapper__analysis'>
          <div className="service__wrapper__analysis__blocks">
            {
              Analysis.map(a => {
                return (
                  <div key={a.id} className="service__wrapper__analysis__blocks__block">
                    {a.image}
                    <span className='squareWrapper'>
                      <span className='square'></span>
                      <a href="#">{a.id}</a>
                    </span>
                    <span>
                      <h4>{a.title}</h4>
                      <p>{a.desc}</p>
                    </span>
                  </div>
                )
              })
            }
          </div>
        </section>

        <section className='service__wrapper__about container'>
          <div className="service__wrapper__about__left">
            <h4 className='designTitle designTitle--modified'>ABOUT US</h4>
            <h2 className='title title--modified'>We are Going Global</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dolor in nulla ultrices, vitae malesuada nibh semper. Mauris mollis rutrum eu ornare nisi. Maecenas pretium sapien iaculis est bibendum placerat.</p>
            <span className='buttonWrapper'>
              <button onClick={() => { setModal(true) }}>{Icons.Play}</button>
              <strong>Video Showcase</strong>
            </span>
          </div>
          <div className="service__wrapper__about__right">
            <img src={Images.OurService3} alt="" />
          </div>


          <div className={modal ? "videoModal" : "videoModalNone"}>
            <div className="videoModalBg" onClick={() => { setModal(false) }}></div>
            <div className="videoModalBlock">
              <iframe width="660" height="315" src="https://www.youtube.com/embed/EcNS5Sep-dM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <span className='close' onClick={() => { setModal(false) }}>⨉</span>
          </div>
        </section>

        <section className='service__wrapper__team '>
          <div className="service__wrapper__team__wrapper container">
            <div className="service__wrapper__team__wrapper__left">
              <img src={Images.OurService1} alt="Mobirise" />
            </div>
            <div className="service__wrapper__team__wrapper__right">
              <h4 className='designTitle designTitle--modified'>OUR SERVICES</h4>
              <h2 className='title title--modified'>We Have Only Best Professional Team</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dolor in nulla ultrices, vitae malesuada nibh semper. Mauris mollis rutrum eu ornare nisi. Maecenas pretium sapien iaculis est bibendum placerat.</p>

              <div className='percentWrapper'>
                <div className="circle-box">
                  <h3 className="percentage">37%</h3>
                  <div className="outer">
                    <svg width="141px" height="141px">
                      <circle className="grey-circle" cx="74" cy="74" r="63"></circle>
                      <circle className="circle circle--1" cx="74" cy="74" r="63"></circle>
                    </svg>
                  </div>
                  <h3 className='circleTitle'>DEVELOPERS</h3>
                </div>
                <div className="circle-box">
                  <h3 className="percentage">60%</h3>
                  <div className="outer">
                    <svg width="141px" height="141px">
                      <circle className="grey-circle" cx="74" cy="74" r="63"></circle>
                      <circle className="circle circle--2" cx="74" cy="74" r="63"></circle>
                    </svg>
                  </div>
                  <h3 className='circleTitle'>DESIGNERS</h3>
                </div>
                <div className="circle-box">
                  <h3 className="percentage">70%</h3>
                  <div className="outer">
                    <svg width="141px" height="141px">
                      <circle className="grey-circle" cx="74" cy="74" r="63"></circle>
                      <circle className="circle circle--3" cx="74" cy="74" r="63"></circle>
                    </svg>
                  </div>
                  <h3 className='circleTitle'>LEADERSHIP</h3>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className='service__wrapper__jane container'>
          <div className="service__wrapper__jane__left">
            <div className='service__wrapper__jane__left__imgBox'>
              <img src={Images.Face} alt="Jane May" />
            </div>
          </div>
          <div className="service__wrapper__jane__right">
            <h1>Jane May</h1>
            <h5>GENERAL MANAGER</h5>
            <ul>
              <li><strong>Responsibility:</strong> Mobile Integration</li>
              <li><strong>Experience:</strong>10 Years</li>
              <li><strong>Email:</strong><a href="mailto:jane.may@yoursite.com">jane.may@yoursite.com</a></li>
              <li><strong>Phone:</strong><a href="tel:+1 800 123 456 789">+1 800 123 456 789</a></li>
              <li><strong>Fax:</strong>+ 1 800 987 654 321</li>
            </ul>
            <div className='service__wrapper__jane__right__icons'>
              <a href='#'>{Icons.Twitter}</a>
              <a href='#'>{Icons.Facebook}</a>
              <a href='#'>{Icons.Facebook}</a>
            </div>
          </div>
        </section>

        <section className='service__wrapper__people'>
          <h4 className='designTitle designTitle--modified'>OUR TEAM</h4>
          <h2 className='title title--modified'>Our Dedicated Team</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dolor in nulla ultrices, vitae malesuada nibh semper. Mauris mollis rutrum eu ornare nisi.</p>

          <div className="service__wrapper__people__all">
            {
              People.map(p => {
                return (
                  <div key={p.name} className="service__wrapper__people__all__person">

                    <div className="service__wrapper__people__all__person__top">
                      {Icons.ArrowRight}
                      <img src={p.image} alt={p.image} />
                    </div>
                    <div className="service__wrapper__people__all__person__bottom">
                      <h1>{p.name}</h1>
                      <h3>{p.position}</h3>

                      <div className='service__wrapper__people__all__person__bottom__icons'>
                        <a href='#'>{Icons.Twitter}</a>
                        <a href='#'>{Icons.Facebook}</a>
                        <a href='#'>{Icons.Facebook}</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>

        <section className='service__wrapper__client'>
          <img className='service__wrapper__client__bg' src={Images.Blob2} alt="" />

          <span className='service__wrapper__client__content'>
            <h3>Clients Say</h3>

            <img src={Images.Quote} alt="" />

            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem risus, consectetur eget sagittis ut, tincidunt vitae magna. Pellentesque varius porta sem et ullamcorper. Curabitur ultricies consectetur hendrerit. Ut pulvinar sit amet lacus tincidunt iaculis."
            </p>
            <h2>PAUL TOURNIER</h2>
            <h5>CLIENT OF COMPANY</h5>
          </span>
        </section>

        <section className='service__wrapper__contacts container'>

          <div className="service__wrapper__contacts__left">
            <div className="service__wrapper__contacts__left__block">
              <div className="service__wrapper__contacts__left__block__left">
                <a className='contactLink' href='#'>{Icons.Location}</a>
              </div>
              <div className="service__wrapper__contacts__left__block__right">
                <h2>Office Address</h2>
                <p>MI Jamestown 146 <br /> Kimberly Way</p>

              </div>
            </div>
            <div className="service__wrapper__contacts__left__block">
              <div className="service__wrapper__contacts__left__block__left">
                <a className='contactLink contactLinkBg2' href='#'>{Icons.Mail}</a>
              </div>
              <div className="service__wrapper__contacts__left__block__right">
                <h2>Office Email</h2>
                <p>support@yoursite.com <br />connect@yoursite.com</p>
              </div>
            </div>
            <div className="service__wrapper__contacts__left__block">
              <div className="service__wrapper__contacts__left__block__left">
                <a className='contactLink contactLinkBg3' href='#'>{Icons.Phone}</a>
              </div>
              <div className="service__wrapper__contacts__left__block__right">
                <h2>Office Phone</h2>
                <p>0 (800) 123 45 67<br /> 0 (800) 231 54 76</p>

              </div>
            </div>
          </div>

          <div className="service__wrapper__contacts__right">
            <h4 className='designTitle designTitle--modified'>CONTACTS</h4>
            <h2 className='title title--modified'>Get in Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim dolor in nulla ultrices, vitae malesuada nibh semper.</p>
            <span>
              <input size="25" type="text" placeholder='Your Name' />
              <input type="email" placeholder='Your Email' />
            </span>
            <textarea placeholder='Your Message'></textarea>
            <button>Get in Touch</button>
          </div>
        </section>
        <section className='service__wrapper__map'>
          <iframe className='deliveredMap' src="https://yandex.ru/map-widget/v1/?um=constructor%3A45f4c42c10dd475562b7d5afbf84f438bc5c407afc0711035da7bf486293362f&amp;source=constructor" width="763" height="700" frameBorder="0"></iframe>
        </section>
      </div >
    </div >
  )
}

export default Services