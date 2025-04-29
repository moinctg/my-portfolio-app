

'use client'
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Testimonials() {
  const swiperRef = useRef(null)
  const testimonials = [
    {
      id: 1,
      name: "Saul Goodman",
      role: "CEO & Founder",
      image: "/assets/img/testimonials/testimonials-1.jpg",
      quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      rating: 5
    },
    {
      id: 2,
      name: "Sara Wilsson",
      role: "Designer",
      image: "/assets/img/testimonials/testimonials-2.jpg",
      quote: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      rating: 5
    },
    {
      id: 3,
      name: "Jena Karlis",
      role: "Store Owner",
      image: "/assets/img/testimonials/testimonials-3.jpg",
      quote: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      rating: 5
    },
    {
      id: 4,
      name: "Matt Brandon",
      role: "Freelancer",
      image: "/assets/img/testimonials/testimonials-4.jpg",
      quote: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      rating: 5
    },
    {
      id: 5,
      name: "John Larson",
      role: "Entrepreneur",
      image: "/assets/img/testimonials/testimonials-5.jpg",
      quote: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      rating: 5
    }
  ]

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    })
  }, [])

  const renderStars = (count) => {
    return Array(count).fill(0).map((_, i) => (
      <i key={i} className="bi bi-star-fill" />
    ))
  }

  return (
    <section id="testimonials" className="testimonials section accent-background">
      <img 
        src="/assets/img/testimonials-bg.jpg" 
        className="testimonials-bg" 
        alt="Testimonials background" 
        loading="lazy"
      />
      
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="section-title">
          <h2>Client Testimonials</h2>
          <p>What people say about my work</p>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            renderBullet: (index, className) => {
              return `<span class="${className}"></span>`;
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div 
                className="testimonial-item"
                onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
                onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
              >
                <div className="testimonial-img-container">
                  <img 
                    src={testimonial.image} 
                    className="testimonial-img" 
                    alt={testimonial.name} 
                    loading="lazy"
                  />
                  <div className="quote-icon">
                    <i className="bi bi-quote" />
                  </div>
                </div>
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.role}</h4>
                <div className="stars">
                  {renderStars(testimonial.rating)}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left" />
                  <span>{testimonial.quote}</span>
                  <i className="bi bi-quote quote-icon-right" />
                </p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>

      <style jsx>{`
        .testimonials {
          position: relative;
          overflow: hidden;
        }
        .testimonials-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.1;
          z-index: -1;
        }
        .testimonial-swiper {
          padding: 20px 0 50px;
        }
        .testimonial-item {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          max-width: 800px;
          margin: 0 auto;
        }
        .testimonial-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }
        .testimonial-img-container {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 20px;
        }
        .testimonial-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        .testimonial-item:hover .testimonial-img {
          border-color: var(--primary-color);
        }
        .quote-icon {
          position: absolute;
          bottom: 0;
          right: 0;
          background: var(--primary-color);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          transform: translateY(5px);
          opacity: 0;
          transition: all 0.3s ease;
        }
        .testimonial-item:hover .quote-icon {
          transform: translateY(0);
          opacity: 1;
        }
        .testimonial-item h3 {
          font-weight: 700;
          margin-bottom: 5px;
          color: var(--secondary-color);
        }
        .testimonial-item h4 {
          font-size: 1rem;
          color: #6c757d;
          margin-bottom: 15px;
        }
        .stars {
          color: #ffc107;
          margin-bottom: 20px;
          font-size: 1.2rem;
        }
        .testimonial-item p {
          font-style: italic;
          margin-bottom: 0;
          position: relative;
        }
        .quote-icon-left, .quote-icon-right {
          color: var(--primary-color);
          opacity: 0.3;
          font-size: 1.5rem;
        }
        .quote-icon-left {
          position: absolute;
          left: 10px;
          top: -10px;
        }
        .quote-icon-right {
          position: absolute;
          right: 10px;
          bottom: -10px;
        }
        .swiper-pagination {
          position: relative;
          margin-top: 30px;
          bottom: 0;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          margin: 0 8px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: var(--primary-color);
          transform: scale(1.3);
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
          .testimonial-item {
            padding: 25px;
          }
          .testimonial-img-container {
            width: 100px;
            height: 100px;
          }
        }
        @media (max-width: 768px) {
          .testimonial-item {
            padding: 20px;
          }
          .testimonial-img-container {
            width: 80px;
            height: 80px;
          }
          .stars {
            font-size: 1rem;
          }
        }
        @media (max-width: 576px) {
          .testimonial-item {
            padding: 15px;
          }
          .quote-icon-left, .quote-icon-right {
            font-size: 1.2rem;
          }
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </section>
  )
}