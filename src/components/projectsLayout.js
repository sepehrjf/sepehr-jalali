import React from "react";
import Project from "./project";
import ButtonYellow from "./buttonYellow";

const projectsLayout = (props) => {
  return (
    <div className="container px-5 lg:px-10 py-24 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-left">
      <div>
        <Project
          title="YelpCamp"
          description="YelpCamp is a web application like Yelp, but for campgrounds."
          button={
            <ButtonYellow
              name="Read More"
              link="https://github.com/sepehrjf/YelpCamp"
            />
          }
        />
      </div>
      <div>
        <Project
          title="Portfolio Website"
          description="My portfolio website which is coded and designed by me."
          button={
            <ButtonYellow
              name="Read More"
              link="https://github.com/sepehrjf/sepehr-jalali"
            />
          }
        />
      </div>
    </div>
  );
};

export default projectsLayout;
