import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="p-6 lg:p-12 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white border border-primary shadow-md shadow-secondary rounded-lg p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-primary">
            Contact Us
          </h1>
        </header>
        <section className="space-y-6">
          <p className="text-lg leading-relaxed">
            Have questions or need support? Get in touch with us using the form
            below or reach out to us at{" "}
            <a
              href="mailto:support@farmconnect.com"
              className="text-blue-600 hover:underline"
            >
              support@farmconnect.com
            </a>
            . We are here to help!
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-primary rounded-md shadow-sm shadow-secondary outline-none focus:ring-primary focus:border-primary"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-primary rounded-md shadow-sm shadow-secondary outline-none focus:ring-primary focus:border-primary"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">
                Message
              </label>
              <textarea
                className="mt-1 block w-full px-4 py-2 border border-primary rounded-md shadow-sm shadow-secondary outline-none focus:ring-primary focus:border-primary"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
        <section className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Follow Us
          </h2>
          <ul className="list-none flex justify-center space-x-4">
          <li>
            <a
              href="https://github.com/nandwa-j"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nandwa-japheth-44115b289"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/yukihiraj7?t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
            >
              <FaTwitter />
            </a>
          </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
