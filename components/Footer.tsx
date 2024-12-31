import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import emailjs from "emailjs-com";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init("Tb5fop6LusgvWjmnF"); // Replace with your actual user ID
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      email: formData.email,
      phone: formData.phone,
      first_name: formData.firstName,
      last_name: formData.lastName,
      message: formData.message,
    };

    try {
      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams); // Replace with your service and template IDs
      alert("Message sent successfully!");
      setFormData({
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* Existing content such as social media links */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 p-8 rounded-lg shadow-lg bg-gray-800 text-gray-200 w-full md:w-2/3 lg:w-1/2"
      >
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.phone}
            onChange={handleChange}
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
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
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
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded bg-blue-100 text-black"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-32 p-3 bg-blue-600 text-lg border border-black rounded-lg hover:bg-gray-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
