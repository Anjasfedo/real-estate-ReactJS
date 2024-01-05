const Team = () => {
  return (
    <main className="container max-xl: px-3">
      <p className="text-[#0c4f37] uppercase md:text-xl text-lg text-center">
        Introduce Yourself To
      </p>
      <h1 className="lg:text-4xl text-3xl font-medium capitalize pt-3 pb-12 text-center">
        Our Team of Experts
      </h1>
      <section className="lg:flex items-center lg:grid-cols-none grid grid-cols-2 lg:gap-12 gap-8 justify-center">
        <div className="md:w-1/4">
          <img
            src="/assets/img-blank.PNG"
            alt=""
            className="md:h-80 h-60 w-full rounded-b-3xl rounded-tl-[50%] object-cover bg-[#cbcbc9]"
          />
          <p className="text-center pt-4 md:text-2xl font-semibold">Anjas</p>
          <p className="text-center pt-4 md:text-base text-sm text-[#0c4f37] font-semibold">
            CEO
          </p>
        </div>
        <div className="md:w-1/4">
          <img
            src="/assets/img-blank.PNG"
            alt=""
            className="md:h-80 h-60 w-full rounded-b-3xl rounded-tl-[50%] object-cover bg-[#cbcbc9]"
          />
          <p className="text-center pt-4 md:text-2xl font-semibold">Anjas</p>
          <p className="text-center pt-4 md:text-base text-sm text-[#0c4f37] font-semibold">
            Founder
          </p>
        </div>
        <div className="md:w-1/4">
          <img
            src="/assets/img-blank.PNG"
            alt=""
            className="md:h-80 h-60 w-full rounded-b-3xl rounded-tl-[50%] object-cover bg-[#cbcbc9]"
          />
          <p className="text-center pt-4 md:text-2xl font-semibold">Anjas</p>
          <p className="text-center pt-4 md:text-base text-sm text-[#0c4f37] font-semibold">
            Developer
          </p>
        </div>
        <div className="md:w-1/4">
          <img
            src="/assets/img-blank.PNG"
            alt=""
            className="md:h-80 h-60 w-full rounded-b-3xl rounded-tl-[50%] object-cover bg-[#cbcbc9]"
          />
          <p className="text-center pt-4 md:text-2xl font-semibold">Anjas</p>
          <p className="text-center pt-4 md:text-base text-sm text-[#0c4f37] font-semibold">
            Designer
          </p>
        </div>
      </section>
    </main>
  );
};

export default Team;
