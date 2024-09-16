import React from "react";

interface IProps {
  text: string;
}

export default function TitleComponent(Props: IProps) {
  return (
    <>
      <p className="text-3xl flex justify-start indent-10">{Props.text}</p>
      <hr className="border-1 h-6 border-white" />
    </>
  );
}
