"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BoltIcon, HomeIcon, BuildingIcon, FactoryIcon, LeafIcon, LightbulbIcon, PhoneIcon, BarChartIcon, AwardIcon, ClockIcon } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {

  return (
    // <div className="flex flex-col min-h-screen">
    //   <Navbar />

    //   <main className="flex-grow">
    //     <section className="relative h-screen flex items-center justify-center overflow-hidden bg-blue-500">
    //       <div className="container mx-auto px-4 z-10 text-white text-center">
    //         <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">Powering Your Life, Sustainably</h1>
    //         <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">Acme Appliances: Crafting innovative, energy-efficient home solutions since 1975.</p>
    //         <a href="#about" className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors animate-fade-in-up animation-delay-600">Discover Our Story</a>
    //       </div>
    //     </section>

    //     <section id="about" className="py-16 bg-gray-100">
    //       <div className="container mx-auto px-4">
    //         <h2 className="text-3xl font-bold text-center mb-12">Our Commitment to Excellence</h2>
    //         <div className="grid md:grid-cols-3 gap-8">
    //           {[
    //             { icon: LightbulbIcon, title: "Innovation", description: "Continuously developing cutting-edge technologies to revolutionize home appliances." },
    //             { icon: LeafIcon, title: "Sustainability", description: "Dedicated to reducing energy consumption and promoting eco-friendly practices in every product." },
    //             { icon: BoltIcon, title: "Quality", description: "Ensuring reliable, long-lasting appliances that enhance the lives of our customers." }
    //           ].map((item, index) => (
    //             <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
    //               <item.icon className="h-12 w-12 text-blue-600 mb-4" />
    //               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
    //               <p className="text-gray-600">{item.description}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </section>

    //     <section id="products" className="py-16 bg-white">
    //       <div className="container mx-auto px-4">
    //         <h2 className="text-3xl font-bold text-center mb-12">Our Product Lines</h2>
    //         <div className="grid md:grid-cols-3 gap-8">
    //           {[
    //             { icon: HomeIcon, title: "Kitchen Appliances", description: "Energy-efficient refrigerators, ovens, and dishwashers designed for modern kitchens." },
    //             { icon: BuildingIcon, title: "Laundry Solutions", description: "High-performance washers and dryers that save water and energy without compromising on cleaning power." },
    //             { icon: FactoryIcon, title: "Smart Home Integration", description: "Connected appliances that work seamlessly with your smart home ecosystem for ultimate convenience and efficiency." }
    //           ].map((product, index) => (
    //             <div key={index} className="border border-gray-200 p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-100">
    //               <product.icon className="h-12 w-12 text-blue-600 mb-4" />
    //               <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
    //               <p className="text-gray-600 mb-4">{product.description}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </section>

    //     <section id="innovation" className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    //       <div className="container mx-auto px-4">
    //         <h2 className="text-3xl font-bold text-center mb-12">Innovation at Our Core</h2>
    //         <div className="grid md:grid-cols-2 gap-8">
    //           {[
    //             { title: "AI-Powered Energy Management", description: "Developing appliances that learn usage patterns to optimize energy consumption." },
    //             { title: "Advanced Materials Research", description: "Exploring new materials to enhance durability and reduce environmental impact." },
    //             { title: "IoT Integration", description: "Creating a seamless ecosystem of connected appliances for smarter homes." },
    //             { title: "Sustainable Manufacturing", description: "Implementing cutting-edge processes to minimize waste and maximize efficiency in production." }
    //           ].map((innovation, index) => (
    //             <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300">
    //               <h3 className="text-xl font-semibold mb-2">{innovation.title}</h3>
    //               <p className="text-gray-200">{innovation.description}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </section>

    //     <section id="sustainability" className="py-16 bg-green-50">
    //       <div className="container mx-auto px-4">
    //         <h2 className="text-3xl font-bold text-center mb-12">Our Commitment to Sustainability</h2>
    //         <div className="grid md:grid-cols-2 gap-8">
    //           {[
    //             { name: "Energy Efficiency", description: "All our products meet or exceed ENERGY STAR® standards, helping customers reduce their carbon footprint." },
    //             { name: "Responsible Sourcing", description: "We partner with suppliers who share our commitment to ethical and sustainable practices." }
    //           ].map((initiative, index) => (
    //             <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-green-500">
    //               <h3 className="text-xl font-semibold mb-2 text-green-700">{initiative.name}</h3>
    //               <p className="text-gray-600">{initiative.description}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </section>

    //     <section className="py-16 bg-blue-700 text-white">
    //       <div className="container mx-auto px-4">
    //         <div className="grid md:grid-cols-3 gap-8 text-center">
    //           {[
    //             { icon: BarChartIcon, stat: "10M+", description: "Appliances Sold" },
    //             { icon: LeafIcon, stat: "30%", description: "Energy Savings for Customers" },
    //             { icon: AwardIcon, stat: "50+", description: "Industry Awards" }
    //           ].map((item, index) => (
    //             <div key={index} className="transform hover:scale-105 transition-transform duration-300">
    //               <item.icon className="h-12 w-12 mx-auto mb-4" />
    //               <p className="text-4xl font-bold mb-2">{item.stat}</p>
    //               <p>{item.description}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </section>
    //   </main>

    //   <Footer />
    // </div>
    <>
      Work in Progress!
    </>
  );
}