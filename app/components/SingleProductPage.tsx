import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { products } from './data';
import Link from 'next/link';

interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    imgUrl: string;
}

interface SingleProductPageProps {
    product: Product;
}

const SingleProductPage: React.FC<SingleProductPageProps> = ({ product }) => {
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-10 bg-gray-100 min-h-screen"
            >
                <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0 md:w-1/2 relative h-96">
                            <Image
                                src={product.imgUrl}
                                alt={product.name}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-8 md:w-1/2">
                            <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">
                                {product.category}
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>
                            <p className="mt-2 text-gray-600 text-lg leading-relaxed">
                                {product.description}
                            </p>
                            <div className="mt-8">
                                <Link href={"/products"}>
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
                                    View All Products
                                </button>
                                </Link>
                                <Link href={"/contact"}>
                                    <button className="border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out">
                                        Want to Buy?
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = products.map(product => ({
        params: { id: product.id },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const product = products.find(p => p.id === params?.id);
    return {
        props: {
            product,
        },
    };
};

export default SingleProductPage;