import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function About() {
  return (
    <div className="p-6 lg:p-12">
      <header className="text-center mb-8">
        <h1 className="text-3xl lg:text-5xl font-bold text-primary">
          About Farm Connect
        </h1>
      </header>
      <section className="max-w-4xl mx-auto space-y-5">
        <p className="text-lg leading-relaxed">
          Welcome to Farm Connect! Our mission is to bridge the gap between
          farmers and agricultural experts to solve the most pressing challenges
          in the farming industry. By connecting farmers with knowledgeable
          experts, we aim to enhance agricultural productivity, promote
          sustainable farming practices, and support the farming community.
        </p>

        <h2 className="text-2xl font-semibold text-primary">Our Vision</h2>
        <p className="text-lg leading-relaxed">
          At Farm Connect, we envision a world where every farmer has access to
          the resources and expertise they need to thrive. Our platform is
          designed to facilitate knowledge sharing, foster innovation, and
          empower farmers to achieve their goals.
        </p>

        <h2 className="text-2xl font-semibold text-primary">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Our mission is to:
          <ul className="list-disc list-inside ml-4">
            <li>Connect farmers with experienced agricultural experts.</li>
            <li>
              Provide a platform for sharing knowledge and best practices.
            </li>
            <li>Promote sustainable and innovative farming methods.</li>
            <li>
              Support the farming community through collaboration and education.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-primary">What We Offer</h2>
        <p className="text-lg leading-relaxed">
          Farm Connect offers a range of features to help farmers and experts
          connect and collaborate:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>
            Expert Directory: Find experienced agricultural experts in your
            area.
          </li>
          <li>
            Knowledge Base: Access a wealth of resources on farming techniques,
            best practices, and innovations.
          </li>
          <li>
            Discussion Forums: Engage with the community, ask questions, and
            share your experiences.
          </li>
          <li>
            Events & Workshops: Stay updated on upcoming events, workshops, and
            training sessions.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary">
          Join Our Community
        </h2>
        <p className="text-lg leading-relaxed">
          Whether you are a farmer seeking advice or an expert looking to share
          your knowledge, Farm Connect is the platform for you. Join our
          community today and contribute to the future of agriculture.
        </p>

        <h2 className="text-2xl font-semibold text-primary">Contact Us</h2>
        <p className="text-lg leading-relaxed">
          Have questions or need support? Get in touch with us at{" "}
          <a
            href="mailto:support@farmconnect.com"
            className="hover:underline"
          >
            support@farmconnect.com
          </a>
          . We are here to help!
        </p>

        <h2 className="text-2xl font-semibold text-primary">Follow Us</h2>
        <p className="text-lg leading-relaxed">
          Stay connected with us on social media:
        </p>
        <ul className="list-none flex space-x-4">
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
          <li>
            <a
              href="https://github.com/nandwa-j/Farm_connect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              GitHub Repository
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
