import { DataPatientProps } from "@/types/interface";

export default function DataPatient({ title, desc }: DataPatientProps) {
  return (
    <div className="grid grid-cols-2">
      <p className="font-medium">{title}</p>
      <p>: {desc}</p>
    </div>
  );
}
