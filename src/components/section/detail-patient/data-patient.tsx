import CardDataPatient from "@/components/parts/detail-patient/card-data-patient";
import DataPatient from "@/components/parts/detail-patient/data-patient";

export default function DataPatientSection() {
  return (
    <>
      <CardDataPatient>
        <div className="space-y-1">
          <DataPatient title="Puskesmas" desc="Puskesmas" />
          <DataPatient title="No. eRM" desc="No. eRM" />
          <DataPatient title="Penjamin" desc="Penjamin" />
          <DataPatient title="No. Penjamin" desc="No. Penjamin" />
        </div>
        <div className="space-y-1">
          <DataPatient title="No. KK" desc="No. KK" />
          <DataPatient title="NIK" desc="NIK" />
          <DataPatient title="IHS Number" desc="IHS Number" />
        </div>
      </CardDataPatient>
      <CardDataPatient>
        <div className="space-y-1">
          <DataPatient title="Nama" desc="Nama" />
          <DataPatient title="Jenis Kelamin" desc="Jenis Kelamin" />
          <DataPatient
            title="Tempat / Tanggal Lahir"
            desc="Tempat / Tanggal Lahir"
          />
          <DataPatient title="Berat Badan Lahir" desc="Berat Badan Lahir" />
          <DataPatient title="Tinggi Badan Lahir" desc="Tinggi Badan Lahir" />
          <DataPatient title="IMD" desc="IMD" />
        </div>
        <div className="space-y-1">
          <DataPatient title="No. Dokumen RM" desc="No. Dokumen RM" />
          <DataPatient title="No. RM Lama" desc="No. RM Lama" />
          <DataPatient title="Golongan Darah" desc="Golongan Darah" />
          <DataPatient title="No. RM Lama" desc="No. RM Lama" />
          <DataPatient title="E-Mail" desc="E-Mail" />
          <DataPatient title="No. HP" desc="No. HP" />
        </div>
      </CardDataPatient>
      <CardDataPatient>
        <div className="space-y-1">
          <DataPatient title="Provinsi" desc="Provinsi" />
          <DataPatient title="Kota" desc="Kota" />
          <DataPatient title="Kecamatan" desc="Kecamatan" />
          <DataPatient title="Kelurahan / Desa" desc="Kelurahan / Desa" />
        </div>
        <div className="space-y-1">
          <DataPatient title="RT/RW" desc="RT/RW" />
          <DataPatient title="Dusun" desc="Dusun" />
          <DataPatient title="Alamat" desc="Alamat" />
        </div>
      </CardDataPatient>
      <CardDataPatient>
        <div className="space-y-1">
          <DataPatient title="Pekerjaan" desc="Pekerjaan" />
          <DataPatient title="Pekerjaan Suami" desc="Pekerjaan Suami" />
          <DataPatient title="Instansi" desc="Instansi" />
          <DataPatient title="Agama" desc="Agama" />
          <DataPatient title="Pendidikan" desc="Pendidikan" />
          <DataPatient title="Status Perkawinan" desc="Status Perkawinan" />
        </div>
        <div className="space-y-1">
          <DataPatient title="Tanggal Menikah" desc="Tanggal Menikah" />
          <DataPatient title="Status Keluarga" desc="Status Keluarga" />
          <DataPatient title="Warga Negara" desc="Warga Negara" />
          <DataPatient title="Nama Ayah/KK" desc="Nama Ayah/KK" />
          <DataPatient title="Nama Ibu" desc="Nama Ibu" />
        </div>
      </CardDataPatient>
    </>
  );
}
