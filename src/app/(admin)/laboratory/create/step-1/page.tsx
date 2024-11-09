"use client";

import SelectSearch from "@/components/select-search";
import { useState } from "react";

import Link from "next/link";
import DataPasienSection from "@/components/section/register/step-1/data-pasien";
import CardSection from "@/components/section/register/step-1/card-bio-data";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function CreateLaboratoryPage() {
  const [valueFramework, setValueFramework] = useState<any>({
    id: 0,
    label: "",
  });

  return (
    <section className="pl-32 pr-6 -mt-10">
      <div className="flex justify-between items-center">
        <div className="grid grid-cols-2 items-center gap-4">
          <h1 className="font-semibold">Cari Data Pasien</h1>
          <SelectSearch
            data={frameworks}
            placeholder="Pasien"
            valueId={valueFramework}
            setValueId={setValueFramework}
          />
        </div>
        <div className="relative flex justify-end items-center space-x-14">
          <div className="flex flex-col items-center space-y-1">
            <div className="w-10 h-10 rounded-full bg-primary-700 flex justify-center items-center">
              <p className="text-slate-50">1</p>
            </div>
            <p className="text-primary-700">Data Pasien</p>
          </div>
          <div className="w-[126px] h-[2px] bg-slate-500 absolute top-5 right-[5.5rem]"></div>
          <div className="flex flex-col items-center space-y-1">
            <div className="w-10 h-10 rounded-full border border-primary-700 flex justify-center items-center">
              <p className="text-primary-700">2</p>
            </div>
            <p>Pendaftaran Lab</p>
          </div>
        </div>
      </div>
      <DataPasienSection />
      <CardSection />
      <div className="flex justify-end space-x-2 pb-4">
        <Link
          href="/laboratory"
          className="border px-5 py-2 flex transition-colors duration-300 items-center border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-slate-50 rounded-full"
        >
          Batal
        </Link>
        <Link
          href="/laboratory/create/step-2"
          className="px-5 flex py-2 transition-colors duration-300 items-center text-slate-50 bg-primary-700 hover:bg-primary-800 rounded-full"
        >
          Lanjut
        </Link>
      </div>
    </section>
  );
}
