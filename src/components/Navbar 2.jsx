import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import image from "../assets/66fd2233bd552b7eb1692084_image1.jpg";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  // const navbarRef = useRef(null);

  useGSAP(() => {
    // gsap
    //     .timeline({
    //         scrollTrigger: {
    //             trigger: "#hero-photo-section",
    //             start: "top top",
    //             end: "bottom top",
    //             scrub: 2,
    //         },
    //     })
    //     .from("#nav-logo", {
    //         width: "100%",
    //         y: "-90%",
    //         duration: 0.4,
    //     });

    // gsap.to("#banner-section2-nav", {
    //   position: "sticky",
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: "#banner-section2-nav",
    //     scroller: "body",
    //     scrub: 2.5,
    //     start: "top 0%",
    //     end: "top 0%",
    //   },
    // });


    // gsap.from("#banner-minimal-goods", {
    //     y: -180,
    //     scale: 10.7,
    //     scrollTrigger: {
    //       trigger: "#banner-minimal-goods",
    //       scroller: "body",
    //       start: "top 55%",
    //       end: "bottom -5%",
    //       scrub: 2,
    //     },
    //   });


  });

  return (
    <div id="main-section">
      <div id="hero-photo-section">
        <img
          src={image}
          alt="img"
          className="object-cover w-full bg-no-repeat bg-center h-screen"
        />
      </div>

      {/* <header id="nav-section"  className="w-full top-0 flex justify-between items-center px-8 py-4 border-b">
                
                <div className="links flex gap-10">
                    {["Articles", "Shop", "Members"].map((item, index) => (
                        <a key={index} className="text-md capitalize font-light">
                            {item}
                        </a>
                    ))}
                </div>

                
                <div id="nav-logo">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 1858.626 221.712"
                    >
                        <path
                            id="Path_2"
                            data-name="Path 2"
                            d="M-763.029-212.176l-27.714,90.294c-4.768,16.986-9.834,36.058-14.3,53.64-4.47-17.284-9.536-35.76-14.6-52.746l-28.012-91.188h-75.394V0h47.978V-62.282c0-33.972-.3-65.858-1.49-102.214,4.172,16.092,8.344,29.8,14.006,47.978L-825.907,0h41.124l36.654-116.518c5.662-18.178,9.834-32.184,14.3-48.276-1.49,36.356-1.788,68.54-1.788,102.512V0h47.978V-212.176Zm91.486,40.826h44.4v-39.336h-44.4ZM-672.735,0h46.488V-153.768h-46.488Zm155.258-157.344c-22.35,0-38.144,11.026-48.276,25.33v-21.754h-45.3V0h46.488V-85.824c0-22.648,14.9-31.886,29.2-31.886,17.284,0,24.734,9.238,24.734,26.224V0h46.488V-100.724C-464.135-138.868-487.081-157.344-517.477-157.344Zm69.434-14.006h44.4v-39.336h-44.4ZM-449.235,0h46.488V-153.768h-46.488Zm246.446-157.344c-21.158,0-37.548,12.218-47.978,27.714-8.344-17.88-25.33-27.714-47.68-27.714-20.264,0-33.972,10.728-43.806,25.33v-21.754h-45.3V0h46.488V-84.93c0-23.542,12.814-32.78,26.82-32.78,16.39,0,22.946,9.238,22.946,25.926V0h46.488V-84.93c0-23.542,12.516-32.78,26.522-32.78,16.39,0,22.946,9.238,22.946,25.926V0h46.488V-99.83C-148.851-136.782-169.711-157.344-202.789-157.344ZM14.155,0C9.983-5.96,7.9-16.986,7.9-28.31v-81.652c0-29.2-20.264-47.382-68.54-47.382-49.468,0-71.222,19.37-73.606,53.342h46.19c1.49-15.794,8.94-20.264,27.118-20.264,18.476,0,23.542,6.258,23.542,15.5,0,9.834-6.854,13.708-19.966,15.2L-81.5-91.486c-44.4,3.874-60.2,21.456-60.2,47.978,0,30.694,23.84,47.084,56.024,47.084,22.648,0,39.336-7.748,49.17-20.86.3,6.854,1.788,13.41,3.874,17.284ZM-71.669-27.714c-14.6,0-22.648-6.854-22.648-17.582s6.556-16.688,22.35-18.476l19.072-2.086c7.152-.894,12.218-2.384,15.5-5.96v11.324C-37.4-36.356-53.789-27.714-71.669-27.714ZM20.413,0H66.9V-212.176H20.413ZM189.677-118.306V-78.97h47.084c-3.576,24.436-24.734,40.23-50.66,40.23-36.356,0-57.812-25.33-57.812-67.348s20.86-67.348,55.428-67.348c26.224,0,43.508,12.516,49.468,32.78h51.554c-6.854-47.084-46.19-76.288-101.32-76.288-67.05,0-107.578,43.508-107.578,110.856S116.071,4.768,177.459,4.768c29.5,0,54.534-11.026,68.838-32.78L252.257,0h35.164V-118.306ZM377.715,3.576c48.872,0,80.46-31.588,80.46-80.46s-31.588-80.46-80.46-80.46c-49.17,0-80.758,31.588-80.758,80.46S328.545,3.576,377.715,3.576Zm0-37.25c-20.86,0-33.674-14.006-33.674-43.21s12.814-43.21,33.674-43.21c20.562,0,33.376,14.006,33.376,43.21S398.277-33.674,377.715-33.674Zm163.6,37.25c48.872,0,80.46-31.588,80.46-80.46s-31.588-80.46-80.46-80.46c-49.17,0-80.758,31.588-80.758,80.46S492.147,3.576,541.317,3.576Zm0-37.25c-20.86,0-33.674-14.006-33.674-43.21s12.814-43.21,33.674-43.21c20.562,0,33.376,14.006,33.376,43.21S561.879-33.674,541.317-33.674Zm194.892-178.5v76.884c-9.834-13.708-24.436-22.052-45-22.052-41.72,0-67.05,31.588-67.05,80.46s25.33,80.46,67.05,80.46c21.456,0,36.356-8.94,46.19-23.542V0h45.3V-212.176Zm-32.184,178.5c-20.562,0-32.78-12.814-32.78-42.018s12.218-44.4,32.78-44.4c20.86,0,33.078,14.006,33.078,43.21S724.885-33.674,704.025-33.674ZM862.263,4.47c46.19,0,73.308-17.88,73.308-49.766,0-27.416-17.582-42.018-53.938-47.68l-22.946-3.278c-14.9-2.384-22.35-6.258-22.35-15.5,0-8.94,6.854-14.6,23.542-14.6s27.714,5.066,28.31,21.754H931.4c-1.49-30.1-19.668-52.746-71.52-52.746-45,0-69.136,17.88-69.136,48.574,0,27.416,19.37,42.018,51.852,47.084l19.966,3.278c20.86,3.278,26.522,7.748,26.522,16.986s-7.152,14.9-25.926,14.9c-19.37,0-27.714-5.662-29.5-22.35h-45.3C791.041-10.728,815.179,4.47,862.263,4.47Z"
                            transform="translate(923.055 216.944)"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>

               
                <div className="links flex gap-10">
                    {["Login", "Sign-up"].map((item, index) => (
                        <a key={index} className="text-md capitalize font-light">
                            {item}
                        </a>
                    ))}
                </div>
            </header> */}

    </div>
  );
}

export default Navbar;
