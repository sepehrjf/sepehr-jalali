import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Biography from "../components/biography";
import ButtonYellow from "../components/buttonYellow";

const AboutPage = () => {
  return (
    <Layout pageTitle="About | Sepehr Jalali">
      <Hero
        title="Hi. I am Sepehr 👋🏼"
        description="A Computer Science master's student at USC, based in Los Angeles. I love web development, soccer, and football manager."
        button={
          <ButtonYellow
            name="LinkedIn"
            link="https://www.linkedin.com/in/sepehr-jalali/"
          />
        }
      />
      <Biography
        question="who is Sepehr?"
        title="A Short Intro"
        description="Kollin is a software engineer, and a former teacher. He is a full time
          student at the University of Tehran."
      />
    </Layout>
  );
};

export default AboutPage;
