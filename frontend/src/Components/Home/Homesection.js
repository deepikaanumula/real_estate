import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Homes from "./Homes";
import Locations from "./Locations";
import RecentProperties from "./RecentProperties";
import FeaturedCategories from "./FeaturedCategories";
import ChooseUs from "./ChoooseUs";
import BestProperties from "./BestProperties";
import ExpertiseSection from "./ExpertiseSection ";
import Testimonials from "./Testimonials";
import ArticlesSection from "./ArticlesSection";
import QueryForm from "./QueryForm";
import Footer from "./Footer";
import { Element } from "react-scroll";
import AgentRegister from "./AgentRegister";
import Blogs from "./Blogs";
import Videos from "./Videos";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Faq from "./Faq";

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Element name="navbar">
        <Navbar />
      </Element>
      <Hero />
      <Element name="homes">
        <Homes />
      </Element>
      <Locations />
      <RecentProperties />
      <Element name="services">
      <Services />
      </Element>
      <Element name='faq'>
        <Faq/>
      </Element>
      <FeaturedCategories />
      <Videos />
      <Element name="aboutus">
        <AboutUs />
      </Element>
      <ChooseUs />
      <Element name="properties">
        <BestProperties />
      </Element>
      <ExpertiseSection />
      <Testimonials />
      <Element name="queryform">
        <QueryForm />
      </Element>
      <AgentRegister />
      <Footer />
    </div>
  );
}
