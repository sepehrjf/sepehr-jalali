import React from "react";
import ButtonYellow from "./buttonYellow";

const ProjectCard = () => {
  return (
    <section className="text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center -mx-2.5 -mb-10 text-left">
          <div className="sm:w-1/4 md:w-2/6 lg:w-2/5 mb-10 border border-solid border-transparent shadow-lg mx-2.5">
            <div className="h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1201x501"
              />
            </div>
            <div className="p-8">
              <h2
                className="font-extralight text-gray-900 mb-3"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "2rem",
                  lineHeight: "1",
                }}
              >
                Taillow
              </h2>
              <p
                className="leading-relaxed text-base font-normal"
                style={{
                  fontFamily: "Mulish, sans-serif",
                }}
              >
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <ButtonYellow name="read more" />
            </div>
          </div>
          <div className="sm:w-1/4 md:w-2/6 lg:w-2/5 mb-10 border border-solid border-transparent shadow-lg mx-2.5">
            <div className="h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1202x502"
              />
            </div>
            <div className="p-7">
              <h2
                className="font-extralight text-gray-900 mb-3"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "2rem",
                  lineHeight: "1",
                }}
              >
                The Catalyzer
              </h2>
              <p
                className="leading-relaxed text-base font-normal"
                style={{
                  fontFamily: "Mulish, sans-serif",
                }}
              >
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony
              </p>
              <ButtonYellow name="read more" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;