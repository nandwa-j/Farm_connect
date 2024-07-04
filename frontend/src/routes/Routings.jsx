import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import ContactUsPage from "../pages/contact/ContactUsPage";
import ServicesPage from "../pages/services/ServicesPage";

const Routings = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/services" element={<ServicesPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact-us" element={<ContactUsPage />} />
      </Route>
      <Route element={<PrivateRoutes />}></Route>
    </Routes>
  );
};

export default Routings;
