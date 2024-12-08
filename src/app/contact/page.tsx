import Banner from "@/app/imagess/contactImage/desktop-header-24.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font md:px-[150px]">
        <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Get in touch <br />
              today!
            </h1>
            <p className="mb-8 leading-relaxed text-gray-500">
              We know how large objects will act,
              <br />
              but things on a small scale.
            </p>
            <div className="flex flex-col md:flex-row w-full justify-center md:justify-start items-end">
              <div className="relative md:mr-4 w-full md:w-auto">
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold mt-4">
                  Phone: +451 215 215
                </h1>
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold mt-4">
                  Fax: +451 215 215
                </h1>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-col mt-4">
              <button className="bg-slate-600 text-white px-8 py-3 rounded-md">
                Message us!
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={Banner}
              layout="responsive"
            />
          </div>
        </div>
        <div className="text-center">
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            VISIT OUR OFFICE
          </p>
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
            We help small businesses
            <br />
            with big ideas
          </h1>
        </div>
        <div className="text-center mt-14">
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            WE CAN'T WAIT TO MEET YOU
          </p>
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">Let’s Talk</h1>
          <button className="py-3 px-8 bg-[#23A6F0] rounded-md text-white mt-4">
            Try it for free
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
