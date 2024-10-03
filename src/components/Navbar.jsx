import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "../assets/66fd2233bd552b7eb1692084_image1.jpg";
import HeaderText from "./HeaderText";
import LandingPage from "./LandingPage";
import Icon from "./Icon";
import Furniture from "./Furniture";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  useGSAP(() => {
    gsap.from("#banner-minimal-goods", {
      y: -180,
      scale: 10.7,
      scrollTrigger: {
        trigger: "#banner-minimal-goods",
        scroller: "body",
        start: "top 55%",
        end: "bottom -5%",
        scrub: 2,
      },
    });

    gsap.to("#banner-section2-nav", {
      position: "sticky",
      duration: 1,
      scrollTrigger: {
        trigger: "#banner-section2-nav",
        scroller: "body",
        scrub: 2.5,
        start: "top 0%",
        end: "top 0%",
      },
    });
  });

  return (
    <main className="">
      <div id="hero-photo-section">
        <img
          src={image}
          alt="img"
          className="object-cover w-full bg-no-repeat bg-center h-screen"
        />
      </div>
      {/* Nav section */}
      <div id="banner-section2-nav"  className="px-8 w-full top-0 bg-zinc-900 text-white border-b-2 border-cyan-400  z-10">
        <nav className=" w-full  font-medium text-base flex  justify-between py-7" >

        <div className="links flex gap-10">
                    {["Articles", "Shop", "Members"].map((item, index) => (
                        <a key={index} className="text-md capitalize font-light">
                            {item}
                        </a>
                    ))}
                </div>

          <h1 id="banner-minimal-goods" className="font-bold text-xl">
            MinimalGoods
          </h1>

          <div className="links flex gap-10">
                    {["Login", "Sign-up"].map((item, index) => (
                        <a key={index} className="text-md capitalize font-light">
                            {item}
                        </a>
                    ))}
                </div>
        </nav>
      </div>

      {/* Text section */}
      <HeaderText />
      <LandingPage />
      <Icon />
      <Furniture />

      <section className="min-h-screen"></section>
    </main>
  );
}
