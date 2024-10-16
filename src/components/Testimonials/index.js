import Image from "next/image";
import React from "react";
import { Client1, Client2, Client3, Kutip } from "../../../public";

const Testimonials = () => {
  return (
    <section>
      <div className="p-10 mt-20">
        <div className="grid grid-cols-3 gap-3">
          <div className="testimoni text-center border-2">
            <div>
              <div className="flex justify-center items-center text-center">
                <Image src={Client1} className="gambar ml-32 mr-20" />
                <Image src={Kutip} className="gambar" />
              </div>
              <h5>Eka Ardillah</h5>
              <p>
                I Feel very helpful with all the books provided, so i do my job
                easily and happily
              </p>
            </div>
          </div>
          <div className="testimoni text-center border-2">
            <div>
              <div className="flex justify-center items-center text-center">
                <Image src={Client2} className="gambar ml-32 mr-20" />
                <Image src={Kutip} className="gambar" />
              </div>
              <h5>Hamar Hamzah</h5>
              <p>Thanks you, many books to accompany me everyday</p>
            </div>
          </div>
          <div className="testimoni text-center border-2">
            <div>
              <div className="flex justify-center items-center text-center">
                <Image src={Client3} className="gambar ml-32 mr-20" />
                <Image src={Kutip} className="gambar" />
              </div>
              <h5>Khoerunnisa</h5>
              <p>Thanks team, many recomended books for me to read</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
