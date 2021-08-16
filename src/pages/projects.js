import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ProjectsLayout from "../components/projectsLayout";

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects | Sepehr Jalali">
      <Hero
        title="Lifelong Learner"
        description="Every project is crafted with care and servers as a learning experience."
      />
      <ProjectsLayout />
    </Layout>
  );
};

export default ProjectsPage;
