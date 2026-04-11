export type FormField = {
    name: string,
    value?: string,
    required?: boolean,
    placeholder?: string,
    options?: { value: string, label: string }[],
    error?: string,
    label?: string,
};
