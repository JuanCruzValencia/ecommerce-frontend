import { CartContext } from "@/context/cart/CartContext";
import { CartContextProps, Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

type Props = {
  product: Product;
};

const ProductHomeCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useContext(CartContext) as CartContextProps;

  return (
    <div className="flex bg-white h-[270px] w-full max-w-[560px]">
      <div className="flex flex-col justify-between bg-green h-full w-full p-7">
        <div className="flex flex-col gap-3">
          <h4 className="text-center text-m font-bold">
            {product.title.split(" ", 3).join(" ")}
          </h4>
          <p className="text-xs text-text">
            {product.description.split(" ", 8).join(" ")}...
          </p>
          <Link href={`/products/${product._id}`}>
            <span className="capitalize font-bold underline underline-offset-8 text-s">
              discover now
            </span>
          </Link>
        </div>
        <div>
          <button
            onClick={() => addToCart(product._id)}
            className="border-2 border-black text-s w-[185px] h-[60px]"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Image
        src={product.thumbnail[0]}
        width={100}
        height={100}
        alt={product.title}
        className="object-contain w-full max-w-[240px] p-7"
      />
    </div>
  );
};

export default ProductHomeCard;
