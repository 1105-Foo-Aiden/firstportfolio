import Image from "next/image";
import HeadShot from "./Assets/Headshot.jpg"
import WeatherApp from "./Assets/WeatherApp.png"
import Link from "next/link";
import PokeApi from "./Assets/PokeApi.png"
import CourtMonitor from "./Assets/Courtmonitor.png"
import LinkedIn from "@/app/Assets/linkedin.svg"


export default function Home() {
  return (
    <>

    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    <div className="min-h-screen text-center bg-[#151515] text-[#EEEEEE] p-10">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-4xl">Aiden Foo</h1>
          <br/>
          <p className="text-3xl">Aspiring Web Developer based in Stockton CA and Always wanting to learn more</p>
        </div>
        <div className="flex justify-end pr-24">
          <Image src={HeadShot} alt="Headshot" className="rounded-md" width={200} height={200}></Image>
        </div>
        <a href="./Resume.pdf" className="decoration-none text-2lg" target="blank">Find out more on my Resume</a>
      </div>
      <br />
      <br />
      <p className="text-3xl flex justify-start indent-10">Projects</p>
      <hr className="border-1 border-white " />
      <div className="grid grid-cols-3 pt-10 h-fit">
        <div className="grid grid-rows-2 h-fit w-96 ">
          <Link href={"https://weatherreactbuild-eight.vercel.app"} target="blank" className="flex justify-center">
          <Image src={WeatherApp} alt="Weather App" className="rounded-md" height={300} width={400}/>
          </Link>
          <p className="text-3xl pt-5 h-fit">React Weather App</p>
        </div>
        <div className="grid grid-rows-2 h-fit w-96">
          <Link href={"https://fooa-project9-pokiapi.azurewebsites.net"} target="blank" className="flex justify-center">
            <Image src={PokeApi} alt="Pokemon Api" className="rounded-md" height={300} width={400}/>
          </Link>
          <p className="text-3xl pt-5 h-fit">Pokemon Api</p>
        </div>
        <div className="grid grid-rows-2 h-fit w-96">
          <Link href={"https://fullstack-frontend-git-kylebranch-jeriahs-projects-b6db9779.vercel.app"} target="blank" className="flex justify-center">
            <Image src={CourtMonitor} alt="Court Monitor" className="rounded-md" height={300} width={400}/>
          </Link>
          <p className="text-3xl pt-5 h-fit">Court Monitor</p>
        </div>
      </div>
      <br />
      <br />
      <p className="text-3xl flex justify-start indent-10">Skills</p>
      <hr className="border-1 border-white " />
      <div className="grid grid-cols-2 pt-8">
        <div className="text-2xl">
          Languages:
          <div> 
            <ul className="flex flex-row  gap-4 justify-center mt-5">
              <li>
                <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
              </li>
              <li>
                <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
              </li>
              <li>
                <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
              </li>
              <li>
                <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
              </li>
              <li>
                <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
              </li>
              <li>
                <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              </li>
              <li>
                <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              </li>
              <li>
                <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
              </li>
              <li>
                <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              </li>
              
              <li>
                <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              </li>
          
            </ul>
          </div>
        </div>
        <div className="text-2xl">
          Frameworks:
          <ul className="flex row-span-1 gap-4 justify-center mt-5">
            <li>
              <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" />
            </li>
            <li>
              <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            </li>
            <li>
              <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
            </li>
            <li>
              <img className="w-32 mt-[-30px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
            </li>
            <li>
              <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
            </li>
            <li>
              <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
            </li>
          </ul>
        </div>
        <div className="text-2xl">
        Technologies:
        <ul className="flex row-span-1 gap-4 justify-center mt-5">
          <li>
            <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" />
          </li>
          <li>
            <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" />
          </li>
          <li>
            <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
          </li>
          <li>
            <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
          </li>
          <li>
            <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" />
          </li>
          <li>
            <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" />
          </li>
          <li>
            <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
          </li>
          <li>
            <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"/>
          </li>
          <li>
            <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"/>
          </li>
          <li></li>
        </ul>
        </div>
      </div>
      <br />
      <br />
      <p className="text-3xl flex justify-start indent-10">Contact Me</p>
      <hr className="border-1 border-white" />
      <div className="grid grid-cols-2 pb-24 pt-5">
        <div className="flex justify-center">
          <p className="text-3xl"> 
            <Link href={"https://github.com/1105-Foo-Aiden"} target="blank" className="decoration-none">
              <i className="devicon-github-original text-9xl"/>
          </Link>
          </p>
          </div>
        <div className="flex justify-center">
          <Link href={"https://www.linkedin.com/in/aiden-foo-58ba262bb/"} target="blank" className="decoration-none"> <img className="h-28" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" /></Link>
        </div>
          <div className="text-2xl mt-3">
            <p>
              Eamil: aidenfoo154@gmail.com
            </p> 
          </div>
      </div>
    </div>
    </>
  ); 
}
