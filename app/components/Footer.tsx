import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-200 text-white py-6">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-lg text-gray-800 font-bold">Vmax</h2>
                        <p className="text-gray-800">123 Electric Ave, Innovation City, 45678</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <nav className="flex space-x-4 text-gray-800">
                            <Link href="/" className="hover:text-gray-400">
                                Home
                            </Link>
                            <Link href="/about" className="hover:text-gray-400">
                                About
                            </Link>
                            <Link href="/products" className="hover:text-gray-400">
                                Products
                            </Link>
                            <Link href="/contact" className="hover:text-gray-400">
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-6 pt-4 text-center">
                    <p className="text-sm text-gray-500">© {new Date().getFullYear()} Vmax. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
