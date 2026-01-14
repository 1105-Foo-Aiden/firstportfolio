import React from "react";
import Link from "next/link";

export default function NavbarComponent() {
  return (
    <header className="flex sticky justify-center text-xl xl:w-[1500px] opacity-80 bg-[#1b1b1b] rounded-b-md lg:w-[1280px] h-24 md:w-[650px] md:flex-wrap md:h-48 lg:h-28">
      <div className="lg:mr-32 sm:mr-3">
        <ul className="flex row-auto lg:space-x-9 sm:space-x-4 lg:whitespace-nowrap pt-7">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/Pages/Projects"}>Major Projects</Link>
          </li>
          <li>
            <Link href={"/Pages/RecentWorks"}>Recent Works</Link>
          </li>
          <li>
            <Link href={"/Pages/ContactMe"}>Get in touch</Link>
          </li>
        </ul>
      </div>
      <div className="lg:ml-52 pt-7">
        <ul className="flex row-auto space-x-6">
          <ul>
            <Link
              href={"https://www.linkedin.com/in/aiden-foo/"}
              target="blank"
            >
              My Linkedin
            </Link>
          </ul>
          <ul>
            <Link href={"https://github.com/1105-Foo-Aiden"} target="blank">
              My Github
            </Link>
          </ul>
        </ul>
      </div>
    </header>
  );
}
