export interface debounceInterface {
  value: string;
  delay: number;
}

export interface SelectSearchProps {
  data: { value: string | number; label: string }[]; // Definisikan tipe data
  placeholder: string;
  valueId?: { id: string | number; label: string };
  type?: string;
  setValueId?: (v: { id: string | number; label: string }) => void;
}

export interface NavbarProps {
  type?: string;
}

export interface CardPasienProps {
  title: string;
  children: React.ReactNode;
  checkbox?: (event: boolean) => void;
  type?: string;
}

export interface InputComponentProps {
  children: React.ReactNode;
  title: string;
  type?: string;
  vertical?: string;
}
