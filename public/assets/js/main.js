// /**
// * Template Name: DevFolio
// * Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
// * Updated: Aug 07 2024 with Bootstrap v5.3.3
// * Author: BootstrapMade.com
// * License: https://bootstrapmade.com/license/
// */

// (function() {
//   "use strict";

//   /**
//    * Apply .scrolled class to the body as the page is scrolled down
//    */
//   function toggleScrolled() {
//     const selectBody = document.querySelector('body');
//     const selectHeader = document.querySelector('#header');
//     if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
//     window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
//   }

//   document.addEventListener('scroll', toggleScrolled);
//   window.addEventListener('load', toggleScrolled);

//   /**
//    * Mobile nav toggle
//    */
//   const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

//   function mobileNavToogle() {
//     document.querySelector('body').classList.toggle('mobile-nav-active');
//     mobileNavToggleBtn.classList.toggle('bi-list');
//     mobileNavToggleBtn.classList.toggle('bi-x');
//   }
//   mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

//   /**
//    * Hide mobile nav on same-page/hash links
//    */
//   document.querySelectorAll('#navmenu a').forEach(navmenu => {
//     navmenu.addEventListener('click', () => {
//       if (document.querySelector('.mobile-nav-active')) {
//         mobileNavToogle();
//       }
//     });

//   });

//   /**
//    * Toggle mobile nav dropdowns
//    */
//   document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
//     navmenu.addEventListener('click', function(e) {
//       e.preventDefault();
//       this.parentNode.classList.toggle('active');
//       this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
//       e.stopImmediatePropagation();
//     });
//   });

//   /**
//    * Preloader
//    */
//   const preloader = document.querySelector('#preloader');
//   if (preloader) {
//     window.addEventListener('load', () => {
//       preloader.remove();
//     });
//   }

//   /**
//    * Scroll top button
//    */
//   let scrollTop = document.querySelector('.scroll-top');

//   function toggleScrollTop() {
//     if (scrollTop) {
//       window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
//     }
//   }
//   scrollTop.addEventListener('click', (e) => {
//     e.preventDefault();
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   });

//   window.addEventListener('load', toggleScrollTop);
//   document.addEventListener('scroll', toggleScrollTop);

//   /**
//    * Animation on scroll function and init
//    */
//   function aosInit() {
//     AOS.init({
//       duration: 600,
//       easing: 'ease-in-out',
//       once: true,
//       mirror: false
//     });
//   }
//   window.addEventListener('load', aosInit);

//   /**
//    * Init typed.js
//    */
//   const selectTyped = document.querySelector('.typed');
//   if (selectTyped) {
//     let typed_strings = selectTyped.getAttribute('data-typed-items');
//     typed_strings = typed_strings.split(',');
//     new Typed('.typed', {
//       strings: typed_strings,
//       loop: true,
//       typeSpeed: 100,
//       backSpeed: 50,
//       backDelay: 2000
//     });
//   }

//   /**
//    * Animate the skills items on reveal
//    */
//   let skillsAnimation = document.querySelectorAll('.skills-animation');
//   skillsAnimation.forEach((item) => {
//     new Waypoint({
//       element: item,
//       offset: '80%',
//       handler: function(direction) {
//         let progress = item.querySelectorAll('.progress .progress-bar');
//         progress.forEach(el => {
//           el.style.width = el.getAttribute('aria-valuenow') + '%';
//         });
//       }
//     });
//   });

//   /**
//    * Initiate Pure Counter
//    */
//   new PureCounter();

//   /**
//    * Initiate glightbox
//    */
//   const glightbox = GLightbox({
//     selector: '.glightbox'
//   });

//   /**
//    * Init isotope layout and filters
//    */
//   document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
//     let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
//     let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
//     let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

//     let initIsotope;
//     imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
//       initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
//         itemSelector: '.isotope-item',
//         layoutMode: layout,
//         filter: filter,
//         sortBy: sort
//       });
//     });

//     isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
//       filters.addEventListener('click', function() {
//         isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
//         this.classList.add('filter-active');
//         initIsotope.arrange({
//           filter: this.getAttribute('data-filter')
//         });
//         if (typeof aosInit === 'function') {
//           aosInit();
//         }
//       }, false);
//     });

//   });

//   /**
//    * Frequently Asked Questions Toggle
//    */
//   document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
//     faqItem.addEventListener('click', () => {
//       faqItem.parentNode.classList.toggle('faq-active');
//     });
//   });

//   /**
//    * Init swiper sliders
//    */
//   function initSwiper() {
//     document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
//       let config = JSON.parse(
//         swiperElement.querySelector(".swiper-config").innerHTML.trim()
//       );

//       if (swiperElement.classList.contains("swiper-tab")) {
//         initSwiperWithCustomPagination(swiperElement, config);
//       } else {
//         new Swiper(swiperElement, config);
//       }
//     });
//   }

//   window.addEventListener("load", initSwiper);

//   /**
//    * Correct scrolling position upon page load for URLs containing hash links.
//    */
//   window.addEventListener('load', function(e) {
//     if (window.location.hash) {
//       if (document.querySelector(window.location.hash)) {
//         setTimeout(() => {
//           let section = document.querySelector(window.location.hash);
//           let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
//           window.scrollTo({
//             top: section.offsetTop - parseInt(scrollMarginTop),
//             behavior: 'smooth'
//           });
//         }, 100);
//       }
//     }
//   });
// // Wait for DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//   // Add null checks for all DOM operations
//   const scrollTop = document.getElementById('scroll-top');
  
//   if (scrollTop) {
//     // Toggle scrolled class
//     const toggleScrolled = () => {
//       if (window.scrollY > 100) {
//         scrollTop.classList.add('scrolled');
//       } else {
//         scrollTop.classList.remove('scrolled');
//       }
//     };
    
//     window.addEventListener('load', toggleScrolled);
//     document.addEventListener('scroll', toggleScrolled);
//   }

//   // Initialize Typed.js with null check
//   const typedElements = document.querySelectorAll('.typed');
//   if (typedElements.length > 0) {
//     typedElements.forEach(element => {
//       if (element.dataset.typedItems) {
//         new Typed(element, {
//           strings: JSON.parse(element.dataset.typedItems),
//           // ... other options
//         });
//       }
//     });
//   }

//   // Other initialization code with proper null checks...
// });



//   /**
//    * Navmenu Scrollspy
//    */
//   let navmenulinks = document.querySelectorAll('.navmenu a');

//   function navmenuScrollspy() {
//     navmenulinks.forEach(navmenulink => {
//       if (!navmenulink.hash) return;
//       let section = document.querySelector(navmenulink.hash);
//       if (!section) return;
//       let position = window.scrollY + 200;
//       if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
//         document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
//         navmenulink.classList.add('active');
//       } else {
//         navmenulink.classList.remove('active');
//       }
//     })
//   }
//   window.addEventListener('load', navmenuScrollspy);
//   document.addEventListener('scroll', navmenuScrollspy);

// })();




/**
 * Template Name: DevFolio
 * Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function() {
  "use strict";

  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    /**
     * Safe element selector with null check
     */
    function safeQuerySelector(selector) {
      const element = document.querySelector(selector);
      if (!element) {
        console.warn(`Element not found: ${selector}`);
      }
      return element;
    }

    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function initScrollEffects() {
      const selectBody = document.body;
      const selectHeader = safeQuerySelector('#header');
      
      if (!selectHeader) return;

      function toggleScrolled() {
        if (!selectHeader.classList.contains('scroll-up-sticky') && 
            !selectHeader.classList.contains('sticky-top') && 
            !selectHeader.classList.contains('fixed-top')) {
          return;
        }
        selectBody.classList.toggle('scrolled', window.scrollY > 100);
      }

      window.addEventListener('scroll', toggleScrolled);
      toggleScrolled(); // Initial check
    }

    /**
     * Mobile nav toggle
     */
    function initMobileNav() {
      const mobileNavToggleBtn = safeQuerySelector('.mobile-nav-toggle');
      if (!mobileNavToggleBtn) return;

      function mobileNavToggle() {
        document.body.classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
      }

      mobileNavToggleBtn.addEventListener('click', mobileNavToggle);

      // Hide mobile nav on same-page/hash links
      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
          if (document.body.classList.contains('mobile-nav-active')) {
            mobileNavToggle();
          }
        });
      });

      // Toggle mobile nav dropdowns
      document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function(e) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling?.classList.toggle('dropdown-active');
        });
      });
    }

    /**
     * Preloader
     */
    function initPreloader() {
      const preloader = safeQuerySelector('#preloader');
      if (preloader) {
        // Preloader will be removed when everything is loaded
        // No need for additional event listener
      }
    }

    /**
     * Scroll top button
     */
    function initScrollTop() {
      const scrollTop = safeQuerySelector('.scroll-top');
      if (!scrollTop) return;

      function toggleScrollTop() {
        scrollTop.classList.toggle('active', window.scrollY > 100);
      }

      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      window.addEventListener('scroll', toggleScrollTop);
      toggleScrollTop(); // Initial check
    }

    /**
     * Initialize AOS (Animation on Scroll)
     */
    function initAOS() {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }
    }

    /**
     * Initialize Typed.js
     */
    function initTyped() {
      const typedElements = document.querySelectorAll('.typed');
      typedElements.forEach(element => {
        const typedStrings = element.getAttribute('data-typed-items');
        if (typedStrings && typeof Typed !== 'undefined') {
          new Typed(element, {
            strings: typedStrings.split(','),
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
          });
        }
      });
    }

    /**
     * Animate the skills items on reveal
     */
    function initSkillsAnimation() {
      if (typeof Waypoint !== 'undefined') {
        document.querySelectorAll('.skills-animation').forEach((item) => {
          new Waypoint({
            element: item,
            offset: '80%',
            handler: function() {
              const progress = item.querySelectorAll('.progress .progress-bar');
              progress.forEach(el => {
                el.style.width = el.getAttribute('aria-valuenow') + '%';
              });
            }
          });
        });
      }
    }

    /**
     * Initialize Pure Counter
     */
    function initPureCounter() {
      if (typeof PureCounter !== 'undefined') {
        new PureCounter();
      }
    }

    /**
     * Initialize GLightbox
     */
    function initGLightbox() {
      if (typeof GLightbox !== 'undefined') {
        GLightbox({
          selector: '.glightbox'
        });
      }
    }

    /**
     * Initialize Isotope layout and filters
     */
    function initIsotope() {
      if (typeof Isotope !== 'undefined' && typeof imagesLoaded !== 'undefined') {
        document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
          const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
          const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
          const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

          imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
            const initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
              itemSelector: '.isotope-item',
              layoutMode: layout,
              filter: filter,
              sortBy: sort
            });

            isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
              filters.addEventListener('click', function() {
                isotopeItem.querySelector('.isotope-filters .filter-active')?.classList.remove('filter-active');
                this.classList.add('filter-active');
                initIsotope.arrange({
                  filter: this.getAttribute('data-filter')
                });
              });
            });
          });
        });
      }
    }

    /**
     * Frequently Asked Questions Toggle
     */
    function initFAQ() {
      document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
        faqItem.addEventListener('click', () => {
          faqItem.parentNode.classList.toggle('faq-active');
        });
      });
    }

    /**
     * Initialize Swiper sliders
     */
    function initSwipers() {
      if (typeof Swiper !== 'undefined') {
        document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
          const configElement = swiperElement.querySelector(".swiper-config");
          if (configElement) {
            try {
              const config = JSON.parse(configElement.innerHTML.trim());
              new Swiper(swiperElement, config);
            } catch (e) {
              console.error('Error parsing Swiper config:', e);
            }
          }
        });
      }
    }

    /**
     * Correct scrolling position for hash links
     */
    function initHashScroll() {
      if (window.location.hash) {
        const section = safeQuerySelector(window.location.hash);
        if (section) {
          setTimeout(() => {
            const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    }

    /**
     * Navmenu Scrollspy
     */
    function initScrollspy() {
      const navmenulinks = document.querySelectorAll('.navmenu a');
      if (navmenulinks.length === 0) return;

      function updateActiveLink() {
        const scrollPosition = window.scrollY + 200;
        
        navmenulinks.forEach(navmenulink => {
          if (!navmenulink.hash) return;
          const section = safeQuerySelector(navmenulink.hash);
          if (!section) return;

          const isActive = scrollPosition >= section.offsetTop && 
                         scrollPosition <= (section.offsetTop + section.offsetHeight);
          
          navmenulink.classList.toggle('active', isActive);
        });
      }

      window.addEventListener('scroll', updateActiveLink);
      updateActiveLink(); // Initial check
    }

    // Initialize all components
    initScrollEffects();
    initMobileNav();
    initPreloader();
    initScrollTop();
    initAOS();
    initTyped();
    initSkillsAnimation();
    initPureCounter();
    initGLightbox();
    initIsotope();
    initFAQ();
    initSwipers();
    initHashScroll();
    initScrollspy();
  });
})();