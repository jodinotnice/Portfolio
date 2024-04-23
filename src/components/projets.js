import "../index.css";
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projets } from "../data";

export default function Projets() {
  return (
    <section id="projets" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projets
          </h1>
          <p></p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projets.map((projet, index) => (
            <a href={projet.link} key={index} className="sm:w-1/2 w-100 p-4">
              <div className="px-8 py-10 relative z-9 w-full border-4 border-gray-800 bg-gray-900 ">
                <img
                  alt={projet.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={projet.image}
                />
                <div className="px-8 py-10 relative z-9 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {projet.subtitle}
                  </h2>
                  <h1 className="tittle-font text-lg font-medium text-white mb-3">
                    {projet.title}
                  </h1>
                  <p className="leading-relaxed">{projet.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
