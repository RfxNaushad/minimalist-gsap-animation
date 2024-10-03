


import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../assets/one.jpg";
import image2 from "../assets/two.webp";
import image3 from "../assets/three.webp";
import image4 from "../assets/four.webp";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Furniture() {
  const titlesRef = useRef([]);
  const sectionsRef = useRef([]);

  useLayoutEffect(() => {
    const sections = sectionsRef.current;
    const titles = titlesRef.current;

    // Set initial opacity of all titles to 0 with GSAP
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
            end: "top 20%",
            scrub: true,
            onEnter: () => {
              // Hide all titles, show the current one
              gsap.to(titles, { opacity: 0 });
              gsap.to(targetTitle, { opacity: 1 });
            },
            onLeave: () => {
              gsap.to(targetTitle, { opacity: 0 });
            },
            onEnterBack: () => {
              gsap.to(titles, { opacity: 0 });
              gsap.to(targetTitle, { opacity: 1 });
            },
            onLeaveBack: () => {
              gsap.to(targetTitle, { opacity: 0 });
            },
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative">
      {/* Sticky text container */}
      <div className="sticky top-0 flex items-center justify-center z-0 h-screen">
        <h2
          ref={(el) => (titlesRef.current[0] = el)}
          className="text-[22vw] absolute bottom-0 text-black"
        >
          Furniture
        </h2>
        <h2
          ref={(el) => (titlesRef.current[1] = el)}
          className="text-[22vw] absolute bottom-0 text-black"
        >
          Chair
        </h2>
        <h2
          ref={(el) => (titlesRef.current[2] = el)}
          className="text-[22vw] absolute bottom-10 text-black"
        >
          Know
        </h2>
      </div>

      {/* Image section */}
      <div>
        {/* First set of images */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
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
      </div>
    </section>
  );
}

export default Furniture;





