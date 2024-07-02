import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  var tl = gsap.timeline();
  useGSAP(() => {
    gsap.set(".imgAnime:nth-child(2)", {
      opacity: 0
    });
    gsap.set(".imgAnime:nth-child(3)", {
      opacity: 0
    });
    gsap.from(".animeHeading span", {
      y: 200,
      stagger: 0.1,
      duration: 2,
      ease: "power2.inOut",
      opacity: 0,
    });
    tl.from(".imgAnime", {
      y: 200,
      duration: 2,
      ease: "power2.inOut",
    });
    tl.set(".imgAnime:nth-child(2)", {
      opacity: 100
    });
    tl.set(".imgAnime:nth-child(3)", {
      opacity: 100
    });
    tl.to(".imgAnime:nth-child(2)", {
      rotate: 30,
      duration: 2,
      ease: "power2.inOut",
      transformOrigin: "bottom center",
    }, "h");
    tl.to(".imgAnime:nth-child(3)", {
      rotate: -30,
      duration: 2,
      ease: "power2.inOut",
      transformOrigin: "bottom center",
    }, "h");
  });
  return (
    <>
      <div className="h-52 w-52 rounded-full blur-[140px] absolute bg-blue-900"></div>
      <div className="h-52 w-52 rounded-full blur-[140px] absolute right-0 bottom-0 bg-yellow-900"></div>
      <div className="h-[92vh] overflow-hidden w-full relative">
        <h1 className="animeHeading font-bold flex tracking-[5vw] text-[20vw] absolute top-1/2 left-[52%] -translate-x-2/4 -translate-y-2/4">
          <span className="inline-block kajiro">R</span>
          <span className="inline-block kajiro">E</span>
          <span className="inline-block kajiro">D</span>
          <span className="inline-block kajiro">B</span>
          <span className="inline-block kajiro">U</span>
          <span className="inline-block kajiro">L</span>
          <span className="inline-block kajiro">L</span>
        </h1>
        <img
          className="imgAnime absolute top-1/2 left-1/2 h-[25vw] object-contain -translate-x-2/4 -translate-y-2/4"
          src="https://www.bigbasket.com/media/uploads/p/xxl/40293773_1-red-bull-energy-drink-the-summer-edition-apricot-strawberry-flavour.jpg"
          alt=""
        />
        <img
          className="imgAnime absolute top-1/2 left-1/2 h-[25vw] object-contain -translate-x-2/4 -translate-y-2/4"
          src="https://images.ctfassets.net/lcr8qbvxj7mh/2MWT9CIn6rG3YiEwP9O6pu/8c0e2288253b5bdad0744239b597c1ec/AU_RBRE_250_Single_Unit_close_cold_ORIGINAL_LRES__1_.png"
          alt=""
        />
        <img
          className="imgAnime absolute top-[55%] left-1/2 h-[30vw] object-contain -translate-x-2/4 -translate-y-2/4"
          src="https://pngfre.com/wp-content/uploads/Red-Bull-3.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Home;
