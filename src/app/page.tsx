import Image from "next/image"
import HeadShot from "./Assets/Headshot.jpg"
import WeatherApp from "./Assets/WeatherApp.png"
import Link from "next/link"
import PokeApi from "./Assets/PokeApi.png"
import CourtMonitor from "./Assets/Courtmonitor.png"
import Flowbite from "./Assets/image.png"
import { Popover } from "flowbite-react"


export default function Home()  {
  return (
    <>
    <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    <div className="min-h-screen text-center bg-[#161312] text-white px-24 py-10">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-4xl">Aiden Foo</h1>
          <br/>
          <p className="text-3xl">Web Developer based in Stockton CA and always wanting to learn more</p>
        </div>
        <div className="flex justify-end pr-24">
          <Image src={HeadShot} alt="Headshot" className="rounded-md" width={200} height={200}/>
        </div>
        <a href="./Resume.pdf" className="decoration-none text-2lg w-fit flex items-center" target="blank">Find out more on my Resume</a>
      </div>
      <br />
      <br />
      <p className="text-3xl flex justify-start indent-10">Projects</p>
      <hr className="border-1 border-white" />
      <div className="grid grid-cols-3 pt-10 h-fit">
        <div className="grid grid-flow-row h-fit w-fill">
          <Link href={"https://weatherreactbuild-eight.vercel.app"} target="blank" className="flex justify-center">
          <Image src={WeatherApp} alt="Weather App" className="rounded-md" height={300} width={400}/>
          </Link>
          <pre className="text-3xl pt-5 h-fit">React Weather App {'\n'} 
            <i className="text-6xl mx-auto devicon-react-original colored"/>{'\n'}
            Displaying data in React
          </pre>
        </div>
        <div className="grid grid-rows-2 h-fit w-fill">
          <Link href={"https://fooa-project9-pokiapi.azurewebsites.net"} target="blank" className="flex justify-center">
            <Image src={PokeApi} alt="Pokemon Api" className="rounded-md" height={300} width={400}/>
          </Link>
          <pre className="text-3xl pt-5 h-fit w-fit whitespace-pre-wrap">
            Pokemon Api {'\n'}
            <span className="flex flex-row gap-3">
                <img className="w-16 mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                <img className="w-16 mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <img className="w-16 mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            </span>
            calling from Apis and displaying the data</pre>
        </div>
        <div className="grid grid-rows-2 h-fit w-fill">
          <Link href={"https://zealous-tree-095d4381e.5.azurestaticapps.net"} target="blank" className="flex justify-center">
            <Image src={CourtMonitor} alt="Court Monitor" className="rounded-md" height={300} width={400}/>
          </Link>
          <pre className="text-3xl pt-5 h-fit">Court Monitor {'\n'} 
            <img className="w-16 flex justify-center mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
            Solo Backend Dev
          </pre>
        </div>
      </div>
      <br />
      <br />
      <p className="text-3xl flex justify-start indent-10">Skills</p>
      <hr className="border-1 border-white" />
      <div className="grid grid-cols-2 pt-8 gap-12">
        <div className="text-3xl">
          Languages:
          <div> 
            <ul className="flex flex-row gap-4 mt-5 justify-center">
              <li>
                <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"C Sharp"} trigger="hover">
                  <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                </Popover>
              </li>
              <li>
                <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"C"} trigger="hover">
                  <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
                </Popover>
              </li>
              <li>
                <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Python"} trigger="hover">
                  <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                </Popover>
              </li>
              <li>
                <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Azure SQL"} trigger="hover">
                  <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                </Popover>
              </li>
              <li>
                <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"HTML5"} trigger="hover">
                  <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                </Popover>
              </li>
              <li>
                <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"JavaScript"} trigger="hover">
                  <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                </Popover>
              </li>
              <li>
                <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"TypeScript"} trigger="hover">
                  <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                </Popover>
              </li>
              <li>
                <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"CSS"} trigger="hover">
                  <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                </Popover>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-3xl">
          Frameworks:
          <ul className="flex flex-row gap-4 mt-5 justify-center">
            <li>
              <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Dot net"} trigger="hover">
                <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" />
              </Popover>
            </li>
            <li>
              <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Next JS"} trigger="hover">
                <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
              </Popover>
            </li>
            <li>
              <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Tailwind Css"} trigger="hover">
                <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
              </Popover>
            </li>
            <li>
              <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Node JS"} trigger="hover">
                  <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
              </Popover>
            </li>
            <li>
              <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Django"} trigger="hover">
                  <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" />
              </Popover>
            </li>
          </ul>
        </div>
        <div className="text-3xl">
        Technologies:
        <ul className="flex flex-row gap-4 mt-5 justify-center">
          <li>
            <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Slack"} trigger="hover">
              <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" />
            </Popover>
          </li>
          <li>
            <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Azure"} trigger="hover">
                <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
            </Popover>
          </li>
          <li>
            <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"VSCode"} trigger="hover">
              <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
            </Popover>
          </li>
          <li>
            <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Jira"} trigger="hover">
              <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" />
            </Popover>
          </li>
          <li>
            <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Unity"} trigger="hover">
              <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" />
            </Popover>
          </li>
          <li>
            <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Git"} trigger="hover">
              <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
            </Popover>
          </li>
          <li>
            <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Postman"} trigger="hover">
              <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"/>
            </Popover>
          </li>
          <li>
            <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Vercel"} trigger="hover">
              <i className="text-6xl devicon-vercel-original"></i>
            </Popover>
          </li>
          <li>
            <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Github"} trigger="hover">
              <i className="text-6xl devicon-github-original"></i>
            </Popover>
          </li>
          <li>
            <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Android Studio"} trigger="hover">
              <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" />
            </Popover>
          </li>
          <li>
            <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Figma"} trigger="hover">
              <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
            </Popover>
          </li>
        </ul>
        </div>
        <div className="text-3xl">
          Libraries:
          <ul className="flex flex-row gap-4 mt-5 justify-center">
            <li>
                <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"React Bootstrap"} trigger="hover">
                      <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg"/>
                </Popover>
            </li>
            <li>
              <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"React"} trigger="hover">
                  <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              </Popover>
            </li>
            <li>
              <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Flowbite"} trigger="hover">
                  <Image src={Flowbite} alt="flowbite" width={60} height={60}/>
              </Popover>
            </li>
            <li>
              <Popover arrow={false} className="text-[#EEEEEE] bg-[#332C2B] px-3 text-xl rounded-md" content={"Bootstrap"} trigger="hover">
                  <img className="w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
              </Popover>
            </li>
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
          <Link href={"https://www.linkedin.com/in/aiden-foo-58ba262bb/"} target="blank" className="decoration-none">   <img className="h-28" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" /></Link>
        </div>
          <div className="text-2xl mt-3">
            <p>Email: aidenfoo154@gmail.com</p> 
          </div>
      </div>
    </div>
    </>
  ); 
}
