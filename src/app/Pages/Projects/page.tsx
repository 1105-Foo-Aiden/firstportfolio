"use client";

import NavbarComponent from "@/app/Components/NavbarComponent";

export default function page() {
  return (
    <>
      <div className=" flex justify-center">
        <NavbarComponent />
      </div>
      <div className="bg-white text-white mt-24 h-[500px] w-full bg-opacity-5 rounded-lg">
        <h1 className="text-3xl text-center pt-6">Projects I am proud of</h1>
        <div className="text-center pt-5 grid grid-cols-3">
          <div>Here</div>
          <div>Here</div>
          <div>Here</div>
        </div>
      </div>
    </>
  );
}
