const JoinUs = () => {
  return (
    <main className="container mx-auto mt-32 mb-24 px-3">
      <div className="bg-[#0ca39a] rounded-3xl flex items-center lg:flex-row flex-col-reverse lg:pl-16 lg:h-60 relative z-20">
        <img
          src="/assets/img-blank.PNG"
          alt=""
          className="h-[120%] -top-[10%] relative z-20"
        />
        <div className="flex items-center w-full lg:flex-row flex-col lg:pt-0 pt-12">
          <span className="lg:w-2/5 lg:text-left text-center">
            <h1 className="lg:text-4xl text-3xl font-medium py-3 text-white">
              Become an Agent
            </h1>
            <p className="text-white text-sm lg:w-11/12">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              quis molestias commodi similique, corrupti sunt fugiat
            </p>
          </span>
          <button className="bg-white text-[#0ca39a] px-8 py-8 rounded-full lg:mt-0 mt-8">
            Register Now
          </button>
        </div>
        <button className="bg-gradient-to-b from-[#fff] to-[#4abab4] opacity-40 rounded-full h-20 w-20 cursor-auto absolute -top-6 right-10 z-10"></button>
        <button className="bg-gradient-to-r from-[#74cac5] to-[#26ada5] rounded-full h-20 w-20 cursor-auto absolute xl:bottom-10 lg:left-[19rem] left-8 z-10"></button>
      </div>
    </main>
  );
};

export default JoinUs;
