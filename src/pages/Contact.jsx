import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

function Contact() {
  return (
    <div className="my-10">
      <div className="text-center text-2xl">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-14 items-center">
        <div className=" overflow-hidden w-full md:w-5/12">
        <img className="rounded-md shadow hover:scale-110 transition ease-in-out w-full" src={assets.contact_img} alt="" />
        </div>
        <div className="flex flex-col text-gray-500 gap-6">
          <p className="font-semibold text-xl">Location</p>
          <p>
            Karachi <br /> PowerHouse, North Karachi, Pakistan.
          </p>
          <p>Tel: +92 3132959809 <br /> Email: abdulsamadsiddiqui2000@gmail.com</p>
          <p className="font-semibold text-xl">About Me</p>
          <p>Know more about me and my education.</p>
          <a href="https://www.linkedin.com/in/abdul-samad-siddiqui-0183012b5/"className="w-32 text-center border border-black rounded-sm hover:shadow  bg-white hover:bg-black hover:text-white duration-300 transition-all py-3 px-4 tracking-tighter">Hire Me</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
