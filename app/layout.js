'use client'; // Convert to Client Component to handle scripts properly

import { Inter, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import { useEffect } from "react";

// Initialize fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: 'swap',
});

export default function RootLayout({ children }) {
  useEffect(() => {
    // Initialize scripts after component mounts
    const initScripts = () => {
      // Your initialization code here
      if (typeof window !== 'undefined') {
        // Scroll top functionality
        const scrollTop = document.getElementById('scroll-top');
        if (scrollTop) {
          const toggleScrolled = () => {
            scrollTop.classList.toggle('scrolled', window.scrollY > 100);
          };
          window.addEventListener('scroll', toggleScrolled);
          toggleScrolled(); // Initial check
        }
      }
    };

    initScripts();
  }, []);

  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
        {/* Favicons */}
        <link rel="icon" href="/assets/img/favicon.png" alt="Site icon" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" alt="Apple touch icon" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Vendor CSS */}
        <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" />
        <link rel="stylesheet" href="/assets/vendor/aos/aos.css" />
        <link rel="stylesheet" href="/assets/vendor/glightbox/css/glightbox.min.css" />
        <link rel="stylesheet" href="/assets/vendor/swiper/swiper-bundle.min.css" />
        
        {/* Main CSS */}
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>

      <body >
        {children}

        {/* Scroll to top button with proper href */}
        <a 
          href="#top" 
          id="scroll-top" 
          className="scroll-top d-flex align-items-center justify-content-center"
          aria-label="Scroll to top"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
        
        {/* Vendor JS - loaded after interactive */}
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/aos/aos.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/typed.js/typed.umd.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/waypoints/noframework.waypoints.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
        
        {/* Main JS - loaded after interactive */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
      </body>
    </html>
  );
}

