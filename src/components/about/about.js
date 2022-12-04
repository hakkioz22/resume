import React from 'react'
import SectionTitle from '../common/section-title/section-title'
import Counter from './counter'

const About = () => {
  return (
    <>
    <section id="about" className="section">
      <div className="container px-lg-5"> 
        
        <SectionTitle frontText = "Daha Fazla Öğrenin" backText="Hakkımızda"/>
        
        <div className="row gy-5">
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2 className="text-7 fw-600 mb-3"><span className="text-primary">Öz Hukuk Bürosu</span> </h2>
            <p>Müvekkillerimiz ile danışanlarımıza yaşamış oldukları ve ileride yaşayabilecekleri hukuki ihtilaflar hakkında yardımcı oluyoruz. Yaklaşık olarak 50'den fazla şirket ve binden fazla müvekkilimizle çalışmanın gururunu yaşıyoruz.</p>
            <p>Bizim mottomuz 'efektif ve etkili çözüm' üzerinedir.</p>
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul className="list-style-2">
                <li className=""><span className="fw-600 me-2">Name:</span>Av. Büşra Oz</li>
                <li className=""><span className="fw-600 me-2">Email:</span><a href="mailto:hakkioz@outlook.com">ozhukukburosu@gmail.com</a></li>
                <li className=""><span className="fw-600 me-2">Age:</span>28</li>
                <li className="border-0"><span className="fw-600 me-2">From:</span>Bursa, Turkiye</li>
              </ul>
              <a href="#" className="btn btn-primary rounded-pill">İletişim</a> </div>
          </div>
        </div>
        <div className="brands-grid separator-border mt-5">
          <div className="row">
            <div className="col-6 col-md-3">
              <Counter name = "Yıldan Fazla Deneyim" value="6" sign="+"/>
            </div>
            <div className="col-6 col-md-3">
              <Counter name = "Müvekkil" value="1000" sign="+"/>
            </div>
            <div className="col-6 col-md-3">
              <Counter name = "Çözümlenmiş Dosya" value="800" sign="+"/>
            </div>
            <div className="col-6 col-md-3">
              <Counter name = "Başarı Ödülleri" value="20" sign=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About