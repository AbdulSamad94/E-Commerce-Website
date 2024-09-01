import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";

function About() {
  return (
    <>
      <div className="my-10">
        <div className="text-center text-2xl ">
          <Title text1={"About"} text2={"Us"} />
        </div>
        <div className="mt-10 flex-col md:flex-row flex gap-20 justify-center items-center">
          <img
            className=" w-full md:w-5/12 rounded-md shadow ring-1 ring-gray-200"
            src={assets.about_img}
            alt=""
          />
          <div className="flex flex-col gap-8 text-gray-600">
            <p>
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p>
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <p className="font-semibold">Our Mission</p>
            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
        <div className="mt-14 text-center text-2xl">
          <Title text1={"Why"} text2={"Choose us"} />
        </div>
        <div className="flex flex-col md:flex-row mt-8">
          <div className="border border-gray-300 p-16">
            <p className="text-sm font-semibold">Quality Assurance:</p>
            <p className="text-sm text-gray-500 mt-5">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="border border-gray-300 p-16">
            <p className="text-sm font-semibold">Convenience:</p>
            <p className="text-sm text-gray-500 mt-5">
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className="border border-gray-300 p-16">
            <p className="text-sm font-semibold">
              Exceptional Customer Service:
            </p>
            <p className="text-sm text-gray-500 mt-5">
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
