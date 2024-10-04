import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import image from "../assets/circle-image.jpg";

gsap.registerPlugin(ScrollTrigger);
function LandingPage() {
  useGSAP(() => {
    let imgL = gsap.timeline({
      scrollTrigger: {
        trigger: "#image-section",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
        markers: true,
      },
    });

    imgL
      .fromTo(
        "#image-section img",
        {
          width: "40rem",
          height: "40rem",
          borderRadius: "50%",
        },
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0%",
          duration: 2,
        }
      )
      .fromTo(
        "body",
        {
          backgroundColor: "#2e2a27",
          color: "#e8e2da",
        },
        {
          backgroundColor: "#e8e2da",
          color: "#2e2a27",
          duration: 2,
        },
        0
      );
});


  return (
    <div className="text-center ">
      <div
        id="image-section"
        className="flex justify-center items-center h-screen mt-10"
      >
        <img src={image} alt="img" className="object-cover rounded-full" />
      </div>
    </div>
  );
}

export default LandingPage;
