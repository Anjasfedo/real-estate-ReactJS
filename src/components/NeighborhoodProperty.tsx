const NeighborhoodProperty = () => {
  return (
    <main className="container mx-auto px-3 lg:pt-24">
      <span className="flex justify-center pb-12">
        <button className="bg-gradient-to-r from-[#8bd3ce] to-[#6ff9f9] rounded-full h-12 w-12 cursor-auto"></button>
      </span>
      <p className="text-[#0c4f37] uppercase md:text-xl text-lg">
        Areas Across The Town
      </p>
      <h1 className="lg:text-4xl text-3xl font-medium capitalize pt-3 pb-12">
        Neighborhood Properties
      </h1>
      <section className="grid md:grid-cols-7 grid-cols-2 md:gap-12 gap-4 pb-12">
        <div className="relative md:col-span-2">
          <img
            src="/assets/img-blank.PNG"
            alt=""
            className="rounded-3xl object-cover md:h-80 h-40 w-full"
          />
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">
              216
            </p>
            <p className="text-white lg:text-xl md:text-base text-sm">
              Bengkulu
            </p>
          </span>
        </div>
        <div className="relative md:col-span-2">
          <img
            src="/assets/img-blank.PNG"
            alt=""
            className="rounded-3xl object-cover md:h-80 h-40 w-full"
          />
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">
              315
            </p>
            <p className="text-white lg:text-xl md:text-base text-sm">
              Bengkulu
            </p>
          </span>
        </div>
        <div className="relative md:col-span-3">
          <img
            src="/assets/img-blank.PNG"
            alt=""
            className="rounded-3xl object-cover md:h-80 h-40 w-full"
          />
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">
              145
            </p>
            <p className="text-white lg:text-xl md:text-base text-sm">
              Bengkulu
            </p>
          </span>
        </div>
        <div className="relative md:col-span-3">
          <img
            src="/assets/img-blank.PNG"
            alt=""
            className="rounded-3xl object-cover md:h-80 h-40 w-full"
          />
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">
              451
            </p>
            <p className="text-white lg:text-xl md:text-base text-sm">
              Bengkulu
            </p>
          </span>
        </div>
        <div className="relative md:col-span-4">
          <img
            src="/assets/img-blank.PNG"
            alt=""
            className="rounded-3xl object-cover md:h-80 h-40 w-full"
          />
          <span className="absolute md:bottom-8 bottom-4 md:left-8 left-4">
            <p className="text-white md:text-5xl text-2xl font-semibold md:pb-3">
              556
            </p>
            <p className="text-white lg:text-xl md:text-base text-sm">
              Bengkulu
            </p>
          </span>
        </div>
      </section>
      <span className="flex justify-center pb-12 w-4/5">
        <button className="bg-gradient-to-r from-[#8bd3ce] to-[#6ff9f9] rounded-full h-24 w-24 cursor-auto"></button>
      </span>
    </main>
  );
};

export default NeighborhoodProperty;
