import "../index.css";
import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center justify-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-2xl max-sm:text-base md:text-3xl lg:text-6xl font-medium text-white mb-4">
            Hey, je suis Jordan,&nbsp;
            <br className="hidden lg:inline-block" />
            Développeur-Web
          </h1>
          <p className="text-base max-sm:text-xs max-sm:w-80 md:text-lg lg:text-xl text-gray-400 mb-8 leading-relaxed">
            Passionné de développement web en pleine formation chez
            OpenClassrooms en tant que développeur web. Ma passion pour la
            création de belles interfaces utilisateur et ma curiosité pour les
            technologies modernes m'ont conduit à me spécialiser dans le
            développement frontend.
          </p>
          <div className="flex justify-center max-sm:w-72 ">
            <a
              href="#contact"
              className="inline-flex max-sm:flex justify-center max-sm:w-16 max-sm:text-xs text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Contactez-moi
            </a>
            <a
              href="https://github.com/jodinotnice"
              className="ml-4 inline-flex max-sm:flex justify-center max-sm:w-16 max-sm:text-xs text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jordan-akpovi-50b372109/"
              className="ml-4 inline-flex max-sm:flex justify-center max-sm:w-16 max-sm:text-xs text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              target="_blank"
            >
              Linkedin
            </a>
            <a
              href="https://jordan-akpovi.tiiny.site/"
              className="ml-4 inline-flex max-sm:flex justify-center max-sm:w-16 max-sm:text-xs  text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              target="_blank"
            >
              CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center lg:justify-end">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="images/profil/frog.png"
          />
        </div>
      </div>
    </section>
  );
}
