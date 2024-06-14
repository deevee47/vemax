
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import Navbar from "./Navbar"

export function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]" id="landing">
      <Navbar />
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl font-bold text-blue-500">10K+</h3>
              <p className="text-gray-500">Customers</p>
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" id="about">
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
      <section className="w-full py-12 md:py-24 lg:py-32">
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
              <img
                alt="Our Journey"
                className="rounded-lg object-cover"
                height="400"
                src="/placeholder.svg"
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
      <section className="w-full py-12 md:py-24 lg:py-32" id="products">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Electric Manufacturing Solutions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our cutting-edge electric manufacturing products that are transforming industries.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white shadow-md">
              <img
                alt="Product 1"
                className="rounded-t-lg object-cover"
                height="250"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/250",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Electric Motor</h3>
                <p className="mt-2 text-gray-500">
                  Our high-efficiency electric motors are designed for industrial and commercial applications.
                </p>
                <div className="mt-4">
                  <Link
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-md">
              <img
                alt="Product 2"
                className="rounded-t-lg object-cover"
                height="250"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/250",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Electric Charger</h3>
                <p className="mt-2 text-gray-500">
                  Our advanced electric chargers are designed for residential and commercial use.
                </p>
                <div className="mt-4">
                  <Link
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-md">
              <img
                alt="Product 3"
                className="rounded-t-lg object-cover"
                height="250"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/250",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Electric Inverter</h3>
                <p className="mt-2 text-gray-500">
                  Our reliable electric inverters are designed for seamless power conversion.
                </p>
                <div className="mt-4">
                  <Link
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our talented team of engineers and experts are dedicated to pushing the boundaries of electric
                technology.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white shadow-md">
                <img
                  alt="Team Member 1"
                  className="rounded-t-lg object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="mt-2 text-gray-500">Lead Engineer</p>
                  <div className="mt-4">
                    <Link
                      className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      href="#"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white shadow-md">
                <img
                  alt="Team Member 2"
                  className="rounded-t-lg object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                  <p className="mt-2 text-gray-500">Senior Engineer</p>
                  <div className="mt-4">
                    <Link
                      className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      href="#"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white shadow-md">
                <img
                  alt="Team Member 3"
                  className="rounded-t-lg object-cover"
                  height="400"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">Michael Johnson</h3>
                  <p className="mt-2 text-gray-500">Project Manager</p>
                  <div className="mt-4" />
                </div>
              </div>
            </div>
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
