import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";

const IndexPage = () => {
  return (
    <Layout pageTitle="Sepehr Jalali">
      <Hero
        greeting="hello, world!"
        title="I am a Software Engineer"
        description="I am passionate about problem solving, web development, and enjoy
            making the Internet a more beautiful place."
      />
    </Layout>
  );
};

export default IndexPage;
