"use client";

import DataPatient from "@/components/parts/detail-patient/data-patient";
import InputComponent from "@/components/parts/register/step-1/input-pasien";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface InputField {
  id: number;
  value: string;
}

export default function GeneralConsentPage() {
  const [inputs, setInputs] = useState<InputField[]>([
    { id: Date.now(), value: "" },
  ]);

  // Fungsi untuk menambahkan input baru
  const handleAddInput = () => {
    setInputs([...inputs, { id: Date.now(), value: "" }]);
  };

  // Fungsi untuk menghapus input berdasarkan id
  const handleRemoveInput = (id: number) => {
    if (inputs.length > 1) {
      // Hanya menghapus jika ada lebih dari 1 input
      setInputs(inputs.filter((input) => input.id !== id));
    }
  };

  // Fungsi untuk memperbarui nilai input
  const handleInputChange = (id: number, newValue: string) => {
    setInputs(
      inputs.map((input) =>
        input.id === id ? { ...input, value: newValue } : input
      )
    );
  };

  return (
    <section className="pl-32 pr-6">
      <h4 className="font-medium text-primary-800 pb-1">Data Pasien</h4>
      <div className="p-8 bg-gray-100 rounded-lg my-5">
        <div className="space-y-1">
          <DataPatient title="No. eRM" desc="No. eRM" />
          <DataPatient title="No. RM Lama" desc="No. RM Lama" />
          <DataPatient title="No. Dokumen RM" desc="No. Dokumen RM" />
          <DataPatient title="NIK" desc="NIK" />
          <DataPatient title="Nama KK" desc="Nama KK" />
          <DataPatient title="Nama" desc="Nama" />
          <DataPatient title="Jenis Kelamin" desc="Jenis Kelamin" />
          <DataPatient title="Tempat & Tgl Lahir" desc="Tempat & Tgl Lahir" />
          <DataPatient title="Alamat" desc="Alamat" />
          <DataPatient title="Umur" desc="Umur" />
        </div>
      </div>
      <h4 className="font-medium text-primary-800 py-1">
        Yang bertanda Tangan
      </h4>
      <div className="grid grid-cols-2 gap-x-10 py-3">
        <div className="space-y-3">
          <InputComponent
            title="Bertindak Atas"
            type="required"
            vertical="vertical"
          >
            <div className="flex border-primary-700 items-center w-full space-x-1 bg-white rounded-full bg-transparent border">
              <Input
                placeholder="Cari..."
                // value={
                //   (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
                // }
                // onChange={(event) =>
                //   table.getColumn(filterBy)?.setFilterValue(event.target.value)
                // }
                className="rounded-full border-none w-full bg-transparent"
              />
            </div>
          </InputComponent>
          <InputComponent title="Hubungan" type="required" vertical="vertical">
            <div className="flex border-primary-700 items-center w-full space-x-1 bg-white rounded-full bg-transparent border">
              <Input
                placeholder="Cari..."
                // value={
                //   (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
                // }
                // onChange={(event) =>
                //   table.getColumn(filterBy)?.setFilterValue(event.target.value)
                // }
                className="rounded-full border-none w-full bg-transparent"
              />
            </div>
          </InputComponent>
          <InputComponent title="Nama" vertical="vertical">
            <div className="flex border-primary-700 items-center w-full space-x-1 bg-white rounded-full bg-transparent border">
              <Input
                placeholder="Cari..."
                // value={
                //   (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
                // }
                // onChange={(event) =>
                //   table.getColumn(filterBy)?.setFilterValue(event.target.value)
                // }
                className="rounded-full border-none w-full bg-transparent"
              />
            </div>
          </InputComponent>
          <InputComponent
            title="Jenis Kelamin"
            type="required"
            vertical="vertical"
          >
            <div className="flex border-primary-700 items-center w-full space-x-1 bg-white rounded-full bg-transparent border">
              <Input
                placeholder="Cari..."
                // value={
                //   (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
                // }
                // onChange={(event) =>
                //   table.getColumn(filterBy)?.setFilterValue(event.target.value)
                // }
                className="rounded-full border-none w-full bg-transparent"
              />
            </div>
          </InputComponent>
          <InputComponent
            title="Tempat Lahir"
            type="required"
            vertical="vertical"
          >
            <div className="flex border-primary-700 items-center w-full space-x-1 bg-white rounded-full bg-transparent border">
              <Input
                placeholder="Cari..."
                // value={
                //   (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
                // }
                // onChange={(event) =>
                //   table.getColumn(filterBy)?.setFilterValue(event.target.value)
                // }
                className="rounded-full border-none w-full bg-transparent"
              />
            </div>
          </InputComponent>
          <h4 className="font-medium text-primary-800 py-1 mt-5">
            Pelepasan Informasi Kepada
          </h4>
          {inputs.map((input, index) => (
            <div key={input.id} className="flex space-x-2 items-center">
              <div className="flex border-primary-700 items-center w-full space-x-1 bg-white rounded-full bg-transparent border">
                <Input
                  placeholder="Cari..."
                  value={input.value}
                  onChange={(e) => handleInputChange(input.id, e.target.value)}
                  className="rounded-full border-none w-full bg-transparent"
                />
              </div>
              {index === inputs.length - 1 && (
                <div onClick={handleAddInput}>
                  <PlusIcon className="w-6 h-6 text-primary-700 cursor-pointer" />
                </div>
              )}
              <div
                onClick={() => handleRemoveInput(input.id)}
                className={
                  inputs.length > 1 ? "cursor-pointer" : "cursor-not-allowed"
                }
              >
                <Trash2 className="w-6 h-6 text-primary-700" />
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <InputComponent title="Tanggal Lahir" vertical="vertical">
            <div className="flex border-primary-700 items-center w-full space-x-1 bg-white rounded-full bg-transparent border">
              <Input
                placeholder="Cari..."
                // value={
                //   (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
                // }
                // onChange={(event) =>
                //   table.getColumn(filterBy)?.setFilterValue(event.target.value)
                // }
                className="rounded-full border-none w-full bg-transparent"
              />
            </div>
          </InputComponent>
          <InputComponent title="Alamat" vertical="vertical">
            <div className="flex border-primary-700 items-center w-full space-x-1 bg-white rounded-lg bg-transparent border">
              <Textarea
                placeholder="Cari..."
                // value={
                //   (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
                // }
                // onChange={(event) =>
                //   table.getColumn(filterBy)?.setFilterValue(event.target.value)
                // }
                className="rounded-lg border-none w-full bg-transparent"
              />
            </div>
          </InputComponent>
          <InputComponent title="No. Telepon" vertical="vertical">
            <div className="flex border-primary-700 items-center w-full space-x-1 bg-white rounded-full bg-transparent border">
              <Input
                placeholder="Cari..."
                // value={
                //   (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
                // }
                // onChange={(event) =>
                //   table.getColumn(filterBy)?.setFilterValue(event.target.value)
                // }
                className="rounded-full border-none w-full bg-transparent"
              />
            </div>
          </InputComponent>
        </div>
      </div>
      <div className="flex justify-end space-x-2 pb-4">
        <Link
          href="/register"
          className="border px-5 py-2 flex transition-colors duration-300 items-center border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-slate-50 rounded-full"
        >
          Batal
        </Link>
        <Link
          href="/register/create/step-2"
          className="px-5 flex py-2 transition-colors duration-300 items-center text-slate-50 bg-primary-700 hover:bg-primary-800 rounded-full"
        >
          Simpan
        </Link>
      </div>
    </section>
  );
}
