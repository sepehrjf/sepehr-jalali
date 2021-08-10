import * as React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Navbar />
      <Hero />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
