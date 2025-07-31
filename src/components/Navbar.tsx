'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-custom fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <div className="flex items-center">
                            <svg width="187" height="40" viewBox="0 0 187 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.88 16.39L21.38 21.39H3.99L32.97 32.96H2.76L21.37 21.39H52.42L19.27 8.87H58.63L13.99 14.52H74.19L14.21 19.24H90.64L13.99 13.99H106.48L4.75 19.11H113.74L14.21 18.86H129L11.17 13.96H141.96L12.67 13.58H157.53L19.8 13.58H177.74L5.88 5.88H183.62" stroke="#394149" strokeWidth="1" />
                                <path d="M3.99 3.48L32.97 32.96" stroke="#006B6A" strokeWidth="1" />
                            </svg>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="#home" className="text-primary font-medium px-3 py-2 rounded-md text-sm">Home</Link>
                            <Link href="#portfolio" className="text-dark font-medium px-3 py-2 rounded-md text-sm">Portfolio</Link>
                            <Link href="#about" className="text-dark font-medium px-3 py-2 rounded-md text-sm">About me</Link>
                            <Link href="#testimonials" className="text-dark font-medium px-3 py-2 rounded-md text-sm">Testimonials</Link>
                        </div>
                    </div>

                    {/* Desktop Contact Button */}
                    <div className="hidden md:block">
                        <button className="border border-primary text-primary px-6 py-2 rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                            Contact Me
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg
                                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Close icon */}
                            <svg
                                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu drawer */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg">
                    <Link
                        href="#home"
                        className="text-primary font-medium block px-3 py-2 rounded-md text-base"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="#portfolio"
                        className="text-dark font-medium block px-3 py-2 rounded-md text-base hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="#about"
                        className="text-dark font-medium block px-3 py-2 rounded-md text-base hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About me
                    </Link>
                    <Link
                        href="#testimonials"
                        className="text-dark font-medium block px-3 py-2 rounded-md text-base hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Testimonials
                    </Link>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <button className="w-full border border-primary text-primary px-6 py-2 rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
} 