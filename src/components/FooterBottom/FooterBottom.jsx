import React from "react";
import { bottomList } from "../../constants";
import { SiReact } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiSwiper } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPassport } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiTwilio } from "react-icons/si";
import { SiHandlebarsdotjs } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiChai } from "react-icons/si";
import { SiMocha } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";

const FooterBottom = () => {
  return (
    <div className=" bg-amazon py-8">
      <div className="max-w-5xl mx-auto  grid grid-cols-4 place-content-center  gap-3 text-gray-400 mb-4">
        {bottomList.map((item, i) => (
          <div
            className="group cursor-pointer px-8 hidden md:inline-block "
            key={i}
          >
            <h3 className="w-24 font-semibold text-[12px] group-hover:underline text-[#DDD] leading-3 mb-[2px]">
              {item.title}
            </h3>
            <p className=" tracking-tight text-[12px] group-hover:underline text-[#999] leading-3">
              <a href={item.link}>{item.description}</a>
            </p>
          </div>
        ))}
      </div>
      <div className="text-white text-xs ">
        <ul className="flex flex-row gap-2 place-content-center ">
          <li>
            <a href="#">Conditions of Use</a> |
          </li>
          <li>
            <a href="#">Privacy Notice</a> |
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col text-white text-sm">
        <p className="m-auto">
          © 1996-2022, Amazon.com, Inc. or its affiliates
        </p>
      </div>
      <div className="max-w-5xl mx-auto  flex flex-col m-auto  text-white text-sm  p-8 ">
        <h4 className="pb-2">
          This demo website was build in 2024 by{" "}
          <a
            href="https://kori.ditmeyer.com"
            className="cursor-pointer underline hover:text-amazon-yellow "
          >
            Kori Ditmeyer
          </a>{" "}
          with these amazing tools:
        </h4>
        <p className="pb-2">
          Frontend GitHub project available{" "}
          <a
            href="https://github.com/koriditmeyer/SPAapp"
            className="cursor-pointer underline hover:text-amazon-yellow "
          >
            here
          </a>
          . Frontend build with:
        </p>
        <div className="flex gap-2 flex-wrap">
          <div className="flex flex-col items-center justify-center">
            <SiReact size={60} />
            <span className="text-center font-thin italic">React</span>
          </div>
          <div className="flex flex-col">
            <SiVite size={60} />
            <span className="text-center font-thin italic">Vite</span>
          </div>
          <div className="flex flex-col">
            <SiJavascript size={60} />
            <span className="text-center font-thin italic">JavaScript</span>
          </div>
          <div className="flex flex-col">
            <SiNodedotjs size={60} />
            <span className="text-center font-thin italic">Node Js</span>
          </div>
          <div className="flex flex-col">
            <SiTailwindcss size={60} />
            <span className="text-center font-thin italic">Tailwind CSS</span>
          </div>
          <div className="flex flex-col">
            <SiReactrouter size={60} />
            <span className="text-center font-thin italic">React Router</span>
          </div>
          <div className="flex flex-col">
            <SiRedux size={60} />
            <span className="text-center font-thin italic">React Redux</span>
          </div>
          <div className="flex flex-col">
            <SiSwiper size={60} />
            <span className="text-center font-thin italic">Swiper</span>
          </div>
          <div className="flex flex-col">
            <SiFramer size={60} />
            <span className="text-center font-thin italic">Framer Motion</span>
          </div>
          <div className="flex flex-col">
            <SiReactquery size={60} />
            <span className="text-center font-thin italic">React Query</span>
          </div>
          <div className="flex flex-col">
            <SiAxios size={60} />
            <span className="text-center font-thin italic">Axios</span>
          </div>
          <div className="flex flex-col">
            <span className=" font-thin italic">And:</span>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="font-thin italic">React Toastify</span>
                <span className="font-thin italic">React loading Skeleton</span>
                <span className="font-thin italic">React Scroll</span>
              </div>
              <div className="flex flex-col">
                <span className="font-thin italic">HeroIcons</span>
                <span className="font-thin italic">React Icons</span>
              </div>
            </div>
          </div>
        </div>
        <p className="py-4">
          Backend GitHub project available{" "}
          <a
            href="https://github.com/koriditmeyer/ecommerceBackendMVC"
            className="cursor-pointer underline hover:text-amazon-yellow "
          >
            here
          </a>
          . Backend Build with:
        </p>
        <div className="flex gap-2 flex-wrap">
          <div className="flex flex-col">
            <SiDocker size={60} />
            <span className="text-center font-thin italic">Docker</span>
          </div>
          <div className="flex flex-col">
            <SiJavascript size={60} />
            <span className="text-center font-thin italic">JavaScript</span>
          </div>
          <div className="flex flex-col">
            <SiNodedotjs size={60} />
            <span className="text-center font-thin italic">Node Js</span>
          </div>
          <div className="flex flex-col">
            <SiExpress size={60} />
            <span className="text-center font-thin italic">Express</span>
          </div>
          <div className="flex flex-col">
            <SiPassport size={60} />
            <span className="text-center font-thin italic">Passport</span>
          </div>
          <div className="flex flex-col">
            <SiMongodb size={60} />
            <span className="text-center font-thin italic">Mongo DB</span>
          </div>
          <div className="flex flex-col">
            <SiMongoose size={60} />
            <span className="text-center font-thin italic">Mongoose</span>
          </div>
          <div className="flex flex-col">
            <SiTwilio size={60} />
            <span className="text-center font-thin italic">Twilio</span>
          </div>
          <div className="flex flex-col">
            <SiHandlebarsdotjs size={60} />
            <span className="text-center font-thin italic">Handlebars</span>
          </div>
          <div className="flex flex-col">
            <SiChai size={60} />
            <span className="text-center font-thin italic">Chai</span>
          </div>
          <div className="flex flex-col">
            <SiMocha size={60} />
            <span className="text-center font-thin italic">Mocha</span>
          </div>
          <div className="flex flex-col">
            <SiSwagger size={60} />
            <span className="text-center font-thin italic">Swagger</span>
          </div>
          <div className="flex flex-col">
            <span className=" font-thin italic">And:</span>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="font-thin italic">Multer</span>
                <span className="font-thin italic">Express Session</span>
                <span className="font-thin italic">Connect Mongo</span>
              </div>
              <div className="flex flex-col">
                <span className="font-thin italic">BCrypt</span>
                <span className="font-thin italic">Passport Github</span>
                <span className="font-thin italic">Mongoose Paginate V2</span>
              </div>
              <div className="flex flex-col">
                <span className="font-thin italic">NodeMailer</span>
                <span className="font-thin italic">Faker</span>
                <span className="font-thin italic">Winston</span>
              </div>
              <div className="flex flex-col">
                <span className="font-thin italic">Artillery</span>
                <span className="font-thin italic">SuperTest</span>
              </div>
            </div>
          </div>
        </div>
        <p className="py-4">Version management with:</p>
        <div className="flex gap-2 flex-wrap">
          <div className="flex flex-col">
            <SiGit size={60} />
            <span className="text-center font-thin italic">JavaScript</span>
          </div>
          <div className="flex flex-col">
            <SiGithub size={60} />
            <span className="text-center font-thin italic">Node Js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
