import React from 'react'
import SectionTitle from '../common/section-title/section-title'
import Service from './service'

const Services = () => {
  return (
    <>
        <section id="services" className="section bg-light">
      <div className="container px-lg-5"> 

        <SectionTitle frontText="Dosya Türlerimiz?" backText="Çalışma Alanları"/>
        
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-md-6">
                
                <Service icon="car" title="Değer Kaybı Tazminatı" desc="Uzman çalışan kadromuzla beraber trafik kazası neticesinde aracınızda oluşan değer kaybı tazminatları"/>
              </div>
              <div className="col-md-6">
              <Service icon="user-injured" title="İş Gücü Kaybı" desc="Yaralamalı trafik kazalarında oluşan yaralamalar neticesinde yaralama nedeniyle iş gücü kaybı tazminatları"/>
              </div>
              <div className="col-md-6">
              <Service icon="car-crash" title="Parça Farkı Tazminatları" desc="Orjinal parça-yan sanayi parça farkından oluşan tazminat talepleri"/>
              </div>
              <div className="col-md-6">
              <Service icon="ring" title="Mal Rejimi Paylaşımı" desc="Mal Rejimi Paylaşımı"/>
              </div>
              <div className="col-md-6">
              <Service icon="user-tie" title="Şirket Danışmanlıkları" desc="Şirket Danışmanlığı"/>
              </div>
              <div className="col-md-6">
              <Service icon="building" title="İş Hukukundan Kaynaklanan Davalar" desc="Kıdem Tazminatı - İhbar Tazminatı"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Services