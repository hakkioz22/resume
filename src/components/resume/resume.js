import React from 'react'
import SectionTitle from '../common/section-title/section-title'
import ResumeCard from './resumecard'
import Skill from './skill'

const Resume = () => {
  return (
    <>
    <section id="resume" className="section">
      <div className="container px-lg-5"> 
        
        <SectionTitle frontText="Özgeçmiş" backText="Özet"/>
        
        
        <div className="row gx-5"> 
          <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4">Eğitim Geçmişi</h2>
              <div className="bg-white border rounded p-4 mb-4">
                <ResumeCard date="2013-2017" title="İstanbul Medipol Üniversitesi" subtitle="Hukuk Fakültesi" desc=""/>
                <ResumeCard date="2018-2022" title="Uludağ Üniversitesi" subtitle="Sosyal Bilimler Enstitüsu" desc="Özel Hukuk Bilim Dalı - Türk Hukukunda Güvence Hesabı"/>
                <ResumeCard date="2017-2018" title="İstanbul Beykoz Üniversitesi" subtitle="Aile Hukuku Mal Rejimi" desc=""/>
              </div>
          </div>
          
          
          <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4">Deneyim</h2>
              <div className="bg-white border rounded p-4 mb-4">
                <ResumeCard date="2018-2022" title="Kurucu Avukat" subtitle="Öz Hukuk Bürosu" desc=""/>
                <ResumeCard date="2017-2018" title="Stajyer Avukat" subtitle="Çelik Hukuk Bürosu" desc=""/>
                <ResumeCard date="2019-..." title="Hukuk Danışmanlığı" subtitle="Birçok Firmada bknz." desc=""/>
              </div>
          </div>
        </div>
        
		<h2 className="text-6 fw-600 mt-4 mb-4">Uzmanlık Alanlarımız</h2>
        <div className="row gx-5">
          <div className="col-md-6">

            <Skill name="Sigorta Hukuku" level="100" />

            <Skill name="Tazminat Hukuku" level="100" />

            <Skill name="Aile Hukuku" level="100" />

          </div>

          <div className="col-md-6">
            <Skill name="Miras Hukuku" level="100" />

            <Skill name="İş Hukuku" level="100" />

            <Skill name="İcra ve İflas Hukuku" level="100" />
            
          </div>
        </div>
        <div className="text-center mt-5"><a href="#" className="btn btn-outline-secondary rounded-pill shadow-none">Randevu Oluştur <span className="ms-1"><i className="fas fa-download"></i></span></a></div>
      </div>
    </section>
    </>
  )
}

export default Resume