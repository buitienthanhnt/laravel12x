export type FormField = {
  name: string,
  value?: string,
  required?: boolean,
  placeholder?: string,
  options?: { value: string, label: string }[],
  error?: string,
  label?: string,
  type?: string,
};

export type FormFieldDefine = {
  key: string;
  type: string;
  label: string;
  required?: boolean;
  options?: { value: string; label: string }[];
} 