import Image from 'next/image';

const testimonialsData = [
    {
        id: 1,
        name: "Dianne Russell",
        company: "Starbucks",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
        image: "/images/testimonial-dianne.jpg",
        alt: "Dianne Russell"
    },
    {
        id: 2,
        name: "Kristin Watson",
        company: "Louis Vuitton",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
        image: "/images/testimonial-kristin.jpg",
        alt: "Kristin Watson"
    },
    {
        id: 3,
        name: "Kathryn Murphy",
        company: "McDonald's",
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
        image: "/images/testimonial-kathryn.jpg",
        alt: "Kathryn Murphy"
    }
];

const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9L16.91 9.74L18 16L12 13.27L6 16L7.09 9.74L2 9L8.91 8.26L12 2Z" fill="#006B6A" />
    </svg>
);

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-32 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h3 className="text-lg font-semibold text-dark mb-4">Clients Feedback</h3>
                    <h2 className="text-5xl lg:text-6xl font-bold text-dark">Customer testimonials</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-lg p-8 border border-secondary">
                            <div className="flex space-x-1 mb-6">
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                            <p className="text-lg text-dark/60 mb-8">
                                "{testimonial.testimonial}"
                            </p>
                            <div className="flex items-center space-x-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.alt}
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 rounded-full"
                                />
                                <div>
                                    <h4 className="font-semibold text-dark">{testimonial.name}</h4>
                                    <p className="text-dark/60">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 