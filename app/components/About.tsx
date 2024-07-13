"use client"
import React from "react";
import Link from "next/link";
import TeamMember from "./utils/teamMember"
import { BoltIcon, HomeIcon, BuildingIcon, FactoryIcon, LeafIcon, LightbulbIcon, BarChartIcon, AwardIcon } from "lucide-react";
import Image from "next/image";



export default function About() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-blue-700">
          <div className="container mx-auto px-4 z-10 text-white text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">Powering Your Life, Sustainably</h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">Vmax Appliances: Crafting innovative, energy-efficient solutions since 2010.</p>
            <Link href="#journey" className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors animate-fade-in-up animation-delay-600">Discover Our Story</Link>
          </div>
        </section>

        <section id='journey' className="w-full py-10 md:py-24 lg:py-32 bg-gray-100 px-4">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Journey</h2>
                <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our electric manufacturing company has come a long way since its inception in 2010. From humble
                  beginnings to becoming a global leader in innovative electric solutions, our journey has been marked by
                  a relentless pursuit of excellence and a commitment to sustainability.
                </p>
              </div>
              <div>
                <Image
                  alt="Our Journey"
                  className="rounded-lg object-cover"
                  height="400"
                  src="/demo.jpg"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Commitment to Excellence</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: LightbulbIcon, title: "Innovation", description: "Continuously developing cutting-edge technologies to revolutionize home appliances." },
                { icon: LeafIcon, title: "Sustainability", description: "Dedicated to reducing energy consumption and promoting eco-friendly practices in every product." },
                { icon: BoltIcon, title: "Quality", description: "Ensuring reliable, long-lasting appliances that enhance the lives of our customers." }
              ].map((item, index) => (
                <div key={index} className="border border-gray-200 p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-100">
                  <item.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Product Lines</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: HomeIcon, title: "Kitchen Appliances", description: "Energy-efficient refrigerators, ovens, and dishwashers designed for modern kitchens." },
                { icon: BuildingIcon, title: "Laundry Solutions", description: "High-performance washers and dryers that save water and energy without compromising on cleaning power." },
                { icon: FactoryIcon, title: "Smart Home Integration", description: "Connected appliances that work seamlessly with your smart home ecosystem for ultimate convenience and efficiency." }
              ].map((product, index) => (
                <div key={index} className="border border-gray-200 p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-100">
                  <product.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        

        <div className="container px-4 md:px-6 mx-auto my-8 pt-8 pb-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our talented team of engineers and experts are dedicated to pushing the boundaries of electric
                technology.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <TeamMember imgPath="/demo.jpg" name="John Doe" position="Co-founder" />
              <TeamMember imgPath="/demo2.jpg" name="John Doe" position="Co-founder" />
              <TeamMember imgPath="/demo3.jpg" name="John Doe" position="Co-founder" />
            </div>
          </div>
        </div>


        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: BarChartIcon, stat: "10M+", description: "Appliances Sold" },
                { icon: LeafIcon, stat: "30%", description: "Energy Savings for Customers" },
                { icon: AwardIcon, stat: "50+", description: "Industry Awards" }
              ].map((item, index) => (
                <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                  <item.icon className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-4xl font-bold mb-2">{item.stat}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}