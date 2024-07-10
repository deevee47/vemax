"use client"
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import { products as initialProducts } from './data';
import Link from 'next/link';
import { Button } from './ui/button';

interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    imgUrl: string;
}

const ProductCard: React.FC<{ product: Product; priority?: boolean }> = React.memo(({ product, priority = false }) => {
    return (
        <Link href={`/products/${product.id}`} passHref>
            <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out"
                whileHover={{
                    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
                    y: -5,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                }}
            >
                <motion.div
                    className="relative"
                    whileHover={{
                        backgroundColor: "rgba(59, 130, 246, 0.05)", // Light blue tint
                    }}
                >
                    <div className="w-full h-60 bg-gray-200 flex items-center justify-center overflow-hidden">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={product.imgUrl}
                                alt={product.name}
                                width={400}
                                height={240}
                                className="w-full h-60 object-cover"
                                priority={priority}
                                loading={priority ? 'eager' : 'lazy'}
                            />
                        </motion.div>
                    </div>
                    <motion.div
                        className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "#2563EB", // Slightly lighter blue
                        }}
                    >
                        {product.category}
                    </motion.div>
                </motion.div>
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 truncate">{product.name}</h3>
                    <p className="text-gray-600 mb-4 h-12 overflow-hidden">{product.description}</p>
                    <Button
                        className="flex w-full border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md text-center hover:text-white hover:bg-blue-600 bg-white"
                    >
                        View Details
                    </Button>
                </div>
            </motion.div>
        </Link>
    );
});


const SkeletonCard: React.FC = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
        <div className="w-full h-60 bg-gray-300"></div>
        <div className="p-4">
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-4"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
        </div>
    </div>
);

const ProductsPage: React.FC<{ products?: Product[] }> = ({ products = initialProducts }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const categories = useMemo(() =>
        Array.from(new Set(products.map(product => product.category))),
        [products]
    );

    const filteredProducts = useMemo(() =>
        products.filter(product => {
            const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const categoryMatch = selectedCategory === '' || product.category === selectedCategory;
            return nameMatch && categoryMatch;
        }),
        [products, searchTerm, selectedCategory]
    );

    useEffect(() => {
        setLoading(false);
    }, []);

    const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }, []);

    const handleCategoryChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-100"
        >
            <div className="container mx-auto px-8 py-8">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0 md:space-x-4"
                >
                    <div className="relative rounded-md shadow-sm w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <div className="relative">
                        <select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="pl-4 pr-10 py-2 w-full md:w-auto border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                        >
                            <option value="">All Categories</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                </motion.div>
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key="skeleton"
                            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {Array.from({ length: 8 }).map((_, index) => (
                                <SkeletonCard key={index} />
                            ))}
                        </motion.div>
                    ) : filteredProducts.length === 0 ? (
                        <motion.div
                            key="no-products"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center text-gray-600 text-lg mt-10"
                        >
                            No products found. Try adjusting your search filters or categories.
                        </motion.div>
                    ) : (
                        <motion.div
                            key="products"
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: { staggerChildren: 0.05 }
                                }
                            }}
                        >
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProductCard
                                        product={product}
                                        priority={index < 4}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

ProductsPage.displayName = 'ProductsList';

export default ProductsPage;