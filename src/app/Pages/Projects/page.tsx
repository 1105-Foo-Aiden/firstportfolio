"use client";

import NavbarComponent from "@/app/Components/NavbarComponent";
import Image from "next/image";
import CourtMonitor from "../../Assets/Courtmonitor.png"

export default function page() {
  return (
    <body>
      <div className="flex justify-center">
        <NavbarComponent />
      </div>
      <div className="bg-white mt-24 ml-40 h-fit pb-10 w-10/12 bg-opacity-5 rounded-lg">
        <h1 className="text-5xl text-center pt-6 mb-16">Projects I am proud of</h1>
        <div className="text-center pl-5 px-16 grid grid-cols-3">
          <div>
            <div className="grid grid-rows-auto">
              <Image
                alt="Court Monitor Home Page"
                src={CourtMonitor}
                width={800}
                height={800}
                className="rounded-md"
              />
              <p className="text-3xl text-emerald-600 mt-5">Court Monitor</p>
              <p className="mt-5">Court Monitor is an application that allows different sport organizations to set up events and add or remove members with 3 levels of each organization-Admin, Coach, and General users</p>
              <p className="mt-5"><span className="text-emerald-600">Personal contributions: </span> Entire back end framework and code using dotnet and C# and a relational database with a few tweaks</p>
            </div>
          </div>
          <div>Here</div>
          <div>And Here</div>
        </div>
      </div>
    </body>
  );
}
