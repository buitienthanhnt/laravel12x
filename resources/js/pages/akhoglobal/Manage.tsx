import { Head, Link } from "@inertiajs/react"
import { type InertiaConfig } from "@inertiajs/core";
import { ProductPaginationInterface } from "@/types/akhoglobal/product";
import akho from "@/routes/akho";

type Props = {
    products: ProductPaginationInterface;
} & InertiaConfig['sharedPageProps'];

export default function Manage({ products, ...props }: Props) {
    console.log('?????', products.data);


    return (
        <>
            <Head>
                <title>Manage demo</title>
            </Head>
            <div className="container mx-auto bg-blue-300 min-h-screen">
                <h3>
                    Manage page
                </h3>
                <Link href={akho.register.url()} className="border border-amber-800 rounded-md  p-2 text-xl mt-4 flex inline-block" >create new product</Link>
            </div>
        </>
    );
}
