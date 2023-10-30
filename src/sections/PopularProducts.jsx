import { useState } from "react";
import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
    const allProducts = [...products, ...products];

    return (
        <section id="products" className="max-container max-sm:mt-12">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-palanquin font-bold">
                    <span className="text-coral-red"> Products </span>
                </h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
                    Experience top-notch quality and style with our sought-after
                    selections. Discover a world of comfort, design, and value
                </p>
            </div>

            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
                {allProducts.map((product) => (
                    <ProductCardWithCounter key={product.name} {...product} />
                ))}
            </div>
        </section>
    );
};

const ProductCardWithCounter = (props) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="relative">
            <PopularProductCard {...props} />
            <div className="absolute bottom-0 right-0 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
                <button
                    className="w-6 h-6 text-gray-700 font-bold"
                    onClick={handleDecrement}
                >
                    -
                </button>
                <span className="mx-2 text-lg font-bold">{count}</span>
                <button
                    className="w-6 h-6 text-gray-700 font-bold"
                    onClick={handleIncrement}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default PopularProducts;
