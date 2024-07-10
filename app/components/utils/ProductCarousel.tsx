import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { products } from "../data"

const ProductCarousel : React.FC = () => {

    return (
        <div className="relative overflow-hidden w-full">
            <motion.div
                className="flex"
                animate={{
                    x: [0, -100 * products.length],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    },
                }}
            >
                {[...products, ...products].map((product, index) => (
                    <div
                        key={`${product.id}-${index}`}
                        className="flex-none w-full sm:w-1/2 md:w-1/3 p-4"
                    >
                        <div className="bg-white min-h-full max-h-full rounded-lg shadow-md overflow-hidden">
                            <Image
                                src={product.imgUrl}
                                alt={product.name}
                                width={500}
                                height={400}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold">{product.name}</h3>
                                <p className="mt-2 text-gray-500">{product.description}</p>
                                <div className="mt-4">
                                    <Link
                                        className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                        href="#"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
export default ProductCarousel