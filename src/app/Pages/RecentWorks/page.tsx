"use client";

import NavbarComponent from "@/app/Components/NavbarComponent";
import StackedCardComponent from "@/app/Components/StackedCardComponent";
import PortfolioImg from "@/app/Assets/Portfolio.png"
import GodotImg from "@/app/Assets/Godot.png"

export default function Recents() {
  return (
    <>
      <body>
        <div className="flex justify-center">
          <NavbarComponent />
        </div>
        <div className="rounded-lg bg-white mt-24 ml-40 h-fit pb-10 w-10/12 bg-opacity-5">
          <h1 className="text-5xl text-center pt-6 mb-16">Recent Works</h1>
          <div className="text-center px-16 grid grid-cols-3 gap-8">
            <StackedCardComponent
            src = {PortfolioImg}
            alt ={"My portfolio"}
            Desc = {"Since I plan on keeping this portfolio alive, I will constantly be tweeking and changing part of this portfolio to be up to date with my current journey"}
            ExtraInfo = {"This may be a deprecated portfolio, if that is the case I will link the new one here"}
            />
            <StackedCardComponent
            src = {GodotImg}
            alt = {"Godot"}
            Desc = {"I am currently starting to learn Godot, a game engine built with scipts in python and using nodes for both 2d and 3d game development"}
            ExtraInfo = {"Hopefully Godot will help teach me not only game development as a whole, but also about using python to script them, which is good for python skills"}
            />
          </div>
        </div>
      </body>
    </>
  );
}
