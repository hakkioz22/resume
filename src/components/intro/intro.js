import React from 'react'

const Intro = () => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark"></div>
        <div className="hero-bg parallax" style={{backgroundImage:"url('images/intro-bg.jpg')"}}></div>
        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <div className="typed-strings">
                  
                  <p>Öz Hukuk Bürosu</p>
                  <p>Nitelikli</p>
                  <p>Etkili</p>
                  <p>Hızlı</p>
                </div>
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">Websitemize Hoşgeldiniz!</p>
                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                <div
                sequence={[
                  "Öz Hukuk Bürosu",
                  1000,
                  "Nitelikli",
                  1000,
                  "Etkili",
                  1000,
                  "Hızlı",
                  ()=>{
                    console.log("Done typing!");
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                speed={10}
                />
                </h2>
                <p className="text-5 text-light mb-4">Bursa, Turkiye</p>
				<a href="#contact" className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2">Detaylı Bilgi</a>
              </div>
            </div>
          </div>
          <a href="#about" className="scroll-down-arrow text-white smooth-scroll"><span className="animated"><i className="fa fa-chevron-down"></i></span></a> </div>
      </div>
    </section>
  )
}

export default Intro