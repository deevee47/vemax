"use client"
import Link from "next/link"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ProductCarousel from "./utils/ProductCarousel"


export function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]" id="landing">
      <section className="w-full relative h-[80vh] lg:h-[90vh] overflow-hidden mt-16">
        <img
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
          height={1080}
          src="/placeholder.svg"
          style={{ 
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50" />
        <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Powering the Future with Innovation</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Discover our cutting-edge electric manufacturing solutions that are transforming industries.
          </p>
          <div className="mt-8">
            <Link
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 px-4">
        <div className="container w-full mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-3">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl font-bold text-blue-500">10K+</h3>
              <p className="text-gray-500">Trusted Customers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl font-bold text-red-500">50K+</h3>
              <p className="text-gray-500">Products Delivered</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl font-bold text-blue-500">100+</h3>
              <p className="text-gray-500">Patents</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl font-bold text-red-500">20+</h3>
              <p className="text-gray-500">Awards</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pt-2 pb-12 md:py-24 lg:py-32 bg-gray-100 px-4" id="about">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                About Our Electric Manufacturing Company
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Founded in 2010, our electric manufacturing company has been at the forefront of innovation, delivering
                cutting-edge solutions that power industries worldwide. With a team of passionate engineers and a
                commitment to sustainability, we strive to redefine the future of electric technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-start gap-4">
                <RocketIcon className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-bold">Mission</h3>
                <p className="text-gray-500">
                  To revolutionize the electric manufacturing industry and create a sustainable future.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <TargetIcon className="h-8 w-8 text-red-500" />
                <h3 className="text-xl font-bold">Vision</h3>
                <p className="text-gray-500">To be the global leader in innovative electric manufacturing solutions.</p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <UsersIcon className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-bold">Team</h3>
                <p className="text-gray-500">
                  Our talented team of engineers and experts are dedicated to pushing the boundaries of electric
                  technology.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <BriefcaseIcon className="h-8 w-8 text-red-500" />
                <h3 className="text-xl font-bold">History</h3>
                <p className="text-gray-500">
                  Established in 2010, our company has a rich history of innovation and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 px-4">
      </section>
      <section className="w-full px-4" id="products">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-500">Our Electric Manufacturing Solutions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our cutting-edge electric manufacturing products that are transforming industries.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <ProductCarousel />
          </div>
        </div>
      </section>


      <section id="sustainability" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Commitment to Sustainability</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Energy Efficiency", description: "All our products meet or exceed ENERGY STAR® standards, helping customers reduce their carbon footprint." },
              { name: "Responsible Sourcing", description: "We partner with suppliers who share our commitment to ethical and sustainable practices." }
            ].map((initiative, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold mb-2 text-green-700">{initiative.name}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="innovation" className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Innovation at Our Core</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "AI-Powered Energy Management", description: "Developing appliances that learn usage patterns to optimize energy consumption." },
              { title: "Advanced Materials Research", description: "Exploring new materials to enhance durability and reduce environmental impact." },
              { title: "IoT Integration", description: "Creating a seamless ecosystem of connected appliances for smarter homes." },
              { title: "Sustainable Manufacturing", description: "Implementing cutting-edge processes to minimize waste and maximize efficiency in production." }
            ].map((innovation, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">{innovation.title}</h3>
                <p className="text-gray-200">{innovation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  
    </div>
  )
}
//@ts-ignore
function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}

//@ts-ignore
function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

//@ts-ignore
function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

//@ts-ignore
function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


//@ts-ignore
function TargetIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

//@ts-ignore
function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
