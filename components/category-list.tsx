"use client";

import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <>
      {/* COLLECTION SHOWCASE */}
      <div className="max-w-screen-lg mx-auto my-40 flex gap-4 text-neutral-500 relative justify-center">
        <div className="bg-neutral-50 absolute -top-10 -right-10 -bottom-20 w-[500px] -z-10"></div>
        {/* first column */}
        <div className="flex flex-col items-center justify-center gap-4">
          {/* text box */}
          <Link href="/produkter" className="text-center p-6">
            <div>Verk 2021 augusti</div>
            <div className="text-2xl">Promenad i parken</div>
          </Link>
          <Image
            src="/art.svg"
            alt=""
            width={500}
            height={500}
            className="w-60 h-80 object-cover"
          />
        </div>

        {/* second column */}
        {/* first row */}
        <div className="flex flex-col gap-4">
          <div className="flex">
            <Image
              src="/art.svg"
              alt=""
              width={500}
              height={500}
              className="w-[450px] h-72 object-cover"
            />
            {/* text box */}
            <div className="flex flex-col items-center justify-center gap-2 p-6 ml-10">
              <div className="text-2xl">2023</div>
              <div>Alla kollektionerna</div>
              <Link href="/produkter">
                <button className="py-2 px-4 bg-white border">
                  Kolla kollektionen
                </button>
              </Link>
            </div>
          </div>

          {/* second row */}
          <div className="flex gap-4">
            <Image
              src="/art.svg"
              alt=""
              width={500}
              height={500}
              className="w-96 h-60 object-cover"
            />
            <Image
              src="/art.svg"
              alt=""
              width={500}
              height={500}
              className="w-48 h-48 object-cover"
            />
          </div>
        </div>
      </div>

      {/* COLLECTION SHOWCASE */}
      <div className="max-w-screen-md mx-auto">
        <div className="text-center text-neutral-500 mb-10">Kollektioner</div>
        <div className="grid grid-cols-2 gap-10">
          <Link href="/produkter">
            <Image
              src="/art.svg"
              alt=""
              width={500}
              height={500}
              className="w-full h-[500px] object-cover"
            />
          </Link>
          <Link href="/produkter">
            <Image
              src="/art.svg"
              alt=""
              width={500}
              height={500}
              className="w-full h-[500px] object-cover"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
