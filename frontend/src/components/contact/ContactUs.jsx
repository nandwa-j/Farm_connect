import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  ContactUsInitials,
  contactUsValuesValidation,
} from "../../models/contact";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import config from "../../config";

const contactUsInitialValues = new ContactUsInitials();

function ContactUs() {
  async function handleLogin(values, { setSubmitting, resetForm }) {
    setSubmitting(true);
    try {
      const payload = {
        name: values.name,
        email: values.email,
        message: values.message,
      };

      await axios.post(`${config.apiBaseUrl}/contact-us/create/`, payload);
      toast.success("Message sent successfully!");
      resetForm();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <div className="p-6 lg:p-12 min-h-screen flex items-center justify-center">
      <ToastContainer position="top-right" />
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
          <Formik
            initialValues={contactUsInitialValues}
            validationSchema={contactUsValuesValidation}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="my-4">
                  <p className="block text-lg font-medium">Name</p>
                  <Field
                    name="name"
                    type="text"
                    className="mt-1 block w-full px-4 py-2 border border-primary rounded-md shadow-sm shadow-secondary outline-none focus:ring-primary focus:border-primary"
                    placeholder="Your Name"
                  />
                  <p className="text-red py-1">
                    <ErrorMessage name="name" />
                  </p>
                </div>

                <div className="my-4">
                  <p className="block text-lg font-medium">Email</p>
                  <Field
                    name="email"
                    type="email"
                    className="mt-1 block w-full px-4 py-2 border border-primary rounded-md shadow-sm shadow-secondary outline-none focus:ring-primary focus:border-primary"
                    placeholder="Your Email"
                  />
                  <p className="text-red py-1">
                    <ErrorMessage name="email" />
                  </p>
                </div>

                <div className="my-4">
                  <p className="block text-lg font-medium">Message</p>
                  <Field
                    name="message"
                    as="textarea"
                    rows="4"
                    className="mt-1 block w-full px-4 py-2 border border-primary rounded-md shadow-sm shadow-secondary outline-none focus:ring-primary focus:border-primary"
                    placeholder="Your Message"
                  />
                  <p className="text-red py-1">
                    <ErrorMessage name="message" />
                  </p>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
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
