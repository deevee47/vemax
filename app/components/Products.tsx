"use client"
import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products as initialProducts } from '../components/data';
import Link from 'next/link';

interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    imgUrl: string;
}

interface ProductCardProps {
    product: Product;
    priority?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Link href={`/products/${product.id}`} passHref>
            <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="relative">
                    <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
                        {!imageLoaded && (
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                            </motion.div>
                        )}
                        <Image
                            src={product.imgUrl}
                            alt={product.name}
                            width={400}
                            height={240}
                            className={`w-full h-60 object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setImageLoaded(true)}
                            priority={priority}
                            loading={priority ? 'eager' : 'lazy'}
                        />
                    </div>
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
                    <div className="flex-1 border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition duration-300 ease-in-out text-center">
                        View Details
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

const SkeletonCard: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
            <div className="relative">
                <div className="w-full h-60 bg-gray-200 animate-pulse"></div>
            </div>
            <div className="p-4">
                <div className="h-6 bg-gray-200 animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-200 animate-pulse mb-4"></div>
                <div className="h-10 bg-gray-200 animate-pulse"></div>
            </div>
        </motion.div>
    );
};

interface ProductsPageProps {
    products?: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products = initialProducts }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    useEffect(() => {
        if (products.length > 0) {
            const categoryList: string[] = Array.from(new Set(products.map(product => product.category)));
            setCategories(categoryList);
            setFilteredProducts(products);
        }
        setLoading(false);
    }, [products]);

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
    }, [searchTerm, selectedCategory, products]);

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -20 }
    };

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.5
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <Navbar />
            <div className="p-10 bg-gray-100 min-h-screen">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0 md:space-x-4"
                >
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
                </motion.div>
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key="skeleton"
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
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
                            key="no-products"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center text-gray-600 text-lg mt-10"
                        >
                            No products to display!
                        </motion.div>
                    ) : (
                        <motion.div
                            key="products"
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
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
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
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
            <Footer />
        </motion.div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            products: initialProducts,
        },
    };
};

export default ProductsPage;