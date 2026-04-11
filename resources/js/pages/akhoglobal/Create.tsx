import { Form, Head } from "@inertiajs/react"
import { type InertiaConfig } from "@inertiajs/core";
import { RouteFormDefinition } from "@/wayfinder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectOption, ChooseFile, Textarea, Checkbox } from "./components/form-fields";
import { FormFieldType } from "./constans/FormField";

type Props = {
    product_fields: {
        key: string;
        type: string;
        label: string;
        required?: boolean;
        options?: { value: string; label: string }[];
    }[] & InertiaConfig['sharedPageProps'];
};

export default function Create({ product_fields, ...props }: Props) {
    // const [formFields, setFormFields] = useState<{ [key: string]: string }>();

    // useEffect(() => {
    //     let form_fields: { [key: string]: string } = {};
    //     product_fields.map((field) => {
    //         form_fields[field.key] = '';
    //     });
    //     setFormFields({ ...form_fields });
    // }, [])

    return (
        <>
            <Head>
                <title>product create</title>
            </Head>
            <div className="container mx-auto min-h-screen">
                {/* <div>
                    {JSON.stringify(product_fields)}
                    {JSON.stringify(formFields)}
                </div> */}
                <div className="p-4 bg-gray-100">
                    <Form {...{ method: 'post', action: '/akho/store' } as RouteFormDefinition<'post'>}
                        className="space-y-2"
                        disableWhileProcessing
                        showProgress={true}
                    >
                        {({
                            errors,
                            hasErrors,
                            processing,
                            progress,
                            wasSuccessful,
                            recentlySuccessful,
                            setError,
                            clearErrors,
                            resetAndClearErrors,
                            defaults,
                            isDirty,
                            reset,
                            submit,
                        }) => (
                            <>
                                {product_fields.map((field, index) => {
                                    switch (field.type) {
                                        case FormFieldType.TEXT:
                                            return (
                                                <Input
                                                    name={field.key}
                                                    placeholder={field.label}
                                                    key={index}
                                                    type='text'
                                                    required={field.required}
                                                ></Input>
                                            );
                                        case FormFieldType.CHOOSE_FILE:
                                            return (
                                                <ChooseFile
                                                    key={index}
                                                    name={field.key}
                                                    placeholder={field.label}
                                                    label={field.label}
                                                    required={field.required}
                                                    error={errors[field.key]}
                                                ></ChooseFile>
                                            );
                                        case FormFieldType.SELECT:
                                            return (
                                                <SelectOption name={field.key}
                                                    key={index}
                                                    placeholder={field.label}
                                                    label={field.label}
                                                    required={field.required}
                                                    options={field.options}
                                                ></SelectOption>
                                            );
                                        case FormFieldType.TEXTAREA:
                                            return (
                                                <Textarea key={index} placeholder={field.label}></Textarea>
                                            );
                                        case FormFieldType.CHECKBOX:
                                            return (
                                                <Checkbox key={index} name={field.key} label={field.label} required={field.required} value={'on'}></Checkbox>
                                            )
                                        case 'multifile':
                                            return (
                                                <div>select multifile</div>
                                            )
                                        default:
                                            break;
                                    }
                                })}
                                <Button
                                    type="submit"
                                    // type="button"
                                    className="mt-2 w-full"
                                    tabIndex={5}
                                    data-test="register-user-button"
                                >
                                    Create product
                                </Button>
                            </>
                        )}
                    </Form>
                </div>
            </div >
        </>
    );
}
