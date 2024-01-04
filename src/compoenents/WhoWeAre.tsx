import { FaHome } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <main className="container mx-auto lg:flex px-3 mb-12 lg:pt-0 pt-8">
      <div className="lg:w-2/5">
        <p className="text-[#0c4f37] md:text-xl text-lg font-medium">
          WHO ARE WE
        </p>
        <h1 className="lg:text-4xl text-2xl font-medium py-3">
          Assisting individual in locating the appropriate real estate
        </h1>
        <p className="lg:w-4/5 text-[#a5a5a5]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum at a ut
          non quos perspiciatis in omnis praesentium, reprehenderit aspernatur!
          Deleniti distinctio tempore obcaecati quod, facilis eveniet laborum
          exercitationem quam?
        </p>
        <div className="lg:block hidden">
          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <FaHome className="text-4xl text-[#04c37] w-1/3" />
            <span>
              <h1 className="text-[#0c3f37] text-lg font-medium">Lorem</h1>
              <p className="text-[#a5a5a5] w-4/5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur velit perspiciatis impedit dolore fugiat tempora
                officia sapiente dignissimos
              </p>
            </span>
          </div>
          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <FaHome className="text-4xl text-[#04c37] w-1/3" />
            <span>
              <h1 className="text-[#0c3f37] text-lg font-medium">Lorem</h1>
              <p className="text-[#a5a5a5] w-4/5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur velit perspiciatis impedit dolore fugiat tempora
                officia sapiente dignissimos
              </p>
            </span>
          </div>

          <div></div>
        </div>
      </div>
    </main>
  );
};

export default WhoWeAre;
