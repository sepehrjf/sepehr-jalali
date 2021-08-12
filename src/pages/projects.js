import * as React from "react";
import Hero from "../components/hero";
import Layout from "../components/layout";

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects | Sepehr Jalali">
      <Hero
        title="Lifelong Learner"
        description="Every project is crafted with care and servers as a learning experience."
      />
    </Layout>
  );
};

export default ProjectsPage;
