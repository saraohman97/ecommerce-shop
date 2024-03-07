"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div onClick={handleClick} className="relative">
      {/* PRODUCT */}
      <Image
        src={data.images?.[0]?.url}
        alt={data.name}
        width={500}
        height={500}
        className="object-cover w-full h-[450px]"
      />
      <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
        <div className="flex gap-x-6 justify-center">
          <IconButton
            onClick={onPreview}
            icon={<Expand size={20} className="text-gray-600" />}
          />
          <IconButton
            onClick={onAddToCart}
            icon={<ShoppingCart size={20} className="text-gray-600" />}
          />
        </div>
      </div>
      {/* descriptin */}
      {/* <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-gray-500 text-sm">{data.category?.name}</p>
      </div> */}
      {/* price */}
      {/* <div className="flexitems-center justify-between">
        <Currency value={data?.price} />
      </div> */}
      <div className="flex justify-between text-neutral-500 mt-2">
        <div>{data.name}</div>
        <div className="flex flex-col items-end">
          <div>{data.price} :-</div>
          <div className="text-xs">Exkl. leveransavgift</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
