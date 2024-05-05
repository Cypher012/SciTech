import { Link } from "react-router-dom";
import img from "../../../images/Picture61.png";

const Jumbotron = () => {
  return (
    <section className="w-full flex justify-center my-lg-14 my-8 py-12 px-3 sm:px-6 md:px-12 lg:px-24 ">
      <div className="relative font-[sans-serif] before:absolute before:w-full rounded-3xl overflow-hidden before:h-full before:inset-0 before:bg-black before:opacity-70 before:z-10">
        <img
          src={img}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[420px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <div>
            <blockquote>
              <p className="text-2xl md:text-3xl lg:text-5xl">
                &apos;&apos;All Children Deserve Education Which Champions Their
                Inborn Curiosity, intelligence & Creativity. &apos;&apos;
              </p>
            </blockquote>

            <cite className="block mt-10 text-right md:text-xl lg:text-4xl">
              -Albert Einstein
            </cite>
          </div>
          <Link
            to={"#contact"}
            className="px-6 uppercase py-3 mt-10 rounded-full text-white text-base tracking-wider font-semibold outline-none bg-transparent hover:bg-gray-50 hover:text-[#333] border-2 border-gray-300 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
