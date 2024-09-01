import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Footer() {
  return (
    <>
      <div className="mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b place-self-center border-gray-300 py-10 ">
          <div>
            <img src={assets.logo} className="w-36" alt="" />
            <p className="text-gray-600 mt-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              itaque repudiandae voluptatum harum eos, nisi eum illo quaerat
              pariatur atque amet error non, iure dolores modi hic ut doloremque
              fuga eaque placeat! Obcaecati voluptatem accusantium minus magnam
              hic, eligendi odio!
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-medium mb-8">COMPANY</h1>
            <div className="flex flex-col gap-2 text-sm text-gray-500 ">
              <p>Home</p>
              <p>About us</p>
              <p>Delivery</p>
              <p>Privacy policy</p>
            </div>
          </div>
          <div >
            <h1 className="text-2xl font-medium uppercase mb-8">Get in touch</h1>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
                <p>+92 3132959809</p>
                <p>abdulsamadsiddiqui2000@gmail.com</p>
                <a target="_blank" href="https://www.instagram.com/abdul_samad_siddiqui_9/">Instagram </a>
                <a target="_blank" href="https://www.linkedin.com/in/abdul-samad-siddiqui-0183012b5/">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-gray-700 text-sm py-4">
            <p className="text-center">Copyright &copy; 2024@ abdulSamadSiddiqui - All Right Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
