'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-custom fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <div className="flex items-center">
                            <svg width="187" height="40" viewBox="0 0 187 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.88 16.39L21.38 21.39H3.99L32.97 32.96H2.76L21.37 21.39H52.42L19.27 8.87H58.63L13.99 14.52H74.19L14.21 19.24H90.64L13.99 13.99H106.48L4.75 19.11H113.74L14.21 18.86H129L11.17 13.96H141.96L12.67 13.58H157.53L19.8 13.58H177.74L5.88 5.88H183.62" stroke="#394149" strokeWidth="1" />
                                <path d="M3.99 3.48L32.97 32.96" stroke="#006B6A" strokeWidth="1" />
                            </svg>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="#home" className="text-primary font-medium px-3 py-2 rounded-md text-sm">Home</Link>
                            <Link href="#portfolio" className="text-dark font-medium px-3 py-2 rounded-md text-sm">Portfolio</Link>
                            <Link href="#about" className="text-dark font-medium px-3 py-2 rounded-md text-sm">About me</Link>
                            <Link href="#testimonials" className="text-dark font-medium px-3 py-2 rounded-md text-sm">Testimonials</Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <button className="border border-primary text-primary px-6 py-2 rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
} 