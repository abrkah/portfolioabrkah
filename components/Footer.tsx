import { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import emailjs from "emailjs-com";

const Footer = () => {
  useEffect(() => {
    emailjs.init("Tb5fop6LusgvWjmnF");
  }, []);

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to elevate your <span className="text-purple">network</span>{" "}
          marketing game?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out today to discuss how I can help you build and scale your
          network.
        </p>
        <a href="mailto:abirha182@gmail.com">
          <MagicButton
            title="Let's connect"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Contact Form */}
      <form className="mx-auto my-10 p-8 rounded-lg shadow-lg bg-gray-800 text-gray-200 w-full md:w-2/3 lg:w-2/3">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Get in touch
        </h1>

        <div className="block mb-6">
          <label htmlFor="frm-email" className="block mb-2 text-white">
            Email
          </label>
          <input
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            className="w-full p-2 border border-gray-600 rounded bg-blue-100 text-black"
          />
        </div>
        <div className="block mb-6">
          <label htmlFor="frm-phone" className="block mb-2 text-white">
            Phone
          </label>
          <input
            id="frm-phone"
            type="text"
            name="phone"
            autoComplete="tel"
            required
            className="w-full p-2 border border-gray-600 rounded bg-blue-100 text-black"
          />
        </div>
        <div className="name flex mb-6">
          <div className="flex-1 mr-2">
            <label htmlFor="frm-first" className="block mb-2 text-white">
              First Name
            </label>
            <input
              id="frm-first"
              type="text"
              name="first"
              autoComplete="given-name"
              required
              className="w-full p-2 border border-gray-600 rounded bg-blue-100 text-black"
            />
          </div>
          <div className="flex-1 ml-2">
            <label htmlFor="frm-last" className="block mb-2 text-white">
              Last Name
            </label>
            <input
              id="frm-last"
              type="text"
              name="last"
              autoComplete="family-name"
              required
              className="w-full p-2 border border-gray-600 rounded bg-blue-100 text-black"
            />
          </div>
        </div>
        <div className="block mb-6">
          <label htmlFor="frm-message" className="block mb-2 text-white">
            Message
          </label>
          <textarea
            id="frm-message"
            rows={6}
            name="message"
            className="w-full p-2 border border-gray-600 rounded bg-blue-100 text-black"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-32 p-3 bg-blue-600 text-lg border border-black rounded-lg hover:bg-gray-700"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Nuru
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="social icon" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
