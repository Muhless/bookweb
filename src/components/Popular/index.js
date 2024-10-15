import Image from "next/image";
import React from "react";
import { Author1, Author2, Author3, Cover1, Cover2, Cover3, Cover4, StarOff, StarOn } from "../../../public";

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
        {/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image src={Cover2} />
            <h3 className="mt-3">How To Master Your Habbit</h3>
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
            <h4 className="mt-5 mb-5">Felix Y Siauw</h4>
            <div className="flex items-center">
              <Image src={Author1}/>
              <p className="ml-2"><span className="font-semibold">Andre Syak</span> - 5 days ago</p>
            </div>
          </div>
        </div>
        {/* col */}{/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image src={Cover3} />
            <h3 className="mt-3">Bintang</h3>
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
                <Image src={StarOff} />
              </li>
              <li>
                <Image src={StarOff} />
              </li>
            </ul>
            <h4 className="mt-5 mb-5">Tere Liye</h4>
            <div className="flex items-center">
              <Image src={Author2}/>
              <p className="ml-2"><span className="font-semibold">Ade Barkah</span> - 6 month ago</p>
            </div>
          </div>
        </div>
        {/* col */}{/* col */}
        <div className="cover flex justify-center items-center rounded-xl">
          <div className="p-10">
            <Image src={Cover4} />
            <h3 className="mt-3">Start With Why</h3>
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
            <h4 className="mt-5 mb-5">Felix Y Siauw</h4>
            <div className="flex items-center">
              <Image src={Author3}/>
              <p className="ml-2"><span className="font-semibold">John Lucas</span> - 3 month ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
