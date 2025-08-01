import Image from 'next/image';

const portfolioData = [
    {
        id: 1,
        title: "Ahuse",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: "/images/project-ahuse.jpg",
        alt: "Ahuse Project",
        dribbbleLink: "#"
    },
    {
        id: 2,
        title: "App Dashboard",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: "/images/project-app-dashboard.jpg",
        alt: "App Dashboard Project",
        dribbbleLink: "#"
    },
    {
        id: 3,
        title: "Easy Rent",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: "/images/project-easy-rent.jpg",
        alt: "Easy Rent Project",
        dribbbleLink: "#"
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20">
                    <div className="mb-8 lg:mb-0">
                        <h3 className="text-lg font-semibold text-dark mb-4">Recent Projects</h3>
                        <h2 className="text-5xl lg:text-6xl font-bold text-dark">My Portfolio</h2>
                    </div>
                    <button className="bg-accent text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-accent/90 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white" />
                        </svg>
                        <span>Visit My Dribbble</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-card overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.alt}
                                width={400}
                                height={256}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-dark mb-4">{project.title}</h3>
                                <p className="text-lg text-dark/60 mb-6">
                                    {project.description}
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                    <span className="text-primary font-semibold">View In Dribbble</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 1L15 8L8 15" stroke="#006B6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 