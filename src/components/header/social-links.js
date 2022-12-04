import React from 'react'

const SocialLink = () => {
  return (
    <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
        <li className="social-icons-facebook"><a data-bs-toggle="tooltip" title="Facebook" href="http://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
        <li className="social-icons-twitter"><a data-bs-toggle="tooltip" title="Twitter" href="http://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a></li>
        <li className="social-icons-dribbble"><a data-bs-toggle="tooltip" title="Dribbble" data-bs-placement="top" href="http://www.dribbble.com/" target="_blank"><i className="fab fa-dribbble"></i></a></li>
        <li className="social-icons-github"><a data-bs-toggle="tooltip" title="GitHub" data-bs-placement="top" href="http://www.google.com/" target="_blank" ><i className="fab fa-github"></i></a></li>
    </ul>
  )
}

export default SocialLink