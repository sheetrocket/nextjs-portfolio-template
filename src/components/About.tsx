'use client';

import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex justify-center lg:justify-start">
                        <Image
                            src="/images/about-me-image.jpg"
                            alt="About John"
                            width={500}
                            height={600}
                            className="w-full max-w-lg h-auto rounded-lg"
                            priority
                        />
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-dark text-center lg:text-left">About</h3>
                            <h2 className="text-5xl lg:text-6xl font-bold text-dark">About Me</h2>
                        </div>
                        <p className="text-xl text-dark/60 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                            <br /><br />
                            Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
} 