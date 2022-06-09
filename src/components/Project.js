import React from "react";
import repairBd from "../assets/repairBd.png";
import furniture from "../assets/furniture.png";
import muscleStone from "../assets/muscleStone.png";

const Project = () => {
  const portfolios = [
    {
      id: 1,
      src: repairBd,
      title: "Repair.BD",
      href: "https://repair-bd.web.app/",
      skill: "Tailwind CSS, Daisy UI, React JS, Firebase Authentication, React Hook Form, React Query, Mongo DB, Express JS, Node JS, Stripe Payment System and JWT Token"

    },
    {
      id: 2,
      src: furniture,
      title: "Ahammed Furniture Warehouse ",
      href: "https://ahammed-furniture-warehouse.web.app/",
      skill: "Bootstrap 5, React Bootstrap, React JS, React Hook Form, Mongo DB, Express JS and Node JS"
    },
    {
      id: 3,
      src: muscleStone,
      title: "Muscle Stone Personal Coach ",
      href: "https://muscle-stone-assignment-10.web.app/",
      skill: "Bootstrap 5, React Bootstrap, React JS, React Router and React Router Hook"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, href, skill }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="mt-4 ml-2">{title}</p>
              <p className="mt-4 ml-2">{skill}</p>

              <div className="flex items-center justify-center">
                <button className="w-1/3 text-yellow-600 px-3 py-3 m-4 duration-200 hover:scale-105">
                  Detail
                </button>

                <button className="w-1/3 text-red-600 px-3 py-3 m-4 duration-200 hover:scale-105">
                  Delete
                </button>

                <button className="w-1/3  text-red-600 px-3 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href} 
                  target="_blank" 
                  rel="noreferrer">
                    Live Site
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
