import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  useGSAP(() => {
    gsap.from(".animeHeading span", {
      y: 200,
      stagger: 0.1,
      duration: 2,
      ease: "power2.inOut",
      opacity: 0,
    });
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
          className="absolute top-1/2 left-1/2 h-[35vw] object-contain -translate-x-2/4 -translate-y-2/4"
          src="https://m.media-amazon.com/images/I/51JFRoM+7HL._AC_UF1000,1000_QL80_.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default Home;
