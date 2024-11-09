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
  return (
    <section className="pl-32 pr-6">
      <h4 className="font-medium text-primary-800 pb-1">Data Pasien</h4>
      <div className="p-8 bg-gray-100 rounded-lg my-5 grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <DataPatient title="No. Rekam Medis" desc="No. Rekam Medis" />
          <DataPatient title="Nama Lengkap" desc="Nama Lengkap" />
          <DataPatient title="NIK" desc="NIK" />
          <DataPatient title="IHS Number" desc="IHS Number" />
          <DataPatient title="Jenis Kelamin" desc="Jenis Kelamin" />
          <DataPatient
            title="Tempat, Tanggal Lahir"
            desc="Tempat, Tanggal Lahir"
          />
          <DataPatient title="Agama" desc="Agama" />
          <DataPatient title="Pendidikan" desc="Pendidikan" />
          <DataPatient title="Pekerjaan" desc="Pekerjaan" />
          <DataPatient title="Alamat" desc="Alamat" />
        </div>
        <div className="space-y-1">
          <DataPatient title="RT/RW" desc="RT/RW" />
          <DataPatient title="Dusun" desc="Dusun" />
          <DataPatient title="Kelurahan / Dusun" desc="Kelurahan / Dusun" />
          <DataPatient title="Kecamatan" desc="Kecamatan" />
          <DataPatient title="Kota / Kab" desc="Kota / Kab" />
          <DataPatient title="Provinsi" desc="Provinsi" />
          <DataPatient title="Status Perkawinan" desc="Status Perkawinan" />
          <DataPatient title="Suami / Istri" desc="Suami / Istri" />
          <DataPatient title="Status Pembayaran" desc="Status Pembayaran" />
        </div>
      </div>
    </section>
  );
}
