import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../assets/one.jpg";
import image2 from "../assets/two.webp";
import image3 from "../assets/three.webp";
import image4 from "../assets/four.webp";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function OldFurnitureCode() {
  const sectionsRef = useRef([]);
  const titlesRef = useRef([]);
  const bodyRef = useRef(null);
  const imgSectionCardRef = useRef([]);

  const setupAnimations = () => {
    const sections = sectionsRef.current;
    const titles = titlesRef.current;
    const body = bodyRef.current;

    // Set opacity for titles initially
    gsap.set(titles, { opacity: 0 });
    gsap.to(titles[0], { opacity: 1, duration: 0.5 }); // Show first title initially

    sections.forEach((section, index) => {
      const targetTitle = titles[index];

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true,
        onEnter: () => {
          // Hide all titles
          gsap.to(titles, { opacity: 0, duration: 0.5 });
          // Show current title
          gsap.to(targetTitle, { opacity: 1, duration: 0.5 });

          // Change body background and text colors based on section
          if (index === 0) {
            // Section 1 (initial, white background and black text)
            gsap.to(body, { backgroundColor: "#E8E2DA", color: "#2E2A27", duration: 0.5 });
          } else if (index === 1) {
            // Section 2 (dark background and white text)
            gsap.to(body, { backgroundColor: "#2E2A27", color: "#E8E2DA", duration: 0.5 });
          } else if (index === 2) {
            // Section 3 (white background and black text again)
            gsap.to(body, { backgroundColor: "#E8E2DA", color: "#2E2A27", duration: 0.5 });
          }
        },
        onEnterBack: () => {
          // Same as onEnter for reverse scrolling
          gsap.to(titles, { opacity: 0, duration: 0.5 });
          gsap.to(targetTitle, { opacity: 1, duration: 0.5 });

          if (index === 0) {
            gsap.to(body, { backgroundColor: "#E8E2DA", color: "#2E2A27", duration: 0.5 });
          } else if (index === 1) {
            gsap.to(body, { backgroundColor: "#2E2A27", color: "#E8E2DA", duration: 0.5 });
          } else if (index === 2) {
            gsap.to(body, { backgroundColor: "#E8E2DA", color: "#2E2A27", duration: 0.5 });
          }
        },

        
      });
    });

    // Image animation
    imgSectionCardRef.current.forEach((div, idx) => {
        const imgElements = div.querySelectorAll("img");
  
        let imgSectionTl = gsap.timeline({
          scrollTrigger: {
            trigger: div,
            scroller: "body",
            start: `top ${idx === 0 ? "80%" : "70%"}`,
            end: `bottom ${idx === 1 || idx === 3 ? "70%" : "top"}`,
            scrub: 1,
            markers: true,
          },
        });
  
        imgElements.forEach((img, imgIdx) => {
          imgSectionTl.fromTo(
            img,
            { y: 0 }, 
            { y: idx === 1 || idx === 3 ? -100 : -50, duration: 0.5 }, // Slide up
            0 
          );
        });
      });
  
  };

  useLayoutEffect(() => {
    setupAnimations();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={bodyRef} className="relative transition-colors duration-500">
      {/* Sticky text container */}
      <div className="sticky top-0 h-[50vh] flex items-center justify-center pt-48 transition-colors">

        <div className="relative w-full h-full">
          <h2
            ref={(el) => (titlesRef.current[0] = el)}
            className="absolute inset-0 flex text-[15vw] font-bold opacity-0"
          >
            Furniture
          </h2>
          <h2
            ref={(el) => (titlesRef.current[1] = el)}
            className="absolute inset-0 flex text-[15vw] font-bold opacity-0"
          >
            Chair
          </h2>
          <h2
            ref={(el) => (titlesRef.current[2] = el)}
            className="absolute inset-0 flex text-[15vw] font-bold opacity-0"
          >
            Office
          </h2>
        </div>
      </div>

      {/* Scrolling content */}
      <div>
        <div
          ref={(el) => {
            sectionsRef.current[0] = el;
            imgSectionCardRef.current[0] = el;
          }}  
          className="relative flex items-center justify-center py-24"
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
          ref={(el) => {
            sectionsRef.current[1] = el;
            imgSectionCardRef.current[1] = el;
          }} 
          className="relative p-4 flex items-center justify-center py-32"
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
          ref={(el) => {
            sectionsRef.current[2] = el;
            imgSectionCardRef.current[2] = el;
          }} 
          className="relative px-4 py-32 flex items-center justify-center"
        >
            
            
  <img src={image1} className="absolute top-10 left-10 w-32 h-32 object-cover" alt="Image 1" />

  
  <img src={image2} className="absolute top-10 right-10 w-32 h-32 object-cover" alt="Image 2" />


  <img src={image3} className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 object-cover" alt="Image 3" />

  <img src={image4} className="absolute bottom-10 right-10 w-32 h-32 object-cover" alt="Image 4" />





        </div>
      </div>
    </section>
  );
}

export default OldFurnitureCode;



