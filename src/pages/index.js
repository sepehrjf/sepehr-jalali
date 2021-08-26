import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ButtonYellow from "../components/buttonYellow";

const IndexPage = () => {
  return (
    <Layout pageTitle="Sepehr Jalali">
      <Hero
        greeting="hello, world! 👋🏼"
        title="I am a Software Engineer"
        description="Passionate about problem solving, web development, artificial intelligence, and data. Currently looking for a summer internship."
        button={<ButtonYellow name="See Work" link="/projects" />}
      />
    </Layout>
  );
};

export default IndexPage;
