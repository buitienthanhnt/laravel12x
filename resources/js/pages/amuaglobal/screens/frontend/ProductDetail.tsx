import { type ProductDetailInterface } from "@/types/akhoglobal/product";
import { ContentLayout } from "../../layout";

export default function ProductDetail({ product }: { product: ProductDetailInterface }) {
  // console.log(product);

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        {product.image_path && <img src={product.image_path} alt={product.name} className="size-28 rounded-md" />}
        <>
          <p className="font-semibold text-blue-500 text-2xl">{product.name}</p>
          <p className="font-medium">{product.description}</p>
        </>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {product.galleries && product.galleries.map((gallery, index: number) => <img src={gallery.path} alt={product.name} key={index} className="w-full object-contain rounded-md" />)}
      </div>
    </div>
  )
}

ProductDetail.layout = page => <ContentLayout>{page}</ContentLayout>