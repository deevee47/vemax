"use client"
import React, { useState } from 'react';
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 rounded-b-lg shadow-lg"
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6 h-16">
          <Link href="/">
            <motion.div
              className="flex items-center gap-2 font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VMax
            </motion.div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {['Home', 'About', 'Products', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                //@ts-ignore
                onHoverStart={() => setIsHovered(item)}
                onHoverEnd={() => setIsHovered(null)}
              >
                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                  <motion.div
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                    <AnimatePresence>
                      {isHovered === item && (
                        <motion.span
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="md:hidden bg-blue-500 hover:bg-blue-600 text-white"
              size="icon"
              variant="outline"
              onClick={toggleSidebar}
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </motion.div>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;