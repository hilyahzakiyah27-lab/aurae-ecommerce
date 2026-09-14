import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Aurae, where modesty meets modern elegance. We design
            premium Muslim and Muslimah apparel crafted to inspire confidence,
            comfort, and grace in your everyday style. From timeless Abayas and
            Jubbahs to effortless modern Modest Wear, Aurae brings you
            high-quality fabrics and refined craftsmanship for every occasion.
          </p>
          <p>
            At Aurae, we believe that true style honors both modesty and
            individuality. Our collections are thoughtfully designed for the
            modern Muslim and Muslimah who seek sophistication without
            compromising on Islamic values.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Discover Aurae's premium Muslim & Muslimah fashion collection. Shop
            elegant Abayas, Jubbahs, Hijabs, and modern Islamic apparel designed
            for timeless modesty and comfort.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <div>
          <div className="text-xl py-4">
            <Title text1={"WHY"} text2={"CHOOSE US"} />
          </div>
          <div className="flex flex-col md:flex-row text-sm mb-20">
            {/* Quality Assurance */}
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Quality Assurance:</b>
              <p className="text-gray-600">
                Every garment is crafted with meticulously selected fabrics and
                rigorous quality checks to ensure long-lasting durability,
                exceptional comfort, and a flawless finish.
              </p>
            </div>

            {/* Convenience */}
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Convenience:</b>
              <p className="text-gray-600">
                Enjoy a seamless shopping experience with hassle-free browsing,
                secure payment options, and fast nationwide delivery right to
                your doorstep.
              </p>
            </div>

            {/* Exceptional Customer Service */}
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Exceptional Customer Service:</b>
              <p className="text-gray-600">
                We are dedicated to providing you with a seamless experience.
                Our responsive support team is always here to assist you with
                sizing, inquiries, or order updates.
              </p>
            </div>
          </div>
          <NewsletterBox />
        </div>
      </div>
    </div>
  );
};

export default About;
