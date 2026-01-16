import React from "react";
import Image from "next/image";
export default function StackedCardComponent({
  alt,
  src,
  Desc,
  ExtraInfo,
}: any) {
  return (
    <>
      <div className="grid grid-rows-auto h-fit">
        <Image src={src} alt={alt} className="rounded-md" />
        <p className="mt-5 text-3xl text-emerald-600">{alt}</p>
        <p className="mt-5">{Desc}</p>
        <p className={ExtraInfo ?? "hidden"}>
          <span className="text-emerald-600">Extra Info: </span>
          {ExtraInfo}
        </p>
      </div>
    </>
  );
}
