'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    })
  }, [])

  const services = [
    {
      title: "IT Support & Administration",
      icon: "bi bi-activity",
      description: "Comprehensive IT infrastructure management including network setup, device configuration, troubleshooting, and system maintenance.",
      delay: 100
    },
    {
      title: "Network Solutions",
      icon: "bi bi-broadcast",
      description: "Design and implementation of secure LAN/WAN networks using Cisco, MikroTik, and wireless technologies.",
      delay: 200
    },
    {
      title: "React Frontend Development",
      icon: "bi bi-easel",
      description: "Building responsive, high-performance web applications with React.js, Next.js, and modern JavaScript frameworks.",
      delay: 300
    },
    {
      title: "Full Stack Web Development",
      icon: "bi bi-bounding-box-circles",
      description: "End-to-end web solutions with Node.js, Express, MongoDB, and seamless frontend-backend integration.",
      delay: 400
    },
    {
      title: "Python Backend Development",
      icon: "bi bi-calendar4-week",
      description: "Robust backend systems and APIs using Python, Django, Flask, and PostgreSQL databases.",
      delay: 500
    },
    {
      title: "Odoo ERP Development",
      icon: "bi bi-chat-square-text",
      description: "Custom Odoo ERP solutions tailored to business needs including modules development and system integration.",
      delay: 600
    }
  ]

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Professional Services</h2>
        <p>Comprehensive IT solutions tailored to your business requirements</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div 
              className="col-lg-4 col-md-6" 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={service.delay}
            >
              <div 
                className="service-item position-relative"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.querySelector('.icon').style.backgroundColor = 'var(--primary-color)'
                  e.currentTarget.querySelector('.icon i').style.color = '#fff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.querySelector('.icon').style.backgroundColor = '#f3f6fa'
                  e.currentTarget.querySelector('.icon i').style.color = 'var(--primary-color)'
                }}
              >
                <div className="icon">
                  <i className={service.icon} />
                </div>
                <a href="#" className="stretched-link">
                  <h3>{service.title}</h3>
                </a>
                <p>{service.description}</p>
                <div 
                  className="learn-more"
                  data-aos="fade-up"
                  data-aos-delay={service.delay + 50}
                >
                  <span>Learn more <i className="bi bi-arrow-right"></i></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-item {
          background: #fff;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          height: 100%;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .service-item:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .service-item .icon {
          width: 60px;
          height: 60px;
          background: #f3f6fa;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }
        .service-item .icon i {
          color: var(--primary-color);
          font-size: 1.8rem;
          transition: all 0.3s ease;
        }
        .service-item h3 {
          font-weight: 700;
          margin-bottom: 15px;
          color: var(--secondary-color);
        }
        .service-item p {
          margin-bottom: 20px;
          color: #6c757d;
        }
        .learn-more {
          display: inline-flex;
          align-items: center;
          color: var(--primary-color);
          font-weight: 600;
          opacity: 0;
          transition: all 0.3s ease;
          transform: translateX(-10px);
        }
        .service-item:hover .learn-more {
          opacity: 1;
          transform: translateX(0);
        }
        .learn-more i {
          margin-left: 5px;
          transition: all 0.3s ease;
        }
        .service-item:hover .learn-more i {
          transform: translateX(5px);
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
          .service-item {
            padding: 25px;
          }
          .service-item .icon {
            width: 50px;
            height: 50px;
          }
          .service-item .icon i {
            font-size: 1.5rem;
          }
        }
        @media (max-width: 768px) {
          .service-item {
            padding: 20px;
          }
          .service-item h3 {
            font-size: 1.2rem;
          }
        }
        @media (max-width: 576px) {
          .service-item {
            padding: 15px;
          }
          .learn-more {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}




// import React from 'react'

// export default function Services() {
//   return (
//    <>
// <section id="services" className="services section">
//   {/* Section Title */}
//   <div className="container section-title" data-aos="fade-up">
//     <h2>Services</h2>
//     <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
//   </div>{/* End Section Title */}
//   <div className="container">
//     <div className="row gy-4">
//       <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
//         <div className="service-item  position-relative">
//           <div className="icon">
//             <i className="bi bi-activity" />
//           </div>
//           <a href="#" className="stretched-link">
//             <h3>IT Support </h3>
//           </a>
//           <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
//         </div>
//       </div>{/* End Service Item */}
//       <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
//         <div className="service-item position-relative">
//           <div className="icon">
//             <i className="bi bi-broadcast" />
//           </div>
//           <a href="#" className="stretched-link">
//             <h3>IT Administration</h3>
//           </a>
//           <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
//         </div>
//       </div>{/* End Service Item */}
//       <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
//         <div className="service-item position-relative">
//           <div className="icon">
//             <i className="bi bi-easel" />
//           </div>
//           <a href="#" className="stretched-link">
//             <h3>React Frontend Developemnt</h3>
//           </a>
//           <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
//         </div>
//       </div>{/* End Service Item */}
//       <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
//         <div className="service-item position-relative">
//           <div className="icon">
//             <i className="bi bi-bounding-box-circles" />
//           </div>
//           <a href="#" className="stretched-link">
//             <h3>Full Stack Web Developemnt </h3>
//           </a>
//           <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
//           <a href="#" className="stretched-link" />
//         </div>
//       </div>{/* End Service Item */}
//       <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
//         <div className="service-item position-relative">
//           <div className="icon">
//             <i className="bi bi-calendar4-week" />
//           </div>
//           <a href="#" className="stretched-link">
//             <h3>Python Bacend Developemnt</h3>
//           </a>
//           <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
//           <a href="#" className="stretched-link" />
//         </div>
//       </div>{/* End Service Item */}
//       <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={600}>
//         <div className="service-item position-relative">
//           <div className="icon">
//             <i className="bi bi-chat-square-text" />
//           </div>
//           <a href="#" className="stretched-link">
//             <h3>Odoo ERP Developemnt </h3>
//           </a>
//           <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
//           <a href="#" className="stretched-link" />
//         </div>
//       </div>{/* End Service Item */}
//     </div>
//   </div>
// </section>{/* /Services Section */}

//    </>
//   )
// }
