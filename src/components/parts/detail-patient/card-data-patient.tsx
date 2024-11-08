import { CardDataPatientProps } from "@/types/interface";

export default function CardDataPatient({ children }: CardDataPatientProps) {
  return (
    <div className="p-8 bg-gray-100 rounded-lg my-5">
      <div className="grid grid-cols-2">{children}</div>
    </div>
  );
}
