


// import React, { useRef, useLayoutEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import image1 from "../assets/one.jpg";
// import image2 from "../assets/two.webp";
// import image3 from "../assets/three.webp";
// import image4 from "../assets/four.webp";
// import { useGSAP } from "@gsap/react";

// // Register GSAP ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// function Furniture() {

//   const sectionsRef = React.useRef([]);
//   const titlesRef = React.useRef([]);

//   const setupAnimations = () => {
//     const sections = sectionsRef.current;
//     const titles = titlesRef.current;

//     gsap.set(titles, { opacity: 0 });

//     sections.forEach((section, index) => {
//       const targetTitle = titles[index];

//       gsap.fromTo(
//         targetTitle,
//         { opacity: 0 },
//         {
//           opacity: 1,
//           scrollTrigger: {
//             trigger: section,
//             start: "top center",
//             end: "bottom 20%",
//             scrub: true,
//             markers: true,
//             onEnter: () => {
//               gsap.to(titles, { opacity: 0, duration: 0.5 });
//               gsap.to(targetTitle, { opacity: 1, duration: 0.5 });
//             },
//             onLeave: () => {
//               gsap.to(targetTitle, { opacity: 0, duration: 0.5 });
//             },
//             onEnterBack: () => {
//               gsap.to(titles, { opacity: 0, duration: 0.5 });
//               gsap.to(targetTitle, { opacity: 1, duration: 0.5 });
//             },
//             onLeaveBack: () => {
//               gsap.to(targetTitle, { opacity: 0, duration: 0.5 });
//             },
//           },
//         }
//       );
//     });
//   };

//   React.useEffect(() => {
//     setupAnimations(); 

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../assets/one.jpg";
import image2 from "../assets/two.webp";
import image3 from "../assets/three.webp";
import image4 from "../assets/four.webp";
import { useGSAP } from "@gsap/react";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Furniture() {
  const sectionsRef = useRef([]);
  const titlesRef = useRef([]);

  const setupAnimations = () => {
    const sections = sectionsRef.current;
    const titles = titlesRef.current;

    // Set initial opacity for titles
    gsap.set(titles, { opacity: 0 });

    sections.forEach((section, index) => {
      const targetTitle = titles[index];

      gsap.fromTo(
        targetTitle,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",  
            scrub: true,
            markers: true,
            onEnter: () => {
              gsap.to(titles, { opacity: 0, duration: 0.5 });
              gsap.to(targetTitle, { opacity: 1, duration: 0.5 });
            },
            onLeave: () => {
              gsap.to(targetTitle, { opacity: 0, duration: 0.5 });
            },
            onEnterBack: () => {
              gsap.to(titles, { opacity: 0, duration: 0.5 });
              gsap.to(targetTitle, { opacity: 1, duration: 0.5 });
            },
            onLeaveBack: () => {
              gsap.to(targetTitle, { opacity: 0, duration: 0.5 });
            },
          },
        }
      );
    });
  };

  useLayoutEffect(() => {
    setupAnimations();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative">
      {/* Sticky text container */}

      <div className="sticky top-[-20rem] flex items-center justify-center z-0  h-screen ">
        <h2
          ref={(el) => (titlesRef.current[0] = el)}
          className="text-[22vw] absolute bottom-0 text-black"
        >
          Furniture
        </h2>
        <h2
          ref={(el) => (titlesRef.current[1] = el)}
          className="text-[22vw] absolute bottom-0 opacity-0 text-black"
        >
          Chair
        </h2>
        <h2
          ref={(el) => (titlesRef.current[2] = el)}
          className="text-[22vw] absolute bottom-10 text-black"
        >
          Office
        </h2>
      </div>
      
      <div>
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="relative h-screen flex items-center justify-center"
        >
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <img src={image1} alt="Image 1" className="object-cover" />
            </div>
            <div className="flex flex-col">
              <img src={image2} alt="Image 2" className="object-cover translate-y-10" />
            </div>
            <div className="flex flex-col">
              <img src={image3} alt="Image 3" className="object-cover" />
            </div>
            <div className="flex flex-col">
              <img src={image4} alt="Image 4" className="object-cover translate-y-10" />
            </div>
          </div>
        </div>

        {/* Second set of images */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="relative h-screen p-4 flex items-center justify-center"
        >
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <img src={image1} alt="Image 1" className="object-cover" />
            </div>
            <div className="flex flex-col">
              <img src={image2} alt="Image 2" className="object-cover translate-y-10" />
            </div>
            <div className="flex flex-col">
              <img src={image3} alt="Image 3" className="object-cover" />
            </div>
            <div className="flex flex-col">
              <img src={image4} alt="Image 4" className="object-cover translate-y-10" />
            </div>
          </div>
        </div>

        {/* Third set of images */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="relative h-screen px-4 py-32 flex items-center justify-center"
        >
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <img src={image1} alt="Image 1" className="object-cover" />
            </div>
            <div className="flex flex-col">
              <img src={image2} alt="Image 2" className="object-cover translate-y-10" />
            </div>
            <div className="flex flex-col">
              <img src={image3} alt="Image 3" className="object-cover" />
            </div>
            <div className="flex flex-col">
              <img src={image4} alt="Image 4" className="object-cover translate-y-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Furniture;





