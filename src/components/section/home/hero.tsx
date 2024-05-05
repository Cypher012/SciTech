// import Swiper core and required modules
import {
  // Pagination,
  A11y,
  Autoplay,
  EffectFade,
  FreeMode,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";

import heroImg1 from "../../../images/banner.png";
import heroImg2 from "../../../images/banner2.png";
import heroImg3 from "../../../images/banner3.png";
import heroImg4 from "../../../images/banner23.png";
import { Link } from "react-router-dom";

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4];

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black/50 h-[38rem] w-full z-[50] text-gray-200 pt-20 lg:pt-0">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative  overflow-hidden rounded-lg order-last  lg:h-full"></div>

              <div className="lg:py-24">
                <h2 className="text-6xl font-bold">
                  Welcome to the <br /> John SciTech!
                </h2>

                <p className="mt-4 text-gray-300 text-base sm:text-[17.5px]">
                  Unleash your curiosity and embark on a journey of discovery at
                  the John SciTech. Dive deep into the fascinating world of
                  science through interactive exhibits, captivating
                  demonstrations, and engaging workshops. We showcase the latest
                  advancements and breakthroughs across various scientific
                  fields, inspiring a passion for exploration and innovation in
                  all ages.
                </p>

                <Link
                  to={"/event"}
                  className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-base  font-bold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Go to Exhibit
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Swiper
        // install Swiper modules
        modules={[
          /* Pagination, */ A11y,
          Autoplay,
          EffectFade,
          FreeMode,
          EffectFade,
        ]}
        effect="fade"
        freeMode
        slidesPerView={1}
        autoplay
        loop
        speed={1000}
        // pagination={{ clickable: true }}
      >
        {heroImages.map((heroImg) => {
          return (
            <SwiperSlide key={heroImg}>
              <img
                className="h-[38rem] w-full object-fill"
                src={heroImg}
                alt="hero-image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
