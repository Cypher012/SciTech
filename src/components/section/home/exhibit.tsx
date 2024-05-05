import { Masonry } from "@mui/lab";
import { Image } from "@nextui-org/react";
import img1 from "../../../images/Picture14.png";
import img2 from "../../../images/Picture15.png";
import img3 from "../../../images/Picture23.png";
import img4 from "../../../images/Picture28.png";
import img5 from "../../../images/Picture33.png";
import img6 from "../../../images/Picture35.png";
import img7 from "../../../images/Picture36.png";
import img8 from "../../../images/Picture38.png";
import img9 from "../../../images/Picture40.png";
import img10 from "../../../images/Picture41.png";
import img11 from "../../../images/Picture42.png";
import img12 from "../../../images/Picture43.png";
import img13 from "../../../images/Picture43.png";

const imagesExhibit = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
];

const ExhibitSection = () => {
  return (
    <section className="space-y-10 my-lg-14 my-8 py-16 px-3 sm:px-6 md:px-12 lg:px-20 bg-gray-100">
      <header className="text-center space-y-4">
        <h2 className="text-slate-800 text-5xl lg:text-6xl">Exhibits</h2>
        <p>
          A John SciTEC Sponsored initiative by making the society’s irrelevants
          Relevant through education and awareness.
        </p>
      </header>
      <div className="flex justify-center overflow-hidden">
        <Masonry columns={{ xs: 1, lg: 3 }} spacing={2}>
          {imagesExhibit.map((image, i) => (
            <Image
              key={i}
              isZoomed
              width={400}
              height={400}
              src={image}
              style={{ width: "100%", display: "block" }}
              className=" object-cover"
              alt=""
            />
          ))}
        </Masonry>
      </div>
    </section>
  );
};
/*  */

export default ExhibitSection;
