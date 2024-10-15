import Image from "next/image";
import React from "react";
import { Author1, Cover1, StarOff, StarOn } from "../../../public";

const Popular = () => {
  return (
    <section className="popular">
      <div className="flex justify-between items-center p-10">
        <h2>Popular Now</h2>
        <a href="#">View All</a>
      </div>
      <div className="pl-10 pr-10 grid grid-cols-4 gap-4">
        {/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image src={Cover1} />
            <h3 className="mt-3">Selena</h3>
            <ul className="flex">
              <li>
                <Image src={StarOn} />
              </li>
              <li>
                <Image src={StarOn} />
              </li>
              <li>
                <Image src={StarOn} />
              </li>
              <li>
                <Image src={StarOn} />
              </li>
              <li>
                <Image src={StarOff} />
              </li>
            </ul>
            <h4 className="mt-5 mb-5">Tere Liye</h4>
            <div className="flex items-center">
              <Image src={Author1}/>
              <p className="ml-2"><span className="font-semibold">Andre Syak</span> - 1 week ago</p>
            </div>
          </div>
        </div>
        {/* col */}
      </div>
    </section>
  );
};

export default Popular;
