'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    })
  }, [])

  const skills = [
    { name: 'HTML5', value: 100 },
    { name: 'CSS3', value: 90 },
    { name: 'JavaScript', value: 85 },
    { name: 'React.js', value: 85 },
    { name: 'Next.js', value: 60 },
    { name: 'Node.js', value: 70 },
    { name: 'Express.js', value: 70 },
    { name: 'Python', value: 80 },
    { name: 'Django', value: 80 }
  ]

  const aboutText = [
    "I'm Md Moinuddin Kamal, a Full Stack Developer with 11+ years of IT experience across software companies, RMG, ISPs, and architecture firms. Currently working as an IT Administrator at an architecture and construction company.",
    "My expertise includes network design (LAN/MAN/WAN using Cisco and MikroTik), Windows Server (ADDS, DNS, DHCP), Linux Ubuntu, attendance systems, payroll operations, and surveillance systems configuration.",
    "As a developer, I specialize in building responsive web applications using modern technologies like React, Next.js, and Python frameworks. I bridge the gap between infrastructure and software development."
  ]

  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row justify-content-between gy-4">
              <div className="col-lg-5" data-aos="zoom-in" data-aos-delay={150}>
                <img 
                  src="/assets/img/moinuddin.jpg" 
                  className="img-fluid profile-img" 
                  alt="Md Moinuddin Kamal"
                  onMouseEnter={(e) => e.currentTarget.classList.add('hover-effect')}
                  onMouseLeave={(e) => e.currentTarget.classList.remove('hover-effect')}
                />
              </div>
              <div className="col-lg-7 about-info" data-aos="fade-left" data-aos-delay={200}>
                <h3 className="section-title">Personal Info</h3>
                <p><strong>Name:</strong> <span>Md Moinuddin Kamal</span></p>
                <p><strong>Profile:</strong> <span>Full Stack Developer</span></p>
                <p><strong>Email:</strong> <span>cpimoinuddin@gmail.com</span></p>
                <p><strong>Phone:</strong> <span>+880 1824-682965</span></p>
                
                <div className="social-links mt-3">
                  <a href="#" className="twitter" data-aos="zoom-in" data-aos-delay={250}>
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="facebook" data-aos="zoom-in" data-aos-delay={300}>
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="linkedin" data-aos="zoom-in" data-aos-delay={350}>
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="github" data-aos="zoom-in" data-aos-delay={400}>
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="skills-content skills-animation" data-aos="fade-up" data-aos-delay={450}>
              <h4 className="skills-title">Technical Skills</h4>
              {skills.map((skill, index) => (
                <div className="progress" key={index} data-aos="fade-up" data-aos-delay={500 + (index * 50)}>
                  <span className="skill">
                    {skill.name} <i className="val">{skill.value}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div 
                      className="progress-bar" 
                      role="progressbar" 
                      aria-valuenow={skill.value} 
                      aria-valuemin={0} 
                      aria-valuemax={100}
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-me" data-aos="fade-left" data-aos-delay={600}>
              <h3 className="section-title">Professional Summary</h3>
              {aboutText.map((paragraph, index) => (
                <p key={index} data-aos="fade-up" data-aos-delay={650 + (index * 50)}>
                  {paragraph}
                </p>
              ))}
              
              <div className="resume-btn mt-4" data-aos="fade-up" data-aos-delay={800}>
                <a 
                  href="#"
                  className="btn btn-primary"
                  onMouseEnter={(e) => e.currentTarget.classList.add('btn-grow')}
                  onMouseLeave={(e) => e.currentTarget.classList.remove('btn-grow')}
                >
                  Download Resume <i className="bi bi-download ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .profile-img {
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          border: 5px solid rgba(255,255,255,0.2);
        }
        .profile-img.hover-effect {
          transform: scale(1.03);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        .section-title {
          color: var(--primary-color);
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 10px;
        }
        .section-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 3px;
          background: var(--primary-color);
        }
        .skills-title {
          margin-bottom: 20px;
          color: var(--secondary-color);
        }
        .progress-bar {
          transition: width 1.5s ease-in-out;
        }
        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          transform: translateY(-3px);
        }
        .btn-grow {
          transform: scale(1.05);
        }
        
        @media (max-width: 992px) {
          .about-info {
            margin-top: 30px;
          }
          .skills-content {
            margin-top: 30px;
          }
        }
        @media (max-width: 768px) {
          .profile-img {
            max-width: 200px;
            margin: 0 auto;
          }
          .section-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}