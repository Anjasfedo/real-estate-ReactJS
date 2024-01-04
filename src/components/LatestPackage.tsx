import { FaFire } from "react-icons/fa";
import { PiBed } from "react-icons/pi";
import { LuBath } from "react-icons/lu";
import Carousel from "react-multi-carousel";

const responsive = {
  tv: {
    breakpoint: { max: 4000, min: 1400 },
    items: 3.2,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1024 },
    items: 3,
  },
  mini: {
    breakpoint: { max: 1024, min: 768 },
    items: 2.2,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1.7,
  },
  module: {
    breakpoint: { max: 640, min: 0 },
    items: 0,
  },
};

const LatestPackage = () => {
  return (
    <main className="container mx-auto px-3">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-3/5">
          <h1 className="text-[#6f9789] lg:text-xl uppercase">
            Check out Our New
          </h1>
          <h1 className="lg:text-4xl text-2xl font-medium capitaliz py-3e">
            Latest Listed Properties
          </h1>
          <p className="text-[#808080] lg:text-base text-sm lg:w-3/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex gap-x-4 lg:w-2/5 lg:pt-0 pt-6">
          <button className="text-[#0ca39a] rounded-full border border-[#0ca39a] hover:text-white focus:bg-[0ca39a] focus:text-white px-2">
            All
          </button>
          <button className="text-[#0ca39a] rounded-full border border-[#0ca39a] hover:text-white focus:bg-[0ca39a] focus:text-white px-2">
            Sell
          </button>
          <button className="text-[#0ca39a] rounded-full border border-[#0ca39a] hover:text-white focus:bg-[0ca39a] focus:text-white px-2">
            Rent
          </button>
        </div>
      </div>
      <section className="mt-8">
        <Carousel
          className="z-20"
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
        >
          <div>
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/img-blank.PNG"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 py-2 gap-x-2 items-center text-[#ff1111] bg-[#ffe1e1] rounded-full absolute bottom-10 left-4">
                <FaFire className="" />
                Popular
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">$ 5.99</p>
              <p className="text-lg font-medium">Lorem ipsum dolor</p>
              <p className="text-sm">Bengkulu</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-2">
                  <PiBed className="text-xl" /> 4 Beds
                </span>
                <span className="flex items-center gap-x-2">
                  <LuBath className="text-xl" /> 3 Bath
                </span>
              </div>
            </span>
          </div>
          <div>
            <div className="relative h-80 sm:w-80">
              <img
                src="/assets/img-blank.PNG"
                alt=""
                className="rounded-3xl h-full w-full object-cover"
              />
              <button className="px-6 py-2 gap-x-2 items-center text-[#119bff] bg-[#d7eeff] rounded-full absolute bottom-10 left-4">
                <FaFire className="" />
                New Listing
              </button>
            </div>
            <span className="flex flex-col gap-y-1 py-4">
              <p className="text-2xl font-medium">$ 1.99</p>
              <p className="text-lg font-medium">Lorem ipsum dolor</p>
              <p className="text-sm">Bengkulu</p>
              <div className="flex items-center gap-x-4 text-sm">
                <span className="flex items-center gap-x-2">
                  <PiBed className="text-xl" /> 3 Beds
                </span>
                <span className="flex items-center gap-x-2">
                  <LuBath className="text-xl" /> 2 Bath
                </span>
              </div>
            </span>
          </div>
        </Carousel>
      </section>
    </main>
  );
};

export default LatestPackage;
