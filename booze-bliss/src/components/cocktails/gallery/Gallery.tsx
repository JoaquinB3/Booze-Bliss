// import { useEffect, useRef } from "react";import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Image from "next/image";
// import styles from "./Gallery.module.css";

// gsap.registerPlugin(ScrollTrigger);

//   const ScrollGallery = () => {
//     const containerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//       const slides = gsap.utils.toArray(".slide") as HTMLElement[];
//       const activeSlideImages = gsap.utils.toArray(".active-slide img") as HTMLImageElement[];

//       function getInitialTranslateZ(slide: HTMLElement): number {
//         const style = window.getComputedStyle(slide);
//         const matrix = style.transform.match(/matrix3d\((.+)\)/);
//         if (matrix) {
//           const values = matrix[1].split(", ");
//           return parseFloat(values[14]) || 0;
//         }
//         return 0;
//       }

//       function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
//         return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
//       }

//       slides.forEach((slide, index) => {
//         const initialZ = getInitialTranslateZ(slide);

//         ScrollTrigger.create({
//           trigger: containerRef.current,
//           start: "top top",
//           end: "bottom bottom",
//           scrub: true,
//           onUpdate: (self) => {
//             const progress = self.progress;
//             const zIncrement = progress * 22500;
//             const currentZ = Number(initialZ) + zIncrement;

//             let opacity;
//             if (currentZ > -2500) {
//               opacity = mapRange(currentZ, 2500, 0, 0.5, 1);
//             } else {
//               opacity = mapRange(currentZ, -5000, -2500, 0, 0.5);
//             }

//             slide.style.opacity = opacity.toString();
//             slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`;

//             if (currentZ < 100) {
//               gsap.to(activeSlideImages[index], {
//                 duration: 1.5,
//                 opacity: 1,
//                 ease: "power3.out",
//               });
//             } else {
//               gsap.to(activeSlideImages[index], {
//                 duration: 1.5,
//                 opacity: 0,
//                 ease: "power3.out",
//               });
//             }
//           },
//         });
//       });

//       return () => {
//         ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       };
//     }, []);

//   return (
//     <>
//       <nav className={styles.nav}>
//         <div className={styles.links1}>
//           <a href="#">Works</a>
//           <a href="#">Archive</a>
//         </div>
//         <div className={styles.logo}>
//           <a href="#">Modavate</a>
//         </div>
//         <div className={styles.links2}>
//           <a href="#">Info</a>
//           <a href="#">Contact</a>
//         </div>
//       </nav>

//       <div className={styles.container} ref={containerRef} style={{ height: "100vh", perspective: "1000px" }}>
//         <div className={styles.slider}>
//           <div className={`${styles.slide} slide`} id="slide-1">
//             <div className={styles.slideCopy}>
//               <p>Neo Elegance</p>
//             </div>
//             <div className={`${styles.slideImg} active-slide`}>
//               <div className={styles.imageWrapper}>
//                 <Image
//                   src="https://media.istockphoto.com/id/1400681592/photo/lemon-garnish-splashing-in-pink-craft-cocktail-coupe-glass.jpg?s=612x612&w=0&k=20&c=uaHi7MrN8dRnsDxiyyHILGwYA2Sn_q1wxvjqv7D-UaU="
//                   alt="Slide 1"
//                   width={800}
//                   height={600}
//                   className="image"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Otras diapositivas aquí */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ScrollGallery;

import React from 'react'
import Image from "next/image";
import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <div>
      <nav className={styles.nav}>
         <div className={styles.links1}>
           <a href="#">Works</a>
           <a href="#">Archive</a>
         </div>
         <div className={styles.logo}>
           <a href="#">Modavate</a>
         </div>
         <div className={styles.links2}>
           <a href="#">Info</a>
           <a href="#">Contact</a>
         </div>
      </nav>

      <div className={styles.container} style={{ height: "100vh", perspective: "1000px" }}>
         <div className={styles.slider}>
           <div className={`${styles.slide} slide`} id="slide-1">
             <div className={styles.slideCopy}>
               <p>Neo Elegance</p>
             </div>
             <div className={`${styles.slideImg} active-slide`}>
               <div className={styles.imageWrapper}>
                 <Image
                  src="https://media.istockphoto.com/id/1400681592/photo/lemon-garnish-splashing-in-pink-craft-cocktail-coupe-glass.jpg?s=612x612&w=0&k=20&c=uaHi7MrN8dRnsDxiyyHILGwYA2Sn_q1wxvjqv7D-UaU="
                  alt="Slide 1"
                  width={800}
                  height={600}
                  className="image"
                />
              </div>
            </div>
          </div>

          {/* Otras diapositivas aquí */}
        </div>
      </div>

    </div>
  )
}









