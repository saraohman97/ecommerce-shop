import { Product } from "@/types";
import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";
import Image from "next/image";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    // <div className="space-y-4 my-10">
    //   <h3 className="font-bold text-3xl">{title}</h3>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    //     {items.map((item) => (
    //       <ProductCard key={item.id} data={item} />
    //     ))}
    //   </div>
    // </div>

    <div className="my-20 max-w-screen-lg mx-auto">
      {/* PRODUCT LIST */}
      <div className="text-center text-neutral-500 mb-10">{title}</div>

      {items.length === 0 && <NoResults />}
      <div className="w-full grid grid-cols-3 gap-10">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
