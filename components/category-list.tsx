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

      {/* CONTACT FORM */}
      <div className="my-20 py-20 bg-neutral-50 flex flex-col items-center text-neutral-500 gap-6">
        <div>Kontakta mig</div>

        <div className="flex items-end">
          <label className="pr-2">Mitt namn är </label>
          <input
            type="text"
            className="border-b border-neutral-800 bg-transparent"
          />
          .
        </div>

        <div className="flex items-end">
          <label className="pr-2">Jag nås via mailaddressen </label>
          <input
            type="text"
            className="border-b border-neutral-800 bg-transparent"
          />
          .
        </div>

        <div className="flex items-end">
          <label className="pr-2">Jag är intresserad av målningen </label>
          <input
            type="text"
            className="border-b border-neutral-800 bg-transparent"
          />
          .
        </div>

        <div className="py-2 px-4 mt-4 bg-white border">Skicka meddelande</div>
      </div>

      <div className="pb-20 max-w-screen-lg mx-auto text-neutral-500 grid grid-cols-3 gap-10 text-sm">
        <div>
          <div className="font-bold">Om min konst</div>
          This is my art. Västerås. Om konstnären.
        </div>

        <div>
          <div className="font-bold">Vid beställning</div>
          Så här går det till när du beställer. Hämtning i Västerås, konsthus
          eller leverans. Regler. Även kostnader för leverans.
        </div>
      </div>
    </>
  );
};

export default CategoryList;
