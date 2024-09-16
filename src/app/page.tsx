import Image from "next/image";
import HeadShot from "./Assets/Headshot.jpg";
import WilliamsAct from "./Assets/WilliamsAct.png";
import Link from "next/link";
import PokeApi from "./Assets/PokeApi.png";
import CourtMonitor from "./Assets/Courtmonitor.png";
import Flowbite from "./Assets/image.png";
import PopoverComponent from "@/PopoverComponent";
import TitleComponent from "@/TitleComponent";

export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />
      <div className="min-h-screen text-center scroll-smooth bg-[#161312] text-white px-24 py-10">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-6xl text-emerald-500 breathingText">
              Aiden Foo
            </h1>
            <br />
            <p className="text-3xl text-red-500">
              Web Developer based in Stockton CA and always wanting to learn
              more
            </p>
          </div>
          <div className="flex justify-end pr-24">
            <Image
              src={HeadShot}
              alt="Headshot"
              className="rounded-md border-2 border-solid border-blue-500"
              width={200}
              height={200}
            />
          </div>
          <a
            href="./Resume.pdf"
            className="decoration-none text-2lg w-fit flex items-center"
            target="blank"
          >
            Find out more on my Resume
          </a>
        </div>
        <br />
        <br />
        <TitleComponent text="Projects" />
        <div className="grid grid-cols-3 py-10 h-fit">
          <div className="grid grid-flow-row h-fit w-fill">
            <Link
              href={"https://www.williamsact.org"}
              target="blank"
              className="flex justify-center"
            >
              <Image
                src={WilliamsAct}
                alt="Williams Act Rebuild"
                className="imageZoom rounded-md"
                height={300}
                width={400}
              />
            </Link>
            <p className="text-3xl font-sans m-5 h-fit">
              Williams Act Rebuild <br />
              <div className="m-4">
                <i className="text-6xl mx-auto devicon-react-original colored" />
              </div>
              Rebuilding government site converting it from Angular to React
            </p>
          </div>
          <div className="grid grid-rows-2 h-fit w-fill">
            <Link
              href={"https://fooa-project9-pokiapi.azurewebsites.net"}
              target="blank"
              className="flex justify-center"
            >
              <Image
                src={PokeApi}
                alt="Pokemon Api"
                className="imageZoom rounded-md"
                height={300}
                width={400}
              />
            </Link>
            <p className="text-3xl m-4 font-sans h-fit w-fit">
              Pokemon Api <br />
              <span className="flex flex-row gap-3 m-3">
                <img
                  className="w-16 mx-auto"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                />
                <img
                  className="w-16 mx-auto"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                />
                <img
                  className="w-16 mx-auto"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                />
              </span>
              calling from a Pokemon API and displaying the data
            </p>
          </div>
          <div className="grid grid-rows-2 h-fit w-fill">
            <Link
              href={"https://zealous-tree-095d4381e.5.azurestaticapps.net"}
              target="blank"
              className="flex justify-center"
            >
              <Image
                src={CourtMonitor}
                alt="Court Monitor"
                className="imageZoom rounded-md"
                height={300}
                width={400}
              />
            </Link>
            <p className="text-3xl font-sans m-5 h-fit">
              Court Monitor <br />
              <img
                className="w-16 my-5 flex justify-center mx-auto"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
              />
              Solo Backend Dev
            </p>
          </div>
        </div>
        <TitleComponent text="Non-Website Projects" />
        <div className="grid grid-cols-3 pt-10 h-fit">
          <div className="flex space-x-2"></div>
        </div>
        <TitleComponent text="Works in progress" />
        <br />
        <br />
        <TitleComponent text="Skills" />
        <div className="grid grid-cols-2 pt-8 gap-12">
          <div className="text-3xl underline">
            Languages
            <div>
              <ul className="flex flex-row gap-6 mt-7 justify-center">
                <PopoverComponent
                  label="Azure SQL"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                  alt="Azure SQL"
                />
                <PopoverComponent
                  label="C"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                  alt="C"
                />
                <PopoverComponent
                  label="C-Sharp"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                  alt="C-sharp"
                />
                <PopoverComponent
                  label="CSS"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  alt="CSS"
                />
                <PopoverComponent
                  label="HTML5"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  alt="HTML5"
                />
                <PopoverComponent
                  label="Java"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                  alt="Java"
                />
                <PopoverComponent
                  label="JavaScript"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                />
                <PopoverComponent
                  label="Python"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  alt="Python"
                />
                <PopoverComponent
                  label="TypeScript"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                />
              </ul>
            </div>
          </div>
          <div className="text-3xl underline">
            Frameworks
            <ul className="flex flex-row gap-6 mt-7 justify-center">
              <PopoverComponent
                label="Dot net"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"
                alt="Dot net"
              />
              <PopoverComponent
                label="Django"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
                alt="Django"
              />
              <PopoverComponent
                label="Next JS"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                alt="Next JS"
              />
              <PopoverComponent
                label="Node JS"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                alt="Node JS"
              />
              <PopoverComponent
                label="Tailwind Css"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind Css"
              />
            </ul>
          </div>
          <div className="text-3xl mt-6 underline">
            Used Technologies
            <ul className="flex flex-row gap-6 mt-7 justify-center">
              <PopoverComponent
                label="Android Studio"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"
                alt="Android Studio"
              />
              <PopoverComponent
                label="Azure"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
                alt="Azure"
              />
              <PopoverComponent
                label="Figma"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                alt="Figma"
              />
              <PopoverComponent
                label="Git"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                alt="Git"
              />
              <PopoverComponent
                label="Github"
                custom={<i className="text-6xl devicon-github-original" />}
              />
              <PopoverComponent
                label="Jira"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg"
                alt="Jira"
              />
              <PopoverComponent
                label="Postman"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                alt="Postman"
              />
              <PopoverComponent
                label="Slack"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg"
                alt="Slack"
              />
              <PopoverComponent
                label="Unity"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
                alt="Unity"
              />
              <PopoverComponent
                label="Vercel"
                custom={<i className="text-6xl devicon-vercel-original" />}
              />
              <PopoverComponent
                label="VSCode"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                alt="VSCode"
              />
            </ul>
          </div>
          <div className="text-3xl mt-6 underline">
            Libraries
            <ul className="flex flex-row gap-6 mt-7 justify-center">
              <PopoverComponent
                label="Bootstrap"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                alt="Bootstrap"
              />
              <PopoverComponent
                label="Flowbite"
                custom={<Image src={Flowbite} alt="flowbite" width={60} height={60} />}
              />
              <PopoverComponent
                label="React Bootstrap"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg"
                alt="React Bootstrap"
              />
              <PopoverComponent
                label="React"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt="React"
              />
              <PopoverComponent
                label="NPM Libraries"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
                alt="npm"
              />
            </ul>
          </div>
        </div>
        <br />
        <br />
        <TitleComponent text="Contact Me" />
        <div className="grid grid-cols-2 pb-24 pt-5">
          <div className="flex justify-center">
            <p className="text-3xl">
              <Link
                href={"https://github.com/1105-Foo-Aiden"}
                target="blank"
                className="decoration-none"
              >
                <i className="devicon-github-original text-9xl" />
              </Link>
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href={"https://www.linkedin.com/in/aiden-foo/"}
              target="blank"
              className="decoration-none"
            >
              <img
                className="h-28"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              />
            </Link>
          </div>
          <div className="text-2xl mt-3">
            <p>Email: aidenfoo154@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
