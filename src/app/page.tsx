import Image from "next/image";
import HeadShot from "./Assets/Headshot.jpg"
import WeatherApp from "./Assets/WeatherApp.png"
import Link from "next/link";
import PokeApi from "./Assets/PokeApi.png"
import CourtMonitor from "./Assets/Courtmonitor.png"

export default function Home() {
  return (
    <>
    <div className="min-h-screen text-center dark:bg-[#000435] bg-green-600 text-white pt-5">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-4xl">Aiden Foo</h1>
          <br/>
          <p >Aspiring Web Developer based in Stockton CA and Always wanting to learn more</p>
        </div>
        <div className="flex justify-end pr-24">
          <Image src={HeadShot} alt="Headshot" width={200} height={200}></Image>
        </div>
      </div>
      <br />
      <br />
      <p className="text-3xl flex justify-start indent-10">Projects</p>
      <hr className="border-1 border-white " />
      <div className="grid grid-cols-3 pt-5">
        <div className="grid grid-rows-2">
          <Link href={"https://weatherreactbuild-eight.vercel.app"} target="blank" className="flex justify-center">
          <Image src={WeatherApp} alt="Weather App" height={300} width={400}/>
          </Link>
          <p className="text-3xl pt-5 h-fit">React Weather App</p>
        </div>
        <div className="grid grid-rows-2">
          <Link href={"https://fooa-project9-pokiapi.azurewebsites.net"} target="blank" className="flex justify-center">
            <Image src={PokeApi} alt="Pokemon Api" height={300} width={400}/>
          </Link>
          <p className="text-3xl pt-5 h-fit">Pokemon Api</p>
        </div>
        <div className="grid grid-rows-2">
          <Link href={"https://fullstack-frontend-git-kylebranch-jeriahs-projects-b6db9779.vercel.app"} target="blank" className="flex justify-center">
            <Image src={CourtMonitor} alt="Court Monitor" height={300} width={400}/>
          </Link>
          <p className="text-3xl pt-5 h-fit">Court Monitor Role: Backend API and database Building</p>
        </div>
      </div>
      <br />
      <br />
      <p className="text-3xl flex justify-start indent-10">Skills</p>
      <hr className="border-1 border-white " />
      <div className=" grid grid-cols-2 pt-8">
        <div className="text-2xl">
          Languages:
          <div> 
            <ul className="grid grid-cols-2">
              <li>C#</li>
              <li>Python</li>
              <li>HTML</li>
              <li>JS</li>
              <li>CSS</li>
              <li>TS</li>
              <li>SQL</li>
              <li>TSX</li>
            </ul>
          </div>
        </div>
        <div className="text-2xl">
          Frameworks:
          <ul className="grid grid-cols-2">
            <li>Dotnet 7</li>
            <li>React</li>
            <li>Next JS</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
            <li>Node</li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <p className="text-3xl flex justify-start indent-10">Contact Me</p>
      <hr className="border-1 border-white " />
      <div className="grid grid-cols-2 pb-24 pt-5">
        <div className="flex justify-center">
          <p className="text-3xl"> 
            <Link href={"https://github.com/1105-Foo-Aiden"} target="blank" className="decoration-none">GitHub</Link>
            
          </p>
          </div>
        <div className="flex justify-center">
          <p className="text-3xl"> 
            <Link href={"https://www.linkedin.com/in/aiden-foo-58ba262bb/"} target="blank" className="decoration-none">LinkedIn</Link>
            
          </p>
          </div>

      </div>
    </div>
    </>
  ); 
}
