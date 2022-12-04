import React from 'react'

const ResumeCard = (props) => {
    const {date,title,subtitle,desc} = props;
  return (
    <>
        <p className="badge bg-primary text-2 fw-400">{date}</p>
        <h3 className="text-5">{title}</h3>
        <p className="text-danger">{subtitle}</p>
        <p className="mb-0">{desc}</p>
    </>
  )
}

export default ResumeCard