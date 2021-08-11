import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Hero />
    </Layout>
  );
};

export default IndexPage;
