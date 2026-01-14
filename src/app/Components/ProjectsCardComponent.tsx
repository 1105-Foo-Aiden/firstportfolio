import React from "react";
import Image from "next/image";
export default function ProjectsCardComponent({
  alt,
  src,
  projDesc,
  projContrib,
}: any) {
  return (
    <>
      <div className="grid grid-rows-auto h-fit">
        <Image src={src} alt={alt} className="rounded-md" />
        <p className="mt-5 text-3xl text-emerald-600">{alt}</p>
        <p className="mt-5">{projDesc}</p>
        <p className="mt-5">
          <span className="text-emerald-600">My Contribution: </span>
          {projContrib}
        </p>
      </div>
    </>
  );
}
