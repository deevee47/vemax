"use client"
import React, { useState, useEffect } from 'react';
import { products } from './data';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';

interface Product {
    name: string;
    category: string;
    description: string;
    imgUrl: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
            <div className="relative">
                <img loading="lazy"
                    src={product.imgUrl}
                    alt={product.name}
                    className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
                    {product.category}
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800 truncate">
                    {product.name}
                </h3>
                <p className="text-gray-600 mb-4 h-12 overflow-hidden">
                    {product.description}
                </p>
                <button className="flex-1 border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition duration-300 ease-in-out">
                    View Details
                </button>
            </div>
        </div>
    );
};

const SkeletonCard: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
                <div className="w-full h-60 bg-gray-200 animate-pulse"></div>
            </div>
            <div className="p-4">
                <div className="h-6 bg-gray-200 animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-200 animate-pulse mb-4"></div>
                <div className="h-10 bg-gray-200 animate-pulse"></div>
            </div>
        </div>
    );
};

const Products: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    useEffect(() => {
        const categoryList: string[] = Array.from(new Set(products.map(product => product.category)));
        setCategories(categoryList);
    }, []);

    useEffect(() => {
        setLoading(true);
        const filtered = products.filter(
            (product) => {
                const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
                const categoryMatch = selectedCategory === '' || product.category === selectedCategory;
                return nameMatch && categoryMatch;
            }
        );
        setFilteredProducts(filtered);
        setLoading(false);
    }, [searchTerm, selectedCategory]);

    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-10 bg-gray-100 min-h-screen"
            >
                <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="relative rounded-md shadow-sm w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <div className="relative">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="pl-4 pr-10 py-2 w-full md:w-auto border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                        >
                            <option value="">All Categories</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                </div>
                <AnimatePresence>
                    {loading ? (
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                        >
                            {Array.from({ length: 8 }).map((_, index) => (
                                <SkeletonCard key={index} />
                            ))}
                        </motion.div>
                    ) : filteredProducts.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="text-center text-gray-600 text-lg mt-10"
                        >
                            No products to display!
                        </motion.div>
                    ) : (
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                        >
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.name} product={product} />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default Products;
