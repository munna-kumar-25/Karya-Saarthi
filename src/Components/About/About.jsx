import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'


const About = () =>{
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
     
      </div>
        <div className="about-right">
        <h3>ABOUT KAARYA SAARTHI</h3>
        <h2>What is KaryaSaarthi?</h2>
        <p>KaryaSaarthi is like having a helpful friend who solves all your work problems. Whether you're a student struggling with thesis, a business owner needing a website, or anyone facing work challenges - we connect you with the right person who will work with you like a true friend (Saarthi), not just do the work and disappear.</p>

        <h3>Why Choose Us? </h3>
        <p>Get work done while learning from verified professionals who ensure quality and reliability. Enjoy clear, transparent communication throughout the process, and pay only when you're completely satisfied with the results. With convenient UPI payments, there's no need for credit cards—making the experience smooth and secure.</p>
        <p>Additionally, every collaboration helps you build your professional network—connecting you with experts across industries who can offer guidance, mentorship, and future opportunities beyond the current project.</p>
    </div>
    </div>
  )
}

export default About
