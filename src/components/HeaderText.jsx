// // import React from "react";
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import { useGSAP } from "@gsap/react";

// // gsap.registerPlugin(ScrollTrigger);

// // function HeaderText() {


// //   return (
// //     <div
// //       id="header-text-section"
// //       className="py-32 flex flex-col justify-center 
// //         items-center gap-0 leading-none bg-zinc-900 text-white"
// //     >

// //       {["Discover", "the best in", "minimal", "design"].map((item, index) => (
// //         <h2 id="header-text" key={index} className="text-[10vw] font-bold">
// //           {item}
// //         </h2>
// //       ))}

// //     </div>
// //   );
// }

// export default HeaderText;


import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function HeaderText() {
  const { ref } = useGSAP();

  useEffect(() => {
    const sections = gsap.utils.toArray("#header-text");
    
    // Create a timeline for the sequential animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#header-text-section",
        start: "top top",
        end: "+=500", // Adjust as needed
        scrub: true,
        markers: true,
      },
    });


    sections.forEach((section, index) => {
      tl.fromTo(
        section,
        { y: 0, opacity: 1 }, 
        {
          y: 50, 
          opacity: 0, 
          duration: 0.5, 
          delay: index * 0.5, 
          ease: "power1.out",
        },
        0 // Start each text animation at the same time in the timeline
      );
    });
  }, []);

  return (
    <div
      ref={ref}
      id="header-text-section"
      className="py-32 flex flex-col justify-center items-center gap-0 leading-none bg-zinc-900 text-white"
    >
      {["Discover", "the best in", "minimal", "design"].map((item, index) => (
        <h2 id="header-text" key={index} className="text-[10vw] font-bold">
          {item}
        </h2>
      ))}
    </div>
  );
}

export default HeaderText;

