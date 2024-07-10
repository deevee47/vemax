import { Button } from "@/app/components/ui/button"
import { Label } from "@/app/components/ui/label"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { CardContent, Card } from "@/app/components/ui/card"
import Image from "next/image"

export function Contact() {
  return (
    <div className="flex flex-col">
      <main className="px-8 md:px-6">
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center" id="contact">
          <div className="container">
            <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:items-start">
              <div className="w-full max-w-md -mt-10">
                <h2 className="text-3xl font-bold tracking-tighter md:text-5xl/tight py-6">Contact Us</h2>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} />
                  </div>
                  <Button className="w-full bg-black" type="submit">
                    Submit
                  </Button>
                </form>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-24">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center">
                    <Image
                      alt="QR Code 1"
                      className="rounded-lg object-contain"
                      height={500}
                      src="/rickrollqr.webp"
                      width={500}
                    />
                    <div className="text-center">
                      <h3 className="text-lg font-bold">Facebook</h3>
                      <p className="text-gray-500 ">Scan this QR code or click here</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center">
                    <Image
                      alt="QR Code 1"
                      className="rounded-lg object-contain"
                      height={500}
                      src="/rickrollqr.webp"
                      width={500}
                    />
                    <div className="text-center">
                      <h3 className="text-lg font-bold">Instagram</h3>
                      <p className="text-gray-500 ">Scan this QR code or click here</p>
                    </div>
                  </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center">
                      <Image
                        alt="QR Code 1"
                        className="rounded-lg object-contain"
                        height={500}
                        src="/rickrollqr.webp"
                        width={500}
                      />
                      <div className="text-center">
                        <h3 className="text-lg font-bold">Maps</h3>
                        <p className="text-gray-500 ">Scan this QR code or click here</p>
                      </div>
                    </CardContent>
                  </Card>

              </div>
            </div>
          </div>
        </section>
      </main>
      </div>
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
