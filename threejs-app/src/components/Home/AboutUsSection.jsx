import { useState } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/Images/AboutUs.png";

const AboutUsSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-[#000000] py-20 px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Column — Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full h-full object-cover block rounded-2xl"
          />
        </div>

        {/* Right Column — Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-6 leading-tight bg-gradient-to-br from-white to-blue-300 bg-clip-text text-transparent">
            About Us
          </h2>

          {/* Hoverable text area */}
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Always visible first part */}
            <p className="text-base text-white leading-relaxed max-w-lg">
              At Ladder7 Next Step Solutions, we specialize in providing cutting-edge
              technology solutions to tackle complex industry challenges. Our dedicated
              R&D team continuously identifies business challenges and develops
            </p>

            {/* Expandable part — no reserved space when hidden */}
            <div
              style={{
                maxHeight: hovered ? "400px" : "0px",
                opacity: hovered ? 1 : 0,
                overflow: "hidden",
                transition: "max-height 0.5s ease, opacity 0.4s ease",
              }}
            >
              <p className="text-base text-white leading-relaxed max-w-lg">
                innovative solution prototypes, focusing on technology, services, products,
                and environmental sustainability. With a team of seasoned professionals,
                we offer a range of services, including dynamic website creation, digital
                transformation, mobile app development, and comprehensive digital marketing
                solutions. Our digital marketing expertise spans SEO, social media marketing,
                content creation, and more, helping businesses establish a strong online
                presence and drive growth.
              </p>
            </div>
          </div>

          {/* Know More — sits right below, moves down when text expands */}
          <Link
            to="#about"
            className="inline-flex items-center gap-2 w-fit mt-6 px-6 py-3 rounded-full border border-blue-400 text-white text-sm font-semibold hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
          >
            Know More
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;
