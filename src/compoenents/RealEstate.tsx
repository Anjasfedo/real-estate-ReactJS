import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdMaximize } from "react-icons/md";

const responsive = {
  module: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 1,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 1,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
};

const RealEstate = () => {
  const CustomDot = ({ onClick, active }) => (
    <li
      className={`text-5xl ${active ? "text-[#0c4f37]" : "text-white"}`}
      onClick={() => onClick()}
    >
      <MdMaximize />
    </li>
  );

  const images = [
    "/assets/img-blank.PNG",
    "/assets/img-blank.PNG",
    "/assets/img-blank.PNG",
    "/assets/img-blank.PNG",
    "/assets/img-blank.PNG",
  ];

  return (
    <main className="mb-12">
      <div className="bg-gradient-to-t from-[#bce6e4] to-[#f8fdfe] rounded-[560px] rounded-t-none">
        <div className="container mx-auto px-3 lg:flex justify-between items-center lg:h-screen">
          <div className="lg:w-2/5">
            <p className="text-[#0c4f37] md:text-xl text-lg font-medium">
              REAL ESTATE
            </p>
            <h1 className="lg:text-6xl text-3xl font-medium pt-3 pb-12">
              Find a perfect home you love!
            </h1>
            <p className="text-[#808080] lg:text-base text-sm pb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              vitae voluptate recusandae unde? Aliquam deleniti natus quod
              voluptatibus? Deleniti omnis esse eaque, repellendus cupiditate
              libero atque inventore pariatur in totam.
            </p>

            <Carousel
            className="z-20"
              swipeable={true}
              draggable={false}
              responsive={responsive}
              showDots
              arrows
              ssr={true}
              infinite
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              customDot={<CustomDot />}
            >
              {images.map((img, index) => (
                  <img key={index} src={img} alt="" className="rounded-2xl" />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RealEstate;
