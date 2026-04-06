import { Head } from "@inertiajs/react"
import { type InertiaConfig } from "@inertiajs/core";
import { useEffect, useState } from "react";

type Props = {
    product_fields: {
        key: string;
        type: string;
        label: string;
        required?: boolean;
    }[] & InertiaConfig['sharedPageProps'];
};

export default function Create({ product_fields, ...props }: Props) {
    const [formFields, setFormFields] = useState<{ [key: string]: string }>();

    useEffect(() => {
        let form_fields: { [key: string]: string } = {};
        product_fields.map((field) => {
            form_fields[field.key] = '';
        });
        setFormFields({ ...form_fields });
    }, [])

    return (
        <>
            <Head>
                <title>product create</title>
            </Head>
            <div className="container mx-auto bg-blue-300 min-h-screen">
                <h3>create new product</h3>
                <div>
                    conten of the product form
                </div>
            </div>
        </>
    );
}
