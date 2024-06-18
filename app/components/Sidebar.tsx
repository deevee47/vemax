import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MountainIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Products', href: '/products' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    exit={{ x: -300 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50"
                >
                    <div className="flex justify-between items-center p-4">
                        <MountainIcon className="text-blue-600 h-6 w-6" />
                        <XIcon className="text-gray-600 h-6 w-6 cursor-pointer" onClick={onClose} />
                    </div>
                    <nav className="mt-8 flex flex-col justify-center items-center h-full">
                        {navItems.map((item, index) => (
                            <Link key={index} href={item.href}>
                                <motion.div
                                    className="w-full py-4 text-center text-2xl text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onClose}
                                >
                                    {item.label}
                                </motion.div>
                            </Link>
                        ))}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;