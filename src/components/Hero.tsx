import HeroImage from "../../public/heroImage.jpg";

const Hero = () => {
  return (
    <div>
      <div className="w-full h-full bg-black/10 absolute"></div>
      <img className="w-full h-screen object-cover relative z-[-100]" src={HeroImage} alt="hero" />
      <h1 className="text-5xl md:text-6xl lg:text-8xl absolute top-[15rem] left-1/2  translate-x-[-50%] translate-y-[-50%] text-white font-bold italic w-full text-center">
        Explore. Discover. Soar.
      </h1>
    </div>
  );
};

export default Hero;
