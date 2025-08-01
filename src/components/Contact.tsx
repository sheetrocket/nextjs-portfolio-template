'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
        acceptTerms: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            acceptTerms: e.target.checked
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className="py-32 bg-lighter">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h3 className="text-lg font-semibold text-dark mb-4">Get In Touch</h3>
                    <h2 className="text-5xl lg:text-6xl font-bold text-dark mb-8">Contact me</h2>
                    <p className="text-lg text-dark/60">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-dark font-medium mb-2">First name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-dark font-medium mb-2">Last name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-dark font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-dark font-medium mb-2">Phone number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-dark font-medium mb-2">Choose a topic</label>
                        <select
                            name="topic"
                            value={formData.topic}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="">Select one...</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Project Discussion">Project Discussion</option>
                            <option value="Partnership">Partnership</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-dark font-medium mb-2">Message</label>
                        <textarea
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Type your message..."
                            className="w-full px-4 py-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        />
                    </div>
                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            id="terms"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleCheckboxChange}
                            required
                            className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label htmlFor="terms" className="text-dark">I accept the terms</label>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-primary text-white px-12 py-4 rounded-lg text-base font-medium hover:bg-primary/90 transition-colors"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
} 