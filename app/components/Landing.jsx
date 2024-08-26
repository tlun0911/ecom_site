import React from "react";
import Image from "next/image";
import backgroundImage from "@/app/assets/ecom_bg.jpg";

const Landing = () => {
  return (
    <div className="h-screen max-w-screen overflow-hidden ">
      <Image
        src={backgroundImage}
        alt="background image"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        className="object-cover object-center w-full h-full -z-10 translate-y-14"
        priority
      />

      <div className="flex flex-col space-y-6 place-content-center items-center h-full w-full">
        <h1 className="text-6xl text-white font-bold pl-6">
          <span className="text-sky-400">shop</span>Ease
        </h1>
        <p className="text-3xl text-white text-center lg:place-self-end lg:pr-32">
          The one stop shop for all your needs
        </p>
      </div>
    </div>
  );
};

export default Landing;
