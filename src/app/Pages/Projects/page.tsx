"use client";

import NavbarComponent from "@/app/Components/NavbarComponent";
import Image from "next/image";
import CourtMonitor from "../../Assets/Courtmonitor.png";
import WilliamsAct from "../../Assets/WilliamsAct.png";
import CalcChall from "../../Assets/CalculatorChallenge.png";

export default function page() {
  return (
    <body>
      <div className="flex justify-center">
        <NavbarComponent />
      </div>
      <div className="bg-white mt-24 ml-40 h-fit pb-10 w-10/12 bg-opacity-5 rounded-lg">
        <h1 className="text-5xl text-center pt-6 mb-16">Projects I am proud of</h1>
        <div className="text-center pl-5 px-16 grid grid-cols-3 gap-8">
            <div className="grid grid-rows-auto">
              <Image
                alt="Court Monitor Home Page"
                src={CourtMonitor}
                width={800}
                height={800}
                className="rounded-md"
              />
              <p className="text-3xl text-emerald-600 mt-5">Court Monitor</p>
              <p className="mt-5">Court Monitor is an application that allows different sport organizations to set up events-it was also my first fullstack project was well, collaborating with 2 other teammates to create and build it.</p>
              <p className="mt-5"><span className="text-emerald-600">Personal contributions: </span> Entire back end framework and code using dotnet and C# and a relational database with a few tweaks</p>
          </div>
          <div className="grid grid-rows-auto">
            <Image
              alt="Williams Act Home Page"
              src={WilliamsAct}
              width={800}
              height={800}
              className="rounded-md"
            />
            <p className="text-3xl text-emerald-600 mt-5">Williams Act</p>
            <p className="mt-5">Williams act is an application redesign and recode from Angular to React with a team in an agile development cycle over a 3 month period.</p>
            <p className="mt-5"><span className="text-emerald-600">Personal contributions:</span>Password encryption and decryption as well as endpoint creation and multiple pages on the frontend.</p>
          </div>
          <div className="grid grid-rows-auto">
            <Image
              alt="Calculator Challenge"
              src={CalcChall}
              height={800}
              width={1000}
              className="rounded-md"
            />
            <p className="mt-5 text-3xl text-emerald-600">Calculator Challenge</p>
            <p className="mt-5">A challenge of recreating a tip calculator in React that includes the calculations and updates for both custom and picked tip percentages.</p>
            <p className="mt-5"><span className="text-emerald-600">Reason:</span>The reason is beacause of the perserverence to finish the challenge after two years of it being on the backburner which I personally am very proud of for not giving up on it.</p>
          </div>
        </div>
      </div>
    </body>
  );
}
