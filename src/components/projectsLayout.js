import React from "react";
import Project from "./project";

const projectsLayout = () => {
  return (
    <div className="container px-10 py-24 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-left">
      <div>
        <Project
          title="YelpCamp"
          description="YelpCamp is a web application like Yelp, but for campgrounds."
        />
      </div>
      <div>
        <Project
          title="Portfolio Website"
          description="My portfolio website which is coded and designed by me."
        />
      </div>
    </div>
  );
};

export default projectsLayout;
