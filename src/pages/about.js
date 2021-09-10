import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Biography from "../components/biography";
import ButtonYellow from "../components/buttonYellow";

const AboutPage = () => {
  return (
    <Layout pageTitle="About | Sepehr Jalali">
      <Hero
        title="I am Sepehr"
        description="A Computer Science master's student at the University of Southern California. Based in LA."
        button={
          <ButtonYellow
            name="LinkedIn"
            link="https://www.linkedin.com/in/sepehr-jalali/"
          />
        }
      />
      <Biography
        question="Computer Science Background"
        title=""
        description="I also hold a Bachelor of Science degree in CS. I have a strong academic background in CS with proficiency in data structures and algorithms. 
        Currently, I am applying to software engineering positions for summer 2022 internship. Also, I am open to entry-level positions. 
        I have professional, educational, and personal experience with developing websites, web, and Android applications."
      />
      <Biography
        question="Interests & Hobbies"
        title=""
        description="I enjoy making web and mobile applications that have well-designed user interfaces, and high performances. 
        My areas of interest, except mentioned above, are Artificial Intelligence, Machine Learning, and Data Science. 
        In my free time, you can find me doing photography, watching soccer especially Juventus and Calcio, and playing Football Manager."
      />
    </Layout>
  );
};

export default AboutPage;
