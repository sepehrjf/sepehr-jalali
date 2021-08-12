import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";

const AboutPage = () => {
  return (
    <Layout pageTitle="About | Sepehr Jalali">
      <Hero
        title="Hi. I am Sepehr."
        description="I am a Computer Science master's at USC in Los Angeles. I love web design, soccer, and football manager."
      />
    </Layout>
  );
};

export default AboutPage;
