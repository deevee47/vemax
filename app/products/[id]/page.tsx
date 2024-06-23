import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '../../components/data.js';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default function SingleProductPage({ params }: { params: { id: string } }) {
    const product = products.find(p => p.id === params.id);

    if (!product) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <div className="p-10 bg-gray-100 min-h-screen">
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
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}