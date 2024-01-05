import { IoSearch } from "react-icons/io5";
import { FaHouseUser } from "react-icons/fa";
import { PiBed } from "react-icons/pi";

const OurServices = () => {
  return (
    <main className="bg-[#f2f2f2] mt-20 lg:py-20">
      <div className="container mx-auto px-3 text-center">
        <p className="uppercase text-xl py-8">Our Services</p>
        <p className="lg:text-4xl text-2xl font-medium">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <div className="flex lg:flex-row flex-col gap-x-16 gap-y-8 py-20">
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
            <button className="bg-[#0c4f37] text-white rounded-full w-20 h-20 shadow-2xl">
              <IoSearch className="w-1/2 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">Buy a New Home</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              molestias, magnam inventore labore soluta
            </p>
          </div>
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
            <button className="bg-[#0ca39a] text-white rounded-full w-20 h-20 shadow-2xl">
              <FaHouseUser className="w-1/2 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">Sell a House</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              molestias, magnam inventore labore soluta
            </p>
          </div>
          <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
            <button className="bg-[#0c4f37] text-white rounded-full w-20 h-20 shadow-2xl">
              <PiBed className="w-1/2 h-1/2 m-auto" />
            </button>
            <p className="text-lg font-medium py-4">Rent a House</p>
            <p className="w-2/3 mx-auto text-[#a5a5a5]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              molestias, magnam inventore labore soluta
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurServices;
