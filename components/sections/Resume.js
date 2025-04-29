'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Resume() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    })
  }, [])

  const summary = {
    name: "Md Moinuddin Kamal",
    description: "Experienced IT Administrator and Full Stack Developer with 11+ years in network infrastructure, system administration, and software development across diverse industries.",
    details: [
      "95, Aagrabad, Chattogram",
      "+880 1824-682965",
      "cpimoinuddin@gmail.com"
    ]
  }

  const education = [
    {
      degree: "B.Sc in Computer Science & Engineering",
      period: "2020 - 2024",
      institution: "Southern University, Bangladesh",
      description: "Specialized in software development and network systems, with coursework in modern web technologies and infrastructure management."
    },
    {
      degree: "Diploma in Computer Science & Technology",
      period: "2010 - 2014",
      institution: "Chittagong Polytechnical Institute, Chattogram",
      description: "Focused on practical IT skills including networking, hardware maintenance, and foundational programming."
    }
  ]

  const experience = [
    {
      position: "IT Administrator",
      company: "Pronayon/PDS, Chittagong",
      period: "2019 - Present",
      location: "Aagrabad, Chattogram",
      responsibilities: [
        "Managed all IT devices including printers, scanners, access controllers",
        "Configured and maintained MikroTik routers, Windows Server 2016 (ADDS, DNS, DHCP)",
        "Network troubleshooting and Cisco router/switch configuration",
        "Implemented and maintained IP/CC camera surveillance systems",
        "Payroll system management and user support"
      ]
    },
    {
      position: "System Admin",
      company: "Orange Communication, Chittagong",
      period: "2018 - 2019",
      location: "Lohagara, Chattogram",
      responsibilities: [
        "Optical fiber network design and OLT configuration",
        "Managed wireless devices (TP-Link, Netgear, Tenda, D-Link)",
        "Team management and technical user support",
        "Network troubleshooting and maintenance"
      ]
    },
    {
      position: "IT Officer",
      company: "Mohara Asian Apparels Ltd",
      period: "2017 - 2018",
      location: "Kalurghat, Chattogram",
      responsibilities: [
        "Attendance system maintenance",
        "Payroll software administration",
        "Network infrastructure support",
        "CCTV system configuration and troubleshooting"
      ]
    },
    {
      position: "IT Executive",
      company: "PAN ARAB INTERNATIONAL",
      period: "2016 - 2017",
      location: "Aagrabad, Chattogram",
      responsibilities: [
        "Cloud-based software operations (Enjazit, Alkawder)",
        "IT and PC troubleshooting",
        "User support and system maintenance"
      ]
    },
    {
      position: "IT Service & Support",
      company: "Alchemy Software",
      period: "2014 - 2015",
      location: "Kalurghat, Chattogram",
      responsibilities: [
        "Oracle Database (8i, 9i, 10g) administration",
        "Developer 6.0 setup and configuration",
        "Hardware troubleshooting and client support"
      ]
    }
  ]

  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Professional Resume</h2>
        <p>11+ years of IT experience across network infrastructure, system administration, and full stack development</p>
      </div>

      <div className="container">
        <div className="row">
          {/* Left Column - Summary & Education */}
          <div className="col-lg-6">
            <div className="resume-block" data-aos="fade-up" data-aos-delay={100}>
              <h3 className="resume-title">
                <i className="bi bi-person-badge"></i> Professional Summary
              </h3>
              <div className="resume-item summary-card">
                <h4>{summary.name}</h4>
                <p><em>{summary.description}</em></p>
                <ul>
                  {summary.details.map((detail, index) => (
                    <li key={index} data-aos="fade-up" data-aos-delay={150 + (index * 50)}>
                      <i className="bi bi-chevron-right"></i> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="resume-block" data-aos="fade-up" data-aos-delay={200}>
              <h3 className="resume-title">
                <i className="bi bi-book"></i> Education
              </h3>
              {education.map((edu, index) => (
                <div 
                  className="resume-item education-card" 
                  key={index}
                  data-aos="fade-up" 
                  data-aos-delay={250 + (index * 100)}
                >
                  <h4>{edu.degree}</h4>
                  <h5>{edu.period}</h5>
                  <p><em>{edu.institution}</em></p>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="col-lg-6">
            <div className="resume-block" data-aos="fade-up" data-aos-delay={300}>
              <h3 className="resume-title">
                <i className="bi bi-briefcase"></i> Work Experience
              </h3>
              {experience.map((exp, index) => (
                <div 
                  className="resume-item experience-card" 
                  key={index}
                  data-aos="fade-up" 
                  data-aos-delay={350 + (index * 100)}
                >
                  <div className="experience-header">
                    <h4>{exp.position}</h4>
                    <h5>{exp.period}</h5>
                  </div>
                  <p><em>{exp.company} - {exp.location}</em></p>
                  <ul>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} data-aos="fade-up" data-aos-delay={400 + (index * 100) + (i * 50)}>
                        <i className="bi bi-check-circle"></i> {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Elements */}
      <style jsx>{`
        .resume-block {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 25px;
          margin-bottom: 30px;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        .resume-block:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .resume-title {
          color: var(--primary-color);
          position: relative;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .resume-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 3px;
          background: var(--primary-color);
        }
        .resume-title i {
          margin-right: 10px;
        }
        .resume-item {
          border-left: 2px solid var(--primary-color);
          padding-left: 20px;
          position: relative;
          margin-bottom: 30px;
        }
        .resume-item::before {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--primary-color);
          left: -9px;
          top: 0;
        }
        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        .resume-item ul {
          padding-left: 20px;
        }
        .resume-item ul li {
          margin-bottom: 10px;
          position: relative;
        }
        .resume-item ul li i {
          color: var(--primary-color);
          margin-right: 5px;
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
          .resume-block {
            padding: 20px;
          }
          .experience-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .experience-header h5 {
            margin-top: 5px;
          }
        }
        @media (max-width: 768px) {
          .resume-title {
            font-size: 1.4rem;
          }
          .resume-item {
            padding-left: 15px;
          }
          .resume-item h4 {
            font-size: 1.1rem;
          }
          .resume-item h5 {
            font-size: 0.9rem;
          }
        }
        @media (max-width: 576px) {
          .resume-block {
            padding: 15px;
          }
          .resume-item {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  )
}




// import React from 'react'

// export default function Resume() {
//   return (
//     <>
    
//  <section id="resume" className="resume section">
//   {/* Section Title */}
//   <div className="container section-title" data-aos="fade-up">
//     <h2>Resume</h2>
//     <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
//   </div>{/* End Section Title */}
//   <div className="container">
//     <div className="row">
//       <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
//         <h3 className="resume-title">Sumary</h3>
//         <div className="resume-item pb-0">
//           <h4>Md Moinuddin Kamal </h4>
//           <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
//           <ul>
//             <li>95,Aagrabad,Chattrogram</li>
//             <li>008-1824-682965</li>
//             <li>cpimoinuddin@gmail.com</li>
//           </ul>
//         </div>{/* Edn Resume Item */}
//         <h3 className="resume-title">Education</h3>
//         <div className="resume-item">
//           <h4>B.S.C in Computer Science & Engineering &amp; CSE </h4>
//           <h5>2020  - 2024</h5>
//           <p><em>Southern University,Bangladesh</em></p>
//           <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
//         </div>{/* Edn Resume Item */}
//         <div className="resume-item">
//           <h4>Diploma in Engineering &amp; Computer Science $ Technology </h4>
//           <h5>2010 - 2014</h5>
//           <p><em>Chittagong Polytechnical Institute ,Chattrogram</em></p>
//           <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
//         </div>{/* Edn Resume Item */}
//       </div>
//       <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
//         <h3 className="resume-title">Professional Experience</h3>
//         <div className="resume-item">
//           <h4>Pronayon/PDS, Chittagong — IT Administrator
//           </h4>
//           <h5>2019 - Present</h5>
//           <p><em>Aagrabad, Chattrogram </em></p>
//           <ul>
//             <li>Al Kinds of IT device ,printer ,scaner, Access controller configuration ,management
// , troubleshooting .Mikrotik configuration, winbox management ,Al kinds of Wireless
// Device such as Tplink, netgear, Tenda ,D-Link etc, Windows server 2016 using Active
// Directory ,DNS ,DHCP,FTP, domain controlling ,Cisco router & Switch
// configuration ,Network troubleshooting ,Payroll management .IP and CC camera
// configure, maintenance ,etc..</li>
//           </ul>
//         </div>{/* Edn Resume Item */}
//         <div className="resume-item">
//           <h4>System Admin</h4>
//           <h4>Orange Communication,
//           Chittagong — </h4>
//           <h5>2018 - 2019</h5>
//           <p><em>Lohagara,Chattrogram</em></p>
//           <ul>
//            <li>Optical Fibre design, Planning, OLT configuration, management, troubleshooting
// , Mikrotic configuration ,winbox management ,Al kinds of Wireless Device
// sucs as Tplink, netgear, Tenda,D-Link etc,team management, user support</li>
//           </ul>
//         </div>{/* Edn Resume Item */}
//         <div className="resume-item">
//           <h4>IT Officer</h4>
//           <h4>Mohara Asian Apparels Ltd — </h4>
//           <h5>2017 - 2018</h5>
//           <p><em>Kalurghat,Chattrogram</em></p>
//           <ul>
//            <li>Attendance system maintain, Payrol software, networking, IT support,
//            CCTv maintains, configure, troubleshooting, etc</li>
//           </ul>
//         </div>
//         <div className="resume-item">
//           <h4>IT Executive</h4>
//           <h4>PAN ARAB INTERNATIONL
//           </h4>
//           <h5>2016 - 2017</h5>
//           <p><em>Aagrabad,Chattrogram</em></p>
//           <ul>
//           <li>Cloud Base Software Operation (Enjazit, Alkawder)
//           , IT Troubleshooting, Pc troubleshooting, etc.</li>
//           </ul>
//         </div>
//         <div className="resume-item">
//           <h4>IT (Service & Support)
//           </h4>
//           <h4>Alchemy Software
//           </h4>
//           <h5>2014 - 2015</h5>
//           <p><em>Kalurghat,Chattrogram</em></p>
//           <ul>
//           <li>T Troubleshooting, ORACLE 8, 9i, 10 G Database ,
//           Developer 6.0 Setup, Hardware Troubleshooting, Client Support, etc</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>{/* /Resume Section */}



//     </>
//   )
// }
