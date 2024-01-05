import { IoArrowBack, IoArrowForward, IoSearch } from "react-icons/io5";
import { FaPlus, FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <main className="container mx-auto px-3 lg:flex justify-between pt-20">
      <div className="lg:w-1/3 flex flex-col">
        <p className="text-[#0c4f37] uppercase md:text-xl text-lg">
          Testimonials
        </p>
        <h1 className="lg:text-4xl text-3xl font-medium capitalize py-3">
          Look What Our Customers Say
        </h1>
        <p className="text-[#a5a5a5] text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
          rerum unde?
        </p>
        <div className="lg:flex hidden gap-x-12 mt-16">
          <button className="w-12 h-12 rounded-full border border-[#0ca39a] flex justify-center items-center text-[#0ca39a] focus:bg[0ca39a] focus:text-white hover:bg-[#0ca39a] hover:text-white">
            <IoArrowBack />
          </button>
          <button className="w-12 h-12 rounded-full border border-[#0ca39a] flex justify-center items-center text-[#0ca39a] focus:bg[0ca39a] focus:text-white hover:bg-[#0ca39a] hover:text-white">
            <IoArrowForward />
          </button>
        </div>
      </div>
      <div className="relative rounded-2xl shadow-2xl lg:w-2/5 lg:p-16 p-6 lg:mt-0 mt-8">
        <FaQuoteLeft className="text-[#ffe999] text-3xl" />
        <p className="font-medium pt-2 pb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae at
          delectus tenetur! Illo reprehenderit veritatis qui aliquid molestiae
          exercitationem quos eum, debitis ipsa, facere voluptatibus unde
          perferendis beatae rerum vitae.
        </p>
        <div className="border-t border-[#d4d4d4] flex items-center py-4">
          <img
            src="/assets/img-blank.PNG"
            alt=""
            className="rounded-full h-12 w-12 object-cover"
          />
          <span className="lg:flex items-center justify-between w-full gap-x-4 font-medium pl-3">
            <p>Anjas</p>
            <div>
              {[
                ...Array(5).map((_, index) => (
                  <button
                    key={index}
                    className="cursor-auto text-[#ffe999] last:text-[#d4d4d4]"
                  >
                    <FaStar />
                  </button>
                )),
              ]}
            </div>
          </span>
        </div>
        <button className="lg:block hidden bg-gradient-to-r from-[#8bd3ce] to-[#6ff9f9]  rounded-full h-16 w-16 cursor-auto -top-6 -left-6"></button>
      </div>
    </main>
  );
};

export default Testimonial;
