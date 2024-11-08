import CheckboxItem from "@/components/parts/register/step-2/checkbox";
import Circle from "@/components/parts/register/step-2/circle";

export default function VisualScreening() {
  return (
    <div className="space-y-5">
      <div className="flex space-x-10">
        <Circle background="bg-error-700" title="Merah" />
        <div className="grid grid-cols-2 gap-1">
          <CheckboxItem title="Tidak sadarkan diri atau pingsan" id="1" />
          <CheckboxItem title="Tidak bernafas atau kesulitan bernafas" id="1" />
          <CheckboxItem title="Nadi tidak teraba atau henti jantung" id="1" />
          <CheckboxItem title="Kejang berulang atau kejang lama" id="1" />
        </div>
      </div>
      <div className="flex space-x-10">
        <Circle background="bg-warning-700" title="Orange" />
        <div className="grid grid-cols-2 gap-10">
          <CheckboxItem title="Nyeri hebat" id="1" />
          <CheckboxItem title="Nyeri dada" id="1" />
        </div>
      </div>
      <div className="flex space-x-10">
        <Circle background="bg-warning-500" title="Kuning" />
        <div className="grid grid-cols-2 gap-10">
          <CheckboxItem title="Tampak pucat" id="1" />
          <CheckboxItem title="Lemas" id="1" />
          <CheckboxItem title="Sempoyongan" id="1" />
        </div>
      </div>
      <div className="flex space-x-10">
        <Circle background="bg-success-700" title="Hijau" />
        <div className="grid grid-cols-2 gap-10">
          <CheckboxItem title="Kondisi stabil" id="1" />
        </div>
      </div>
    </div>
  );
}
