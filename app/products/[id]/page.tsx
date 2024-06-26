'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../../components/data.js';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Spinner from '../../components/Spinner.jsx';

//@ts-ignore
export default function SingleProductPage({ params }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const product = products.find(p => p.id === params.id);

    if (!product) {
        notFound();
    }

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    const imageVariants = {
        initial: { scale: 1.2, opacity: 0 },
        animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
    };

    const contentVariants = {
        initial: { x: 50, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { delay: 0.2, duration: 0.5 } }
    };

    const buttonVariants = {
        initial: { scale: 0 },
        animate: { scale: 1, transition: { delay: 0.5, type: 'spring', stiffness: 150 } },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95 }
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.5 }}
        >
            <Navbar />
            <div className="p-10 bg-gray-100 min-h-screen">
                <motion.div
                    className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="md:flex">
                        <motion.div
                            className="md:flex-shrink-0 md:w-1/2 relative h-96"
                            variants={imageVariants}
                        >
                            <AnimatePresence mode="wait">
                                {!imageLoaded && (
                                    <motion.div
                                        key="spinner"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 z-10 bg-gray-100"
                                    >
                                        <Spinner />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <Image
                                src={product.imgUrl}
                                alt={product.name}
                                fill
                                style={{ objectFit: "cover" }}
                                onLoadingComplete={() => setImageLoaded(true)}
                            />
                        </motion.div>
                        <motion.div
                            className="p-8 md:w-1/2"
                            variants={contentVariants}
                        >
                            <motion.div
                                className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                {product.category}
                            </motion.div>
                            <motion.h1
                                className="text-3xl font-bold text-gray-900 mb-4"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                {product.name}
                            </motion.h1>
                            <motion.p
                                className="mt-2 text-gray-600 text-lg leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                {product.description}
                            </motion.p>
                            <motion.div
                                className="mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <Link href="/products" passHref>
                                    <motion.button
                                        className="bg-blue-600 mr-2 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        View All Products
                                    </motion.button>
                                </Link>
                                <Link href="/contact" passHref>
                                    <motion.button
                                        className="border-blue-600 border-2 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        Want to Buy?
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </motion.div>
    );
}