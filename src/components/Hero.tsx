'use client';

import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="pt-20 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-2xl font-semibold text-dark">Hey, I am John</h2>
                        <h1 className="text-6xl lg:text-7xl font-bold text-dark leading-tight">
                            I create product design and brand experience
                        </h1>
                        <p className="text-lg text-dark/60 max-w-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>
                        <div className="pt-6">
                            <button className="bg-primary text-white px-8 py-4 rounded-md text-base font-medium hover:bg-primary/90 transition-colors">
                                Get In Touch
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <Image
                            src="/images/header-image.jpg"
                            alt="John's Profile"
                            width={400}
                            height={500}
                            className="w-full max-w-md h-auto rounded-lg shadow-custom"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
} 