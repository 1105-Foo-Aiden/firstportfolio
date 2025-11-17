'use client'
import Image from "next/image";
import HeadShot from "./Assets/Headshot.jpg";
import WilliamsAct from "./Assets/WilliamsAct.png";
import PokeApi from "./Assets/PokeApi.png";
import CourtMonitor from "./Assets/Courtmonitor.png";
import { useRouter } from "next/navigation";
import NavbarComponent from "./Components/NavbarComponent";
import ImageComponent from "./Components/ImageComponent";

export default function Home() {
  const dotnetSvg = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
  const awsSvg = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
  const reactSvg = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
  const azureDBSvg = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
  const router = useRouter();
  const icons = [dotnetSvg, awsSvg, reactSvg, azureDBSvg]
  return (
    <>
      <body>
        <div>
          <div className="flex justify-center">
            <NavbarComponent/>
          </div>
          <div className="mt-24 grid grid-cols-2 w-10/12">
            <div className="grid pl-44 w-full text-center">
              <div>
                <h1 className="text-5xl text-white pt-4">Aiden Foo</h1>
              </div>
              <div>
                <p>
                  Greetings, my name is Aiden Foo, I am a software developer
                  with over 1800 hours of coding experience and always willing to put
                  in the work to learn and grow my skills to be the best version
                  of myself that I can be. I'm so excited to you my work that I have
                  hand crafted with both others and by myself
                </p>
              </div>
              {/* "Get started" button, no idea what it could do? next page? */}
              <div>
                <button onClick={() => router.push("/Pages/Projects")}  className="rounded w-fit py-4 px-16 text-white bg-[#3F8E00] shadow-md shadow-[#62BA1B]">
                  Get started {">"}
                </button>
              </div>
            </div>
            <div className="col-span-1 grid justify-end">
              <Image
                src={HeadShot}
                alt="headshot"
                className="w-64 rounded-full "
                />
            </div>
          </div>
          {/* Worked with */}
          <div className="text-2xl mx-40 mt-20">
            Frameworks Worked With:
            <div className="grid grid-flow-col mx-16 mt-10 grid-rows-1 gap-8 wave-container">
                {icons.map((value) =>(
                  <div className="white-container wave-letter" key={value}>
                    <ImageComponent src={value} alt={value} height={60} width={60}/>
                  </div>
                ))}
              {/* <div className="white-container">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
                  alt="Dotnet"
                  width={60}
                  height={60}
                />
              </div>
              <div className="white-container">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                  alt="AWS"
                  width={60}
                  height={60}
                />
              </div>
              <div className="white-container">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                  alt="React"
                  width={60}
                  height={60}
                />
              </div>
              <div className="white-container">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                  alt="React"
                  width={60}
                  height={60}
                />
              </div> */}
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
